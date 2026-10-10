// Build guard: every image imported from client/src must be small enough to
// ship (300 KB) and must come from attached_assets/web/, never an original
// phone photo (those carry GPS EXIF). Fails the build with a list otherwise.
//   node scripts/check-assets.mjs
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const LIMIT = 300 * 1024;
const ROOT = "client/src";
const ASSETS = "attached_assets";
const problems = [];

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(p);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) await check(p);
  }
}

async function check(file) {
  const src = await readFile(file, "utf8");
  for (const m of src.matchAll(/from\s+["']@assets\/([^"']+)["']/g)) {
    const rel = m[1];
    const full = path.join(ASSETS, rel);
    let size;
    try {
      size = (await stat(full)).size;
    } catch {
      problems.push(`${file}: ${rel} does not exist`);
      continue;
    }
    if (/\.(jpe?g|heic)$/i.test(rel)) problems.push(`${file}: ${rel} is an original photo (may carry GPS EXIF); import a web/ version`);
    if (size > LIMIT) problems.push(`${file}: ${rel} is ${(size / 1024).toFixed(0)} KB (limit ${LIMIT / 1024} KB)`);
  }
}

await walk(ROOT);
if (problems.length) {
  console.error("check-assets: refusing to build\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log("check-assets: ok");
