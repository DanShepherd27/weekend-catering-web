"use client";
import { usePathname, useRouter } from "next/navigation";

interface InquiryFloaterProps {
  isFooterExpanded?: boolean;
}

export function InquiryFloater({
  isFooterExpanded = false,
}: InquiryFloaterProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push("/kapcsolat");
    }
  };

  // Calculate bottom position: 30px above footer
  // Collapsed footer is roughly 80px, expanded is roughly 200px on mobile, always ~140px on desktop
  const getBottomPosition = () => {
    // On mobile (< sm breakpoint)
    if (isFooterExpanded) {
      return "bottom-[230px]"; // 200px footer + 30px gap
    }
    return "bottom-[110px]"; // 80px footer + 30px gap
  };

  {
    /* Floating Ajánlatkérés Button */
  }
  return (
    <a
      href="#contact-form"
      onClick={handleScroll}
      className={`fixed ${getBottomPosition()} sm:bottom-[170px] right-1 z-50 bg-white border-[#ff1100] border-2 rounded-tl-full rounded-bl-full rounded-tr-full shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 ${
        pathname === "/kapcsolat" ? "hidden" : ""
      }`}
    >
      <p
        className="text-[14px] md:text-[20px] font-bold text-[#ff1100] uppercase"
        style={{
          fontFamily: "Helvetica Neue, Arial, sans-serif",
        }}
      >
        Ajánlatkérés
      </p>
    </a>
  );
}
