import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-3 lg:pb-4 px-4">
      <div className="bg-[#ff1100] rounded-[40px] md:rounded-[60px] lg:rounded-[75px] shadow-lg overflow-hidden relative h-[80px] md:h-[60px] lg:h-[60px]">
        <div className="container mx-auto px-4 md:px-8 h-full flex items-center justify-between relative">
          {/* Decorative logo image on the left */}
          <div className="absolute left-0 top-0 w-[150px] md:w-[200px] lg:w-[290px] h-full z-10">
            <div className="relative w-full h-full">
              <Image
                src="/header-logo.png"
                alt=""
                width={291}
                height={194}
                className="object-cover object-left h-full"
              />
              {/* Gradient overlay - tilted 30 degrees to blend with red background */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(60deg, transparent 40%, #ff1100 80%)",
                }}
              />
            </div>
          </div>

          {/* Main branding - centered */}
          <div className="flex-1 flex justify-center items-center relative z-20">
            <Link href="/" className="relative">
              <h1
                className="text-[28px] md:text-[28px] lg:text-[28px] xl:text-[28px] font-bold text-white uppercase tracking-tight whitespace-nowrap"
                style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  lineHeight: "normal",
                }}
              >
                Weekend Catering
              </h1>
            </Link>
          </div>

          {/* W logo on the right */}
          <div className="absolute right-4 md:right-8 flex items-center z-20">
            <div className="relative">
              <p
                className="text-[32px] md:text-[32px] lg:text-[32px] font-bold text-white uppercase"
                style={{
                  fontFamily: "Helvetica Neue, Arial, sans-serif",
                  lineHeight: "normal",
                }}
              >
                W
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
