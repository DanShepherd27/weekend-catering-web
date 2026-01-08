"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryCarousel } from "@/components/GalleryCarousel/GalleryCarousel";

interface GalleryGridProps {
  images: Array<{ src: string; alt: string }>;
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[3/2] overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
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

      {/* Gallery Carousel Modal */}
      {selectedImageIndex !== null && (
        <GalleryCarousel
          images={images}
          initialIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
        />
      )}
    </>
  );
}
