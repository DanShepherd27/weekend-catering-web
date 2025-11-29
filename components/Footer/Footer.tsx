import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  /* Sticky Contact Information Section at Bottom */
  return (
    <section className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-[#ff1100] shadow-[0_-4px_20px_0px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-4">
        <h2
          className="text-[20px] md:text-[24px] font-bold text-[#ff1100] uppercase mb-3 md:mb-4 text-center md:text-left"
          style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
          }}
        >
          KERESS MINKET!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Phone className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-[#ff1100] flex-shrink-0" />
            <a
              href="tel:+36703948800"
              className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase hover:underline"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              +36703948800
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Mail className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-[#ff1100] flex-shrink-0" />
            <a
              href="mailto:info@weekendcatering.hu"
              className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase hover:underline"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              info@weekendcatering.hu
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={14}
              height={14}
              className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] flex-shrink-0"
            />
            <a
              href="https://instagram.com/weekendcatering_bbq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase hover:underline"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              weekendcatering_BBQ
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="#top"
              className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase"
              style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
            >
              weekend catering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
