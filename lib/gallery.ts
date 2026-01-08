import { readdirSync } from "fs";
import { join } from "path";

export function getGalleryImages(): string[] {
  const galleryDir = join(process.cwd(), "public/gallery");

  try {
    const files = readdirSync(galleryDir);
    return files.filter((file) => file.endsWith(".webp")).sort();
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}
