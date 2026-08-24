import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

sharp.cache(false);
sharp.concurrency(1);

async function compressImageFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!/\.(jpe?g|png|webp)$/i.test(ext)) return { before: 0, after: 0 };
  if (filePath.includes('.tmp')) {
    try { fs.unlinkSync(filePath); } catch {}
    return { before: 0, after: 0 };
  }

  const originalBuffer = fs.readFileSync(filePath);
  const originalSize = originalBuffer.length;

  try {
    let pipeline = sharp(originalBuffer).rotate();
    const metadata = await sharp(originalBuffer).metadata();
    const maxWidth = 1600;
    const maxHeight = 1600;

    if ((metadata.width && metadata.width > maxWidth) || (metadata.height && metadata.height > maxHeight)) {
      pipeline = pipeline.resize({
        width: maxWidth,
        height: maxHeight,
        fit: 'inside',
        withoutEnlargement: true,
        kernel: sharp.kernel.lanczos3,
      });
    }

    let outputBuffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      outputBuffer = await pipeline
        .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toBuffer();
    } else if (ext === '.png') {
      outputBuffer = await pipeline
        .png({ quality: 90, compressionLevel: 9, adaptiveFiltering: true })
        .toBuffer();
    } else if (ext === '.webp') {
      outputBuffer = await pipeline
        .webp({ quality: 88, effort: 6 })
        .toBuffer();
    }

    if (outputBuffer && outputBuffer.length < originalSize) {
      const tempPath = filePath + '.' + Date.now() + '.tmp';
      fs.writeFileSync(tempPath, outputBuffer);
      
      let replaced = false;
      for (let attempt = 0; attempt < 5; attempt++) {
        try {
          try {
            fs.copyFileSync(tempPath, filePath);
          } catch {
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);
          }
          replaced = true;
          break;
        } catch (e) {
          await new Promise((r) => setTimeout(r, 100));
        }
      }
      if (fs.existsSync(tempPath)) {
        try { fs.unlinkSync(tempPath); } catch {}
      }

      if (replaced) {
        console.log(`✓ Compressed ${path.relative('public', filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(outputBuffer.length / 1024).toFixed(1)}KB (-${Math.round((1 - outputBuffer.length / originalSize) * 100)}%)`);
        return { before: originalSize, after: outputBuffer.length };
      }
    }
    return { before: originalSize, after: originalSize };
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return { before: originalSize, after: originalSize };
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let totalBefore = 0;
  let totalAfter = 0;

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const { before, after } = await processDirectory(fullPath);
      totalBefore += before;
      totalAfter += after;
    } else {
      const { before, after } = await compressImageFile(fullPath);
      totalBefore += before;
      totalAfter += after;
    }
  }
  return { before: totalBefore, after: totalAfter };
}

console.log('Starting image compression on public directory...');
const startTime = Date.now();
const { before, after } = await processDirectory(path.resolve('public'));
console.log('--- Compression Complete ---');
console.log(`Original size: ${(before / 1024 / 1024).toFixed(2)} MB`);
console.log(`Compressed size: ${(after / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total space saved: ${((before - after) / 1024 / 1024).toFixed(2)} MB (-${Math.round((1 - after / before) * 100)}%)`);
console.log(`Time taken: ${((Date.now() - startTime) / 1000).toFixed(1)}s`);
