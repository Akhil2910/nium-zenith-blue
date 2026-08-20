#!/usr/bin/env node
/**
 * Downloads every CDN-hosted asset referenced by a *.asset.json pointer into
 * ./public, mirroring its URL path (/__l5e/assets-v1/<id>/<file>).
 *
 * Needed when self-hosting (AWS, Docker, local): outside Lovable's
 * infrastructure nothing serves /__l5e/*, so images 404 unless they are
 * bundled with the app.
 *
 * Usage:  node scripts/fetch-assets.mjs
 * Env:    ASSET_BASE_URL (default https://nium-zenith-blue.lovable.app)
 */
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");
const BASE = (process.env.ASSET_BASE_URL || "https://nium-zenith-blue.lovable.app").replace(/\/$/, "");

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (entry.name.endsWith(".asset.json")) out.push(p);
  }
  return out;
}

const exists = (p) => stat(p).then(() => true, () => false);

const pointers = await walk(join(ROOT, "src"));
console.log(`Found ${pointers.length} asset pointers. Base: ${BASE}`);

let downloaded = 0;
let skipped = 0;
const failures = [];

for (const file of pointers) {
  let pointer;
  try {
    pointer = JSON.parse(await readFile(file, "utf8"));
  } catch {
    failures.push(`${file}: invalid JSON`);
    continue;
  }
  const url = pointer.url;
  if (!url || !url.startsWith("/")) continue;

  const target = join(PUBLIC_DIR, url);
  if (await exists(target)) {
    skipped++;
    continue;
  }

  try {
    const res = await fetch(BASE + url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, buf);
    downloaded++;
    console.log(`✓ ${url} (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    failures.push(`${url}: ${err.message}`);
    console.warn(`✗ ${url}: ${err.message}`);
  }
}

console.log(`\nDone. downloaded=${downloaded} cached=${skipped} failed=${failures.length}`);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
