import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { InquiryFloater } from "@/components/InquiryFloater/InquiryFloater";

export const metadata: Metadata = {
  title: "Weekend Catering - Street Food Catering Services",
  description:
    "Professional catering services specializing in BBQ, Smash Burgers, and more for events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="#top">
      <body
        className="antialiased"
        style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
      >
        <Navbar />
        <InquiryFloater />
        {children}
      </body>

      <Footer />
    </html>
  );
}
