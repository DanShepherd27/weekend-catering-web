import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

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
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: "Helvetica Neue, Arial, sans-serif" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
