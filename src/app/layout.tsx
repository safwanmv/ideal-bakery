import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ideal Bakery - Freshly Baked Memories for Over 25 Years",
  description: "Ideal Bakery in Chattanchal, Kasaragod. Trusted by generations for cakes, snacks, bakery favorites, and custom celebrations.",
  keywords: ["Ideal Bakery Chattanchal", "Bakery in Kasaragod", "Best Cakes in Kasaragod", "Custom Cakes in Kasaragod", "Birthday Cakes in Kasaragod"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
