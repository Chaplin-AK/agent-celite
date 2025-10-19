import sharp from "sharp";
import { readFile, access } from "node:fs/promises";
import path from "node:path";

const publicDir = "public";
const target = path.join(publicDir, "celite.in.png");
const candidates = {
  static: [
    path.join(publicDir, "static-portfolio.jpg"),
    path.join(publicDir, "static portfolio.jpg"),
  ],
  dynamic: [
    path.join(publicDir, "dynamic-portfolio.jpg"),
    path.join(publicDir, "dynamic portfolio.jpg"),
  ],
};

async function resolveFirstExisting(paths) {
  for (const p of paths) {
    try {
      await access(p);
      return p;
    } catch {}
  }
  return null;
}

async function main() {
  const meta = await sharp(await readFile(target)).metadata();
  const width = meta.width;
  const height = meta.height;

  const staticIn = await resolveFirstExisting(candidates.static);
  const dynamicIn = await resolveFirstExisting(candidates.dynamic);

  const sources = [
    staticIn && { in: staticIn, out: path.join(publicDir, "static-portfolio.webp") },
    dynamicIn && { in: dynamicIn, out: path.join(publicDir, "dynamic-portfolio.webp") },
  ].filter(Boolean);

  if (sources.length === 0) {
    console.error("No source images found. Place 'static-portfolio.jpg' or 'static portfolio.jpg' and 'dynamic-portfolio.jpg' or 'dynamic portfolio.jpg' in /public");
    process.exit(1);
  }

  for (const s of sources) {
    const srcMeta = await sharp(await readFile(s.in)).metadata();
    const fit = (srcMeta.width >= width && srcMeta.height >= height) ? "cover" : "contain";

    await sharp(s.in)
      .resize({ width, height, fit, position: "center", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90 })
      .toFile(s.out);

    console.log(`Wrote ${s.out} at ${width}x${height}`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });


