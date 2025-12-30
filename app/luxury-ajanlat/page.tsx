"use client";

import { ContactForm } from "@/components/ContactForm/ContactForm";
import Link from "next/link";

export default function LuxuryAjanlatPage() {
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
            Luxury ajánlatkérés cégeknek
          </h1>
        </div>
      </section>

      {/* Luxury Section */}
      <section className="w-full py-6 md:py-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#ff1100] rounded-[20px] md:rounded-[37px] shadow-lg overflow-hidden p-6 md:p-12 lg:p-16 text-white">
            <div className="text-[14px] md:text-[18px] lg:text-[22px] font-bold uppercase space-y-4 leading-relaxed">
              <p>
                Lehetőséget biztosítunk arra, hogy vállalata egyedi, személyre
                szabott étel-, ital- és rendezvényszolgáltatásokat rendeljen
                nagyobb céges eseményekhez.
              </p>
              <p>
                Igény esetén teljesen egyedi menüsorokat, tematikus kínálatot és
                kiegészítő szolgáltatásokat is kialakítunk, amelyek illeszkednek
                a vállalat arculatához és rendezvénye hangulatához.
              </p>
              <p>
                Az egyeztetés e-mailben vagy telefonon indul, ezt követően pedig
                egy személyes találkozó során közösen átbeszélünk minden
                részletet — a menütől a logisztikán át a teljes rendezvény
                kivitelezésig.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

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
