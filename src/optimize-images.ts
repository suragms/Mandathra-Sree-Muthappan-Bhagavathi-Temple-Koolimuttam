import sharp from "sharp";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_ASSETS_DIR = path.join(__dirname, "assets");
const PUBLIC_DIR = path.join(__dirname, "../public");

async function optimizeImage(filePath: string, destPath: string) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    if (ext === ".webp" || ext === ".svg" || ext === ".xml" || ext === ".txt" || ext === ".ico" || ext === ".json") {
      return; // Skip these files
    }

    const startSize = fs.statSync(filePath).size;
    console.log(`Optimizing ${path.basename(filePath)} (${(startSize / 1024).toFixed(1)} KB)...`);

    let pipeline = sharp(filePath);
    
    // For very large images like the 2.95MB temple-exterior, resize if width is larger than 1920
    const metadata = await pipeline.metadata();
    if (metadata.width && metadata.width > 1920) {
      pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
    }

    // Convert to webp with quality 80
    await pipeline
      .webp({ quality: 80, effort: 6 })
      .toFile(destPath);

    const endSize = fs.statSync(destPath).size;
    const savings = ((1 - endSize / startSize) * 100).toFixed(1);
    console.log(`-> Saved to ${path.basename(destPath)} (${(endSize / 1024).toFixed(1)} KB) - Reduced by ${savings}%`);
  } catch (err) {
    console.error(`Error optimizing ${path.basename(filePath)}:`, err);
  }
}

async function run() {
  console.log("Starting Image Optimization Process...");

  // Optimize src/assets
  if (fs.existsSync(SRC_ASSETS_DIR)) {
    const files = fs.readdirSync(SRC_ASSETS_DIR);
    for (const file of files) {
      const fullPath = path.join(SRC_ASSETS_DIR, file);
      if (fs.statSync(fullPath).isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
          const destName = file.replace(ext, ".webp");
          const destPath = path.join(SRC_ASSETS_DIR, destName);
          await optimizeImage(fullPath, destPath);
        }
      }
    }
  }

  // Optimize public images
  if (fs.existsSync(PUBLIC_DIR)) {
    const files = fs.readdirSync(PUBLIC_DIR);
    for (const file of files) {
      const fullPath = path.join(PUBLIC_DIR, file);
      if (fs.statSync(fullPath).isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
          // Standardize long Google names and WhatsApp names to clean names
          let cleanName = file.replace(ext, ".webp");
          
          if (file.includes("APNQkAFfT2tZiPEsoYG5upVd")) {
            cleanName = "temple-exterior.webp";
          } else if (file.includes("APNQkAGVO85BCE8wmuuKrwGeZX05")) {
            cleanName = "inner-sanctum-kalam.webp";
          } else if (file.includes("APNQkAF7gvFJvalsYHH9EkdIv")) {
            cleanName = "temple-courtyard-landscape.webp";
          } else if (file.includes("APNQkAH-dhuirUcridiKcSWPp")) {
            cleanName = "temple-exterior-portrait.webp";
          } else if (file.includes("APNQkAHRUCYNfyIcdfrkM2yYjS3")) {
            cleanName = "stone-lion.webp";
          } else if (file.includes("APNQkAHYbm79Y714Zq4j-hVn")) {
            cleanName = "kalvilakku-courtyard.webp";
          } else if (file.includes("logowebsite")) {
            cleanName = "logowebsite.webp";
          } else if (file.includes("WhatsApp Image")) {
            // Rename to clean indexable whatsapp images
            const match = file.match(/at (\d+\.\d+\.\d+)/);
            const timeStr = match ? match[1].replace(/\./g, "-") : Math.random().toString(36).substring(7);
            cleanName = `temple-event-${timeStr}.webp`;
          }

          const destPath = path.join(PUBLIC_DIR, cleanName);
          await optimizeImage(fullPath, destPath);
        }
      }
    }
  }

  console.log("Image Optimization Completed successfully!");
}

run();
