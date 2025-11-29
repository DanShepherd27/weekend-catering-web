"use client";

import Link from "next/link";

export default function BBQPage() {
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
            BBQ
          </h1>
        </div>
      </section>

      {/* MI IS EZ PONTOSAN? Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-6 md:mb-8 leading-tight">
              MI IS EZ PONTOSAN?
            </h2>
            <div className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase space-y-2 leading-relaxed">
              <p>
                A BBQ TÖBB FORMÁJÁT IS EL TUDJUK KÉSZÍTENI NEKTEK IGÉNYEITEK
                SZERINT.
              </p>
              <p>MINDEN FOGÁSBA BELEADJUK A SZÍVÜNKET ÉS TAPASZTALATUNKAT.</p>
              <p>
                AZ ÁRKÉPZÉS FOGÁSONKÉNT VÁLTOZIK, HOGY MINDIG AZ IGÉNYEKHEZ ÉS A
                MENNYISÉGHEZ
              </p>
              <p>
                IGAZODJON. CÉLUNK, HOGY MINDEN AZT AZ IGAZI AMERIKAI BBQ ÉLMÉNYT
                HOZZA EL,
              </p>
              <p>AMIT MINDENKI EMLÉKBE VISZ MAGÁVAL ERRŐL A NAPRÓL.</p>
              <p>LEGFELJEBB 2 HÚS VARIÁCIÓ VÁLASZTHATÓ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VÁLASZTHATÓ HÚSOK Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[44px] font-bold uppercase mb-6 md:mb-8 leading-tight">
              VÁLASZTHATÓ HÚSOK:
            </h2>
            <div className="text-[16px] md:text-[22px] lg:text-[28px] font-bold uppercase space-y-2 leading-tight">
              <p>• MARHASZEGY (BRISKET)</p>
              <p>• MARHAOLDALAS (BEEF RIBS)</p>
              <p>• CSIRKECOMB (CHICKEN THIGHS)</p>
              <p>• CSIRKESZÁRNY (CHICKEN WINGS)</p>
              <p>• CSÁSZÁRHÚS (PORK BELLY)</p>
              <p>• SERTÉSOLDALAS (PORK RIBS)</p>
            </div>
          </div>
        </div>
      </section>

      {/* KISÉRŐ KÖRETEK Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-4 md:mb-6 leading-tight">
              KISÉRŐ KÖRETEK
            </h2>
            <p className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase leading-relaxed">
              24 ÓRÁS SMOKED BURGONYA, STEAK BURGONYA, HASÁBBURGONYA
            </p>
          </div>
        </div>
      </section>

      {/* SZÓSZOK Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-4 md:mb-6 leading-tight">
              SZÓSZOK
            </h2>
            <div className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase leading-relaxed space-y-1">
              <p>TÖBB KÉZMŰVES SZÓSZUNKBÓL IS VÁLOGATHATTOK (3 választható)</p>
              <p>
                FÜSTÖS BBQ, WHISKYS BBQ, SZILVÁS BBQ, CLASSIC BBQ, MAJONÉZ,
                BACONÉZ, FÜSTÖS MAJONÉZ, CHEDDAR
              </p>
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
