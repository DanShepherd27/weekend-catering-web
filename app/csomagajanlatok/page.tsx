"use client";

import Image from "next/image";
import Link from "next/link";

export default function CsomagajanlatokPage() {
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
            Csomagajánlatok
          </h1>
        </div>
      </section>

      {/* Texas Package */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden relative min-h-[200px]">
            {/* Image on the right with gradient overlay */}
            <div className="absolute right-0 top-0 w-[35%] h-full z-0 rounded-r-[40px] md:rounded-r-[75px] overflow-hidden">
              <Image
                src="/texas-package.jpg"
                alt="Texas BBQ"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Gradient overlay from left (red) to transparent */}
            <div
              className="absolute right-0 top-0 w-[40%] h-full z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #ff1100 0%, rgba(255, 17, 0, 0.7) 30%, transparent 100%)",
              }}
            />
            {/* Content */}
            <div className="relative z-20 p-6 md:p-12 lg:p-16 text-white pr-[38%]">
              <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold uppercase mb-4 leading-tight">
                TEXAS - 15 000 Ft/Fő
              </h2>
              <div className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase space-y-1 leading-relaxed">
                <p>
                  Pulled Pork és választható BBQ fogás, körettel, salátával és
                  háromféle választható szósszal.
                </p>
                <p>
                  A texasi stílusú csomag igazi füstös, szaftos élményt nyújt –
                  tökéletes választás,
                </p>
                <p>ha a klasszikus BBQ ízeket keresitek.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oklahoma Package */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden relative min-h-[240px]">
            {/* Image on the right with gradient overlay */}
            <div className="absolute right-0 top-0 w-[35%] h-full z-0 rounded-r-[40px] md:rounded-r-[75px] overflow-hidden">
              <Image
                src="/oklahoma-package.jpg"
                alt="Oklahoma BBQ"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Gradient overlay from left (red) to transparent */}
            <div
              className="absolute right-0 top-0 w-[40%] h-full z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #ff1100 0%, rgba(255, 17, 0, 0.7) 30%, transparent 100%)",
              }}
            />
            {/* Content */}
            <div className="relative z-20 p-6 md:p-12 lg:p-16 text-white pr-[38%]">
              <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold uppercase mb-4 leading-tight">
                Oklahoma - 17 000 Ft/Fő
              </h2>
              <div className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase space-y-1 leading-relaxed">
                <p>
                  Smash Burger és választható BBQ fogás, választható körettel,
                  salátával és háromféle
                </p>
                <p>választható szósszal.</p>
                <p>
                  Az oklahomai stílusú csomag a klasszikus amerikai street food
                  és a BBQ találkozása
                </p>
                <p>– szaftos, ropogós és garantáltan emlékezetes ízélmény.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All American Package */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden relative min-h-[240px]">
            {/* Image on the right with gradient overlay */}
            <div className="absolute right-0 top-0 w-[35%] h-full z-0 rounded-r-[40px] md:rounded-r-[75px] overflow-hidden">
              <Image
                src="/all-american-package.jpg"
                alt="All American BBQ"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Gradient overlay from left (red) to transparent */}
            <div
              className="absolute right-0 top-0 w-[40%] h-full z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, #ff1100 0%, rgba(255, 17, 0, 0.7) 30%, transparent 100%)",
              }}
            />
            {/* Content */}
            <div className="relative z-20 p-6 md:p-12 lg:p-16 text-white pr-[38%]">
              <h2 className="text-[20px] md:text-[28px] lg:text-[34px] font-bold uppercase mb-4 leading-tight">
                All American - 18 500 Ft/Fő
              </h2>
              <div className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase space-y-1 leading-relaxed">
                <p>
                  Pulled Pork, Smash Burger és egy BBQ fogás, választható
                  körettel, salátával és ötféle szósszal.
                </p>
                <p>
                  A teljes amerikai BBQ élmény egy csomagban – füstös, szaftos
                  és bőséges, ahogy azt
                </p>
                <p>a legjobban szeretjük.</p>
              </div>
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
