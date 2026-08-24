/**
 * Client-Side Smart Image Compressor
 * Resizes and compresses uploaded images in the browser using HTML5 Canvas & WebP/JPEG encoding.
 * Maintains pristine visual clarity while slashing payload size by 70-90%.
 */

export interface CompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number; // 0.1 to 1.0 (default: 0.88)
  mimeType?: "image/webp" | "image/jpeg" | "image/png";
}

export interface CompressedImageResult {
  dataUrl: string;
  blob: Blob;
  name: string;
  originalSize: number;
  compressedSize: number;
  width: number;
  height: number;
  compressionRatio: number;
}

export async function compressImage(
  file: File,
  options: CompressionOptions = {}
): Promise<CompressedImageResult> {
  const {
    maxWidth = 1600,
    maxHeight = 1600,
    quality = 0.88,
    mimeType = "image/webp",
  } = options;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        // Proportional scale down if exceeds max bounds
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d", { alpha: mimeType !== "image/jpeg" });
        if (!ctx) {
          reject(new Error("Unable to create 2D canvas context"));
          return;
        }

        // High quality rendering flags
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        // Draw image scaled
        ctx.drawImage(img, 0, 0, width, height);

        // Export as WebP or chosen format
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Image compression failed to generate Blob"));
              return;
            }

            const dataUrl = canvas.toDataURL(mimeType, quality);
            const originalSize = file.size;
            const compressedSize = blob.size;
            const compressionRatio = Math.round((1 - compressedSize / originalSize) * 100);

            resolve({
              dataUrl,
              blob,
              name: file.name.replace(/\.[^/.]+$/, "") + (mimeType === "image/webp" ? ".webp" : ".jpg"),
              originalSize,
              compressedSize,
              width,
              height,
              compressionRatio: Math.max(0, compressionRatio),
            });
          },
          mimeType,
          quality
        );
      };

      img.onerror = () => reject(new Error(`Failed to load image "${file.name}"`));
      img.src = e.target?.result as string;
    };

    reader.onerror = () => reject(new Error(`Failed to read file "${file.name}"`));
    reader.readAsDataURL(file);
  });
}

export async function compressMultipleImages(
  files: File[] | FileList,
  options: CompressionOptions = {}
): Promise<CompressedImageResult[]> {
  const fileArray = Array.from(files);
  const results: CompressedImageResult[] = [];

  for (const file of fileArray) {
    if (!file.type.startsWith("image/")) continue;
    try {
      const res = await compressImage(file, options);
      results.push(res);
    } catch (err) {
      console.error(`Failed to compress image ${file.name}:`, err);
    }
  }

  return results;
}
