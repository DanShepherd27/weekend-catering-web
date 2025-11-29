"use client";

import Link from "next/link";

export default function DesszertekPage() {
  return (
    <main
      className="min-h-screen bg-white pb-[200px]"
      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
    >
      {/* Page Title */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <h1
            className="text-[48px] md:text-[64px] lg:text-[80px] font-bold text-[#ff1100] uppercase text-center leading-tight"
            style={{ textShadow: "0px 4px 4px rgba(123,8,0,0.25)" }}
          >
            Desszertek
          </h1>
        </div>
      </section>

      {/* Dessert List Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <div className="text-[18px] md:text-[26px] lg:text-[32px] font-bold uppercase space-y-2 leading-tight">
              <p>Pisztáciás Tiramisu</p>
              <p>Muffin</p>
              <p>Epres Pohárkrém kekszel</p>
              <p>grillezett ananász vanília fagyival</p>
            </div>
          </div>
        </div>
      </section>

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
  );
}
