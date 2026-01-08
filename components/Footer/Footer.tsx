"use client";

import { Mail, Phone, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { InquiryFloater } from "../InquiryFloater/InquiryFloater";

export function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  /* Sticky Contact Information Section at Bottom */
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-[#ff1100] shadow-[0_-4px_20px_0px_rgba(0,0,0,0.15)]">
      <InquiryFloater isFooterExpanded={isExpanded} />
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4 md:py-4 relative">
        {/* Chevron button - only visible on small screens */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-2 left-2 sm:hidden text-[#ff1100] hover:opacity-70 transition-opacity z-50"
          aria-label={isExpanded ? "Collapse footer" : "Expand footer"}
        >
          <ChevronUp
            className={`w-5 h-5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        <h2
          className={`text-[20px] md:text-[24px] font-bold text-[#ff1100] uppercase text-center md:text-left transition-all duration-300`}
          style={{
            fontFamily: "Helvetica Neue, Arial, sans-serif",
          }}
        >
          KERESS MINKET!
        </h2>

        {/* Contact items - collapsible on mobile, always visible on larger screens */}
        <div
          className={`mt-4 overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-[500px] sm:max-h-none" : "max-h-0 sm:max-h-none"
          }`}
        >
          <div className="flex flex-wrap justify-center lg:justify-between gap-4">
            <div className="flex items-center gap-3 justify-center">
              <Phone
                className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-[#ff1100] flex-shrink-0"
                fill="#ff1100"
              />
              <a
                href="tel:+36703948800"
                className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase hover:underline"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                +36703948800
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Mail className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-[#ff1100] flex-shrink-0" />
              <a
                href="mailto:info@weekendcatering.hu"
                className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase hover:underline"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                info@weekendcatering.hu
              </a>
            </div>
            <div className="flex items-center gap-3 justify-center">
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
            <div className="flex items-center gap-3 justify-center">
              <Image
                src="/facebook-alt.svg"
                alt="Facebook"
                width={14}
                height={14}
                className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] flex-shrink-0"
              />
              <a
                href="https://www.facebook.com/profile.php?id=61582006615536"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase hover:underline"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                weekendcatering_BBQ
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/DOKUMENTUM-WEBOLDAL.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] md:text-[14px] font-medium text-[#ff1100] uppercase hover:underline"
                style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
              >
                ÁSZF
              </a>
            </div>
            <div className="flex items-center justify-center">
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
      </div>
    </footer>
  );
}
