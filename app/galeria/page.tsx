import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";

export default function GaleriaPage() {
  const images = Array.from({ length: 18 }, (_, i) => ({
    src: `/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Galéria kép ${i + 1}`,
  }));

  return (
    <>
      <main className="min-h-screen bg-[#ff1100] pt-[80px] md:pt-[60px] lg:pt-[60px] pb-[120px]">
        {/* Hero Section */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
          <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-white text-center mb-4">
            Galéria
          </h1>
          <p className="text-[14px] md:text-[18px] lg:text-[22px] text-white text-center max-w-[800px] mx-auto mb-12">
            Tekintse meg legújabb ételeink és rendezvényeink fotóit
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-[40px] md:rounded-[60px] lg:rounded-[75px] group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 mt-12 md:mt-16 lg:mt-20 text-center">
          <Link
            href="/"
            className="inline-block bg-white text-[#ff1100] px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-5 rounded-[40px] md:rounded-[60px] lg:rounded-[75px] text-[14px] md:text-[18px] lg:text-[22px] font-bold hover:bg-gray-100 transition-colors"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </main>

      {/* Sticky Contact Info Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white z-40 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-5 lg:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">
                Telefon
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-bold text-[#ff1100]">
                +36 1 234 5678
              </p>
            </div>
            <div>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">
                Email
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-bold text-[#ff1100]">
                info@weekendcatering.hu
              </p>
            </div>
            <div>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-gray-600">
                Cím
              </p>
              <p className="text-[14px] md:text-[16px] lg:text-[18px] font-bold text-[#ff1100]">
                1234 Budapest, Példa utca 12.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
