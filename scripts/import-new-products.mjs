import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

sharp.cache(false);

const rootDir = process.cwd();

const mappings = [
  {
    srcDir: path.join(rootDir, '200G BLACK SEASAME'),
    destDir: path.join(rootDir, 'public', 'products', 'black-sesame-seeds'),
    images: ['01.png', '02.png', '03.png', '04.png'],
  },
  {
    srcDir: path.join(rootDir, '200G IDLI PODI'),
    destDir: path.join(rootDir, 'public', 'products', 'traditional-idli-podi'),
    images: ['01.png', '02.png', '03.png', '04.png'],
  },
  {
    srcDir: path.join(rootDir, 'MILLET PONGAL MIX'),
    destDir: path.join(rootDir, 'public', 'products', 'millet-pongal-mix'),
    images: ['01.png', '02.png'],
  },
  {
    srcDir: path.join(rootDir, 'MILLET SAMBAR MIX'),
    destDir: path.join(rootDir, 'public', 'products', 'millet-sambar-mix'),
    images: ['01.png', '02.png'],
  },
];

async function processProduct(mapping) {
  if (!fs.existsSync(mapping.destDir)) {
    fs.mkdirSync(mapping.destDir, { recursive: true });
  }

  let index = 1;
  for (const imgName of mapping.images) {
    let srcFile = path.join(mapping.srcDir, imgName);
    if (!fs.existsSync(srcFile)) {
      srcFile = path.join(mapping.srcDir, imgName.replace('.png', '.jpg'));
    }

    if (!fs.existsSync(srcFile)) {
      console.warn(`File not found: ${srcFile}`);
      continue;
    }

    const destFile = path.join(mapping.destDir, `img-${index}.jpg`);
    const inputBuffer = fs.readFileSync(srcFile);

    const outputBuffer = await sharp(inputBuffer)
      .rotate()
      .resize({
        width: 1400,
        height: 1400,
        fit: 'inside',
        withoutEnlargement: true,
        kernel: sharp.kernel.lanczos3,
      })
      .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: '4:4:4' })
      .toBuffer();

    fs.writeFileSync(destFile, outputBuffer);
    console.log(`Optimized ${srcFile} -> ${destFile} (${(inputBuffer.length / 1024).toFixed(1)} KB -> ${(outputBuffer.length / 1024).toFixed(1)} KB)`);
    index++;
  }
}

async function run() {
  console.log('Processing new products images...');
  for (const m of mappings) {
    await processProduct(m);
  }
  console.log('All new product images processed and compressed successfully!');
}

run().catch(console.error);
