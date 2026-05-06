/**
 * /api/photos — gallery photo CRUD via Vercel Blob
 *
 * GET    → public list of all gallery photos (no auth needed)
 * POST   → upload a new photo (auth required, multipart form data)
 * DELETE → remove a photo by URL (auth required, ?url=<blob-url>)
 *
 * All write operations validate the Authorization header against
 * the ADMIN_PASSWORD env var (constant-time comparison).
 *
 * Photos are stored under the `gallery/` prefix in Blob storage so
 * other potential uses of the same Blob bucket stay isolated.
 */

import { put, list, del } from '@vercel/blob';
import { timingSafeEqual } from 'node:crypto';

export const config = {
  runtime: 'nodejs',
  // Allow up to ~5MB images (Vercel function body limit is 4.5MB, but we leave a margin)
  api: { bodyParser: false }
};

const GALLERY_PREFIX = 'gallery/';
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_BYTES = 4 * 1024 * 1024; // 4MB safe limit

// ──────────────────────────────────────────────────────────────────────────
// Auth helper
// ──────────────────────────────────────────────────────────────────────────
function isAuthed(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;

  const header = req.headers.authorization || '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  if (!match) return false;

  const provided = match[1];
  if (provided.length !== expected.length) return false;

  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  try {
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

// ──────────────────────────────────────────────────────────────────────────
// Read full request body into a Buffer (since bodyParser is disabled)
// ──────────────────────────────────────────────────────────────────────────
async function readBody(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BYTES) {
      throw new Error(`File too large (max ${MAX_BYTES / 1024 / 1024} MB)`);
    }
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

// ──────────────────────────────────────────────────────────────────────────
// Handler
// ──────────────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  try {
    // ─── GET: public list ────────────────────────────────────────────────
    if (req.method === 'GET') {
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return res.status(200).json({ photos: [] }); // graceful empty
      }
      const result = await list({ prefix: GALLERY_PREFIX });
      const photos = result.blobs
        .map(b => ({
          url: b.url,
          pathname: b.pathname,
          uploadedAt: b.uploadedAt,
          size: b.size
        }))
        .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
      return res.status(200).json({ photos });
    }

    // ─── POST: upload (auth required) ────────────────────────────────────
    if (req.method === 'POST') {
      if (!isAuthed(req)) {
        return res.status(401).json({ ok: false, error: 'Unauthorized' });
      }
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return res.status(500).json({
          ok: false,
          error: 'Blob storage not configured on this Vercel project'
        });
      }

      const contentType = (req.headers['content-type'] || '').toLowerCase();
      if (!ALLOWED_MIME.has(contentType)) {
        return res.status(415).json({
          ok: false,
          error: `Unsupported type: ${contentType}. Allowed: jpg, png, webp`
        });
      }

      const buf = await readBody(req);
      if (buf.length === 0) {
        return res.status(400).json({ ok: false, error: 'Empty file' });
      }

      // Filename: random ID + extension (never trust client filename)
      const ext = contentType === 'image/png' ? 'png'
                : contentType === 'image/webp' ? 'webp'
                : 'jpg';
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      const pathname = `${GALLERY_PREFIX}${id}.${ext}`;

      const blob = await put(pathname, buf, {
        access: 'public',
        contentType,
        addRandomSuffix: false
      });

      return res.status(200).json({
        ok: true,
        url: blob.url,
        pathname: blob.pathname
      });
    }

    // ─── DELETE: remove by URL (auth required) ───────────────────────────
    if (req.method === 'DELETE') {
      if (!isAuthed(req)) {
        return res.status(401).json({ ok: false, error: 'Unauthorized' });
      }
      const url = req.query?.url;
      if (!url || typeof url !== 'string') {
        return res.status(400).json({ ok: false, error: 'Missing ?url=' });
      }
      // Sanity check: only delete from our gallery prefix
      if (!url.includes(GALLERY_PREFIX.replace('/', ''))) {
        return res.status(400).json({ ok: false, error: 'Refused: not a gallery URL' });
      }
      await del(url);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (err) {
    console.error('photos handler error:', err);
    return res.status(500).json({
      ok: false,
      error: err.message || 'Server error'
    });
  }
}
