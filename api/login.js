/**
 * POST /api/login
 *
 * Validates the admin password against the ADMIN_PASSWORD env var.
 * Uses constant-time comparison to prevent timing attacks.
 *
 * Request body:  { "password": "..." }
 * Response 200:  { "ok": true }
 * Response 401:  { "ok": false, "error": "Invalid password" }
 * Response 500:  { "ok": false, "error": "Server not configured" }
 *
 * The client stores the password in sessionStorage and sends it on
 * every subsequent write request as `Authorization: Bearer <pwd>`.
 */

import { timingSafeEqual } from 'node:crypto';

export const config = { runtime: 'nodejs' };

export default async function handler(req, res) {
  // CORS / method guard
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return res.status(500).json({
      ok: false,
      error: 'ADMIN_PASSWORD env var is not set on this Vercel project'
    });
  }

  const provided = (req.body?.password || '').toString();
  if (!provided) {
    return res.status(400).json({ ok: false, error: 'Password is required' });
  }

  // Constant-time comparison so attackers cannot infer length / chars from response time
  const a = Buffer.from(provided.padEnd(64).slice(0, 64));
  const b = Buffer.from(expected.padEnd(64).slice(0, 64));
  const isValid = timingSafeEqual(a, b) && provided.length === expected.length;

  if (!isValid) {
    // Slight delay so brute-force is impractical
    await new Promise(r => setTimeout(r, 400));
    return res.status(401).json({ ok: false, error: 'Invalid password' });
  }

  return res.status(200).json({ ok: true });
}
