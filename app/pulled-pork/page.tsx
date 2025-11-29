"use client";

import Link from "next/link";

export default function PulledPorkPage() {
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
            Pulled Pork
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
                Sok év elteltével esküvőztetésben dolgozva, sok sok, rendezvényt
                látva
              </p>
              <p>
                és lebonyolítva, tudom, hogy neked is széleskörű szolgáltatást
                tudunk nyújtani.
              </p>
              <p>Hiszünk a minőségben és abban hogy a kevesebb néha több.</p>
              <p>
                Ezért nyújtunk olyan szolgáltatást, ahol fókuszáltan tudunk a
                rendezvényeteken,
              </p>
              <p>
                egy kifejezett Street Food ételt a lehető legmagasabb minőségben
              </p>
              <p>elkészíteni számotokra.</p>
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
            <p className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase leading-relaxed">
              KÉRHETED MAGVAS HÁZI KENYÉRBEN VAGY PUHA ZSEMLÉBEN
            </p>
          </div>
        </div>
      </section>

      {/* SALÁTA Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[40px] md:rounded-[75px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold uppercase mb-4 md:mb-6 leading-tight">
              SALÁTA
            </h2>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] font-bold uppercase leading-relaxed">
              EGY JÓ BBQ-N ELENGEDHETETLEN A COLESLAW SALÁTA.
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
