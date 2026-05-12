/**
 * /api/photos — gallery & collections photo CRUD via Vercel Blob
 *
 * GET    /api/photos?category=gallery|collections   → public list (no auth)
 * GET    /api/photos                                → all categories grouped
 * POST   /api/photos                                → upload (auth required)
 *          Headers: X-Photo-Category, X-Photo-Title
 *          Body:    raw image bytes (Content-Type = image/...)
 * DELETE /api/photos?url=<blob-url>                 → delete (auth required)
 *
 * Storage layout in Vercel Blob:
 *   gallery/<id>.<ext>
 *   collections/<id>__<title-slug>.<ext>
 *
 * The first path segment is the category. The optional `__<slug>` portion
 * after the id encodes the human-readable title for collection items.
 */

import { put, list, del } from '@vercel/blob';
import { timingSafeEqual } from 'node:crypto';

export const config = {
  runtime: 'nodejs',
  api: { bodyParser: false }
};

const ALLOWED_CATEGORIES = new Set([
  'gallery',      // append-style mosaic of lifestyle/atelier shots
  'collections',  // append-style product cards (requires title)
  'hero',         // fixed-slot: 4 most recent replace WebGL slider images
  'story',        // fixed-slot: 1 most recent replaces craft-hands.png
  'trust',        // fixed-slot: 3 most recent replace boutique/service/packaging
  'banner'        // fixed-slot: 1 most recent replaces lifestyle-couple.png
]);
const ALLOWED_MIME = new Set(['image/jpeg', 'image/png', 'image/webp']);
const MAX_BYTES = 4 * 1024 * 1024; // 4 MB safe limit (Vercel function body cap is 4.5 MB)

// ──────────────────────────────────────────────────────────────────────────
// Auth — constant-time password compare against ADMIN_PASSWORD env var
// ──────────────────────────────────────────────────────────────────────────
function isAuthed(req) {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;

  const header = req.headers.authorization || '';
  const match = header.match(/^Bearer\s+(.+)$/i);
  if (!match) return false;

  const provided = match[1];
  if (provided.length !== expected.length) return false;

  try {
    return timingSafeEqual(Buffer.from(provided), Buffer.from(expected));
  } catch {
    return false;
  }
}

// ──────────────────────────────────────────────────────────────────────────
// Read raw request body (bodyParser disabled so we can stream binary uploads)
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
// Slugify a title for safe pathname use (lowercase, ascii, hyphenated)
// ──────────────────────────────────────────────────────────────────────────
function slugify(s) {
  return String(s || '')
    .normalize('NFKD').replace(/[̀-ͯ]/g, '') // strip combining diacriticals
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

// ──────────────────────────────────────────────────────────────────────────
// Decode a blob pathname back into { category, id, title }
//   "gallery/1234567890-abc.jpg"               → category=gallery
//   "collections/1234567890-abc__hilal-kolye.jpg" → category=collections, title="Hilal Kolye"
// ──────────────────────────────────────────────────────────────────────────
function decodePathname(pathname) {
  const slash = pathname.indexOf('/');
  if (slash < 0) return { category: 'gallery', title: '' };
  const category = pathname.slice(0, slash);
  const rest = pathname.slice(slash + 1);
  const dot = rest.lastIndexOf('.');
  const stem = dot > 0 ? rest.slice(0, dot) : rest;
  const sep = stem.indexOf('__');
  let title = '';
  if (sep > 0) {
    title = stem.slice(sep + 2)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase()); // title case
  }
  return { category, title };
}

// ──────────────────────────────────────────────────────────────────────────
// Handler
// ──────────────────────────────────────────────────────────────────────────
export default async function handler(req, res) {
  try {
    // ─── GET ──────────────────────────────────────────────────────────────
    if (req.method === 'GET') {
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        const emptyByCategory = Object.fromEntries(
          [...ALLOWED_CATEGORIES].map(c => [c, []])
        );
        return res.status(200).json({ photos: [], byCategory: emptyByCategory });
      }

      const filterCat = (req.query?.category || '').toString();
      const result = await list({});

      const photos = result.blobs.map(b => {
        const meta = decodePathname(b.pathname);
        return {
          url: b.url,
          pathname: b.pathname,
          category: meta.category,
          title: meta.title,
          uploadedAt: b.uploadedAt,
          size: b.size
        };
      });

      photos.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));

      // Optional category filter
      const filtered = filterCat
        ? photos.filter(p => p.category === filterCat)
        : photos;

      // Grouped view — initialise every allowed category so admin UI can
      // render an empty section heading even when nothing is uploaded yet
      const byCategory = Object.fromEntries(
        [...ALLOWED_CATEGORIES].map(c => [c, []])
      );
      for (const p of photos) {
        if (byCategory[p.category]) byCategory[p.category].push(p);
      }

      return res.status(200).json({ photos: filtered, byCategory });
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

      const category = (req.headers['x-photo-category'] || 'gallery').toString();
      if (!ALLOWED_CATEGORIES.has(category)) {
        return res.status(400).json({ ok: false, error: `Invalid category: ${category}` });
      }

      const titleHeader = req.headers['x-photo-title'] || '';
      let titleRaw = '';
      try { titleRaw = decodeURIComponent(String(titleHeader)).trim(); }
      catch { titleRaw = String(titleHeader).trim(); }
      const titleSlug = slugify(titleRaw);

      const buf = await readBody(req);
      if (buf.length === 0) {
        return res.status(400).json({ ok: false, error: 'Empty file' });
      }

      const ext = contentType === 'image/png' ? 'png'
                : contentType === 'image/webp' ? 'webp'
                : 'jpg';
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      const stem = titleSlug ? `${id}__${titleSlug}` : id;
      const pathname = `${category}/${stem}.${ext}`;

      const blob = await put(pathname, buf, {
        access: 'public',
        contentType,
        addRandomSuffix: false
      });

      return res.status(200).json({
        ok: true,
        url: blob.url,
        pathname: blob.pathname,
        category,
        title: titleRaw
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

      // Hardening: rather than trusting that the URL "looks like" ours via a
      // substring check, confirm the blob actually exists in our store and its
      // pathname starts with one of our managed category prefixes. This blocks
      // forged URLs entirely (e.g. /gallery/-suffixed paths from another store).
      const listing = await list({});
      const target = listing.blobs.find(b => b.url === url);
      if (!target) {
        return res.status(404).json({ ok: false, error: 'Blob not found in this store' });
      }
      const prefix = target.pathname.split('/')[0];
      if (!ALLOWED_CATEGORIES.has(prefix)) {
        return res.status(400).json({
          ok: false,
          error: `Refused: ${prefix} is not a managed category`
        });
      }

      await del(url);
      return res.status(200).json({ ok: true, deleted: target.pathname });
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
