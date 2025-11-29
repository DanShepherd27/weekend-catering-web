"use client";
import { usePathname, useRouter } from "next/navigation";

export function InquiryFloater() {
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

  {
    /* Floating Ajánlatkérés Button */
  }
  return (
    <a
      href="#contact-form"
      onClick={handleScroll}
      className={`fixed bottom-52 md:bottom-44 lg:bottom-36 right-1 z-50 bg-white border-[#ff1100] border-2 rounded-full shadow-lg hover:shadow-xl transition-shadow px-8 py-4 ${
        pathname === "/kapcsolat" ? "hidden" : ""
      }`}
    >
      <p
        className="text-[20px] font-bold text-[#ff1100] uppercase"
        style={{
          fontFamily: "Helvetica Neue, Arial, sans-serif",
        }}
      >
        Ajánlatkérés
      </p>
    </a>
  );
}
