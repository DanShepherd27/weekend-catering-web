import Link from "next/link";
import { getGalleryImages } from "@/lib/gallery";
import { GalleryGrid } from "./components/GalleryGrid";

export default function GaleriaPage() {
  const galleryImages = getGalleryImages();

  const images = galleryImages.map((filename, i) => ({
    src: `/gallery/${filename}`,
    alt: `Galéria kép ${i + 1}`,
  }));

  return (
    <>
      <main className="min-h-screen pt-[20px] md:pt-[30px] lg:pt-[40px] pb-[120px]">
        {/* Gallery Grid */}
        <div className="max-w-[600] md:max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <GalleryGrid images={images} />
        </div>

        {/* Back to Home Link */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 mt-4 md:mt-4 lg:mt-4 text-center">
          <Link
            href="/"
            className="inline-block bg-white text-[#ff1100] px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-5 rounded-[40px] md:rounded-[60px] lg:rounded-[75px] text-[14px] md:text-[18px] lg:text-[22px] font-bold hover:bg-gray-100 transition-colors"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </main>
    </>
  );
}
