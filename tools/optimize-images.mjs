#!/usr/bin/env node
/**
 * optimize-images.mjs
 *
 * One-shot image pipeline for the Altun Atelier static site:
 *   1. For every PNG/JPG in /images, write a same-name .webp at q=82.
 *      Existing WebPs are skipped unless --force is passed.
 *   2. Emit /images/manifest.json with { "<basename>": { width, height } }
 *      so HTML edits (or a future build step) can stamp width/height
 *      attributes onto every <img> for zero-CLS rendering.
 *   3. Print a summary: total bytes before vs. after, per-file ratio.
 *
 * Usage:
 *   node tools/optimize-images.mjs            # convert everything once
 *   node tools/optimize-images.mjs --force    # re-convert even if .webp exists
 *
 * Requires: `npm install --save-dev sharp` (already declared in package.json).
 */
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'images');
const MANIFEST   = path.join(IMAGES_DIR, 'manifest.json');
const FORCE      = process.argv.includes('--force');
const QUALITY    = 82;

const SOURCE_EXT = new Set(['.png', '.jpg', '.jpeg']);

function fmtKB(bytes){ return (bytes / 1024).toFixed(0).padStart(5) + ' KB'; }
function pct(a, b){ return ((1 - b / a) * 100).toFixed(0).padStart(2) + '%'; }

async function run(){
  if(!existsSync(IMAGES_DIR)){
    console.error(`[optimize-images] ${IMAGES_DIR} does not exist.`);
    process.exit(1);
  }

  const all = await readdir(IMAGES_DIR);
  const sources = all.filter(n => SOURCE_EXT.has(path.extname(n).toLowerCase()));
  if(sources.length === 0){
    console.log('[optimize-images] no source PNG/JPG found, nothing to do.');
    return;
  }

  console.log(`[optimize-images] processing ${sources.length} source files (q=${QUALITY}${FORCE ? ', --force' : ''})\n`);

  const manifest = {};
  let totalIn = 0, totalOut = 0, converted = 0, skipped = 0;

  for(const name of sources){
    const inPath  = path.join(IMAGES_DIR, name);
    const stem    = name.replace(/\.[^.]+$/, '');
    const outPath = path.join(IMAGES_DIR, stem + '.webp');

    const inStat  = await stat(inPath);
    const inBytes = inStat.size;

    // Always read dimensions for the manifest, even if WebP exists already.
    const meta = await sharp(inPath).metadata();
    manifest[stem] = { width: meta.width, height: meta.height };

    if(existsSync(outPath) && !FORCE){
      const outStat = await stat(outPath);
      totalIn += inBytes; totalOut += outStat.size; skipped++;
      console.log(`  skip  ${name.padEnd(36)} ${fmtKB(inBytes)} → ${fmtKB(outStat.size)}  (${pct(inBytes, outStat.size)})`);
      continue;
    }

    const buf = await sharp(inPath)
      .webp({ quality: QUALITY, effort: 5 })
      .toBuffer();
    await writeFile(outPath, buf);

    totalIn += inBytes; totalOut += buf.length; converted++;
    console.log(`  conv  ${name.padEnd(36)} ${fmtKB(inBytes)} → ${fmtKB(buf.length)}  (${pct(inBytes, buf.length)})`);
  }

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n', 'utf8');

  console.log(`\n[optimize-images] done. converted=${converted} skipped=${skipped}`);
  console.log(`[optimize-images] total: ${fmtKB(totalIn)} → ${fmtKB(totalOut)}  saved ${pct(totalIn, totalOut)}`);
  console.log(`[optimize-images] manifest written to ${path.relative(ROOT, MANIFEST)}`);
}

run().catch(err => {
  console.error('[optimize-images] failed:', err);
  process.exit(1);
});
