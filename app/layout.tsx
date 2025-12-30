import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Weekend Catering - Street Food Catering Services",
  description:
    "Professional catering services specializing in BBQ, Smash Burgers, and more for events",
  icons: {
    // Use a proper favicon (favicon.ico) for broadest browser support.
    // Provide apple touch icon and a safari pinned tab mask for Safari/iOS.
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/logo-mask.svg", color: "#ff1100" }],
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
        <div className="m-auto max-w-[90dvw] xs:max-w-[80dvw] md:max-w-[75dvw] lg:max-w-[70dvw]">
          <Navbar />
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
