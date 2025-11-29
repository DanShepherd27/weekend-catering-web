import { ContactForm } from "@/components/ContactForm/ContactForm";
import Link from "next/link";

export function ContactUsPageContent() {
  return (
    <main
      className="min-h-screen bg-white pb-[200px]"
      style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
    >
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
