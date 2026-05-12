#!/usr/bin/env node
/**
 * stamp-img-dimensions.mjs
 *
 * Reads /images/manifest.json and stamps width="W" height="H" attributes
 * onto every <img src="images/<name>.webp"> in index.html that doesn't
 * already declare them. Idempotent: if width= or height= is already on
 * the tag, it leaves the tag alone.
 *
 * Critical for CLS: a browser must know intrinsic image dimensions before
 * the bytes arrive, otherwise the layout jumps when each image loads.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'index.html');
const MANIFEST  = path.join(ROOT, 'images', 'manifest.json');

const html     = await readFile(HTML_PATH, 'utf8');
const manifest = JSON.parse(await readFile(MANIFEST, 'utf8'));

let stamped = 0;
let skipped = 0;

const out = html.replace(
  /<img\b([^>]*?)\bsrc="images\/([^"]+)\.webp"([^>]*?)>/g,
  (match, before, stem, after) => {
    const meta = manifest[stem];
    if(!meta){ skipped++; return match; }
    const full = before + after;
    if(/\bwidth\s*=/.test(full) || /\bheight\s*=/.test(full)){
      skipped++;
      return match;
    }
    stamped++;
    return `<img${before}src="images/${stem}.webp" width="${meta.width}" height="${meta.height}"${after}>`;
  }
);

await writeFile(HTML_PATH, out, 'utf8');
console.log(`[stamp-img-dimensions] stamped=${stamped} skipped=${skipped}`);
