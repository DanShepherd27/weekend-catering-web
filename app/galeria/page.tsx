import Image from "next/image";
import Link from "next/link";

export default function GaleriaPage() {
  const images = Array.from({ length: 18 }, (_, i) => ({
    src: `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Galéria kép ${i + 1}`,
  }));

  return (
    <>
      <main className="min-h-screen pt-[20px] md:pt-[30px] lg:pt-[40px] pb-[120px]">
        {/* Gallery Grid */}
        <div className="max-w-[600] md:max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/2] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw"
                />
              </div>
            ))}
          </div>
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
