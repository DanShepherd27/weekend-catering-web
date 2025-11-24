import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-white">
              <h1 className="text-2xl md:text-4xl font-bold uppercase">
                Weekend Catering
              </h1>
              <p className="text-xs md:text-sm text-white/80">
                Street Food Catering
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <a
              href="#contact"
              className="text-white hover:text-white/80 transition-opacity font-semibold uppercase text-sm md:text-base"
            >
              Ajánlatkérés
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
