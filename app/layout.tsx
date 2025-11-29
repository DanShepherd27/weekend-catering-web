import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Weekend Catering - Street Food Catering Services",
  description:
    "Professional catering services specializing in BBQ, Smash Burgers, and more for events",
  icons: {
    icon: "/logo-black.svg",
  },
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
        <div className="m-auto max-w-[90dvw] md:max-w-[80dvw] lg:max-w-[70dvw]">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
