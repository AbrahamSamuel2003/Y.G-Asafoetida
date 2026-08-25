import sharp from "sharp";
import fs from "fs";
import path from "path";

const ASSETS_DIR = path.resolve("src/assets");

const IMAGES = [
  {
    src: path.join(ASSETS_DIR, "ChatGPT Image Aug 25, 2026, 03_08_24 PM.png"),
    prefix: "story-1-shop",
  },
  {
    src: path.join(ASSETS_DIR, "ChatGPT Image Aug 25, 2026, 03_09_08 PM.png"),
    prefix: "story-2-kitchen",
  },
  {
    src: path.join(ASSETS_DIR, "ChatGPT Image Aug 25, 2026, 03_09_13 PM.png"),
    prefix: "story-3-today",
  },
];

const SIZES = [560, 900, 1200];

async function run() {
  console.log("Compressing 3 new story images into WebP responsive sets...");

  for (const img of IMAGES) {
    if (!fs.existsSync(img.src)) {
      console.error(`Missing file: ${img.src}`);
      continue;
    }

    const metadata = await sharp(img.src).metadata();
    console.log(`\nProcessing ${img.prefix} (Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(img.src).size / 1024 / 1024).toFixed(2)} MB)`);

    for (const width of SIZES) {
      const outPath = path.join(ASSETS_DIR, `${img.prefix}-${width}.webp`);
      await sharp(img.src)
        .resize({ width, fit: "inside", kernel: sharp.kernel.lanczos3 })
        .webp({ quality: 82, effort: 6 })
        .toFile(outPath);

      const outSize = (fs.statSync(outPath).size / 1024).toFixed(1);
      console.log(`  -> Generated ${path.basename(outPath)} (${width}px): ${outSize} KB`);
    }
  }

  console.log("\nAll story images successfully compressed and replaced!");
}

run().catch(console.error);
