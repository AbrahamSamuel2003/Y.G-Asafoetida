import fs from "fs";
import path from "path";

const sourceDir = "G:\\Y.G-E-COMM\\Y.G Hing Product";
const targetBaseDir = "g:\\Y.G-E-COMM\\public\\products";

if (!fs.existsSync(targetBaseDir)) {
  fs.mkdirSync(targetBaseDir, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

const folders = fs.readdirSync(sourceDir).filter((f) => {
  return fs.statSync(path.join(sourceDir, f)).isDirectory();
});

console.log("Found folders:", folders);

const catalogSummary = [];

folders.forEach((folder) => {
  const folderPath = path.join(sourceDir, folder);
  const files = getAllFiles(folderPath);
  console.log(`\nFolder: "${folder}" -> ${files.length} images found`);

  // Create clean slug
  const slug = folder
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const targetDir = path.join(targetBaseDir, slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const copiedFiles = [];
  files.forEach((srcFile, idx) => {
    const ext = path.extname(srcFile).toLowerCase();
    const destName = `img-${idx + 1}${ext}`;
    const destPath = path.join(targetDir, destName);
    fs.copyFileSync(srcFile, destPath);
    copiedFiles.push(`/products/${slug}/${destName}`);
  });

  catalogSummary.push({
    folderName: folder.trim(),
    slug,
    imageCount: copiedFiles.length,
    images: copiedFiles,
  });
});

console.log("\nSummary of catalog folders:\n", JSON.stringify(catalogSummary, null, 2));

fs.writeFileSync(
  "g:\\Y.G-E-COMM\\src\\data\\synced_products.json",
  JSON.stringify(catalogSummary, null, 2)
);
