import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ideal Bakery | Best Bakery in Kasaragod",
    template: "%s | Ideal Bakery"
  },
  description: "Discover Ideal Bakery in Chattanchal, Kasaragod. Known as the best bakery for custom cakes, tasty snacks, and freshly baked memories since 1999.",
  keywords: [
    "best bakery in kasaragod", 
    "tasty bakery kasaragod", 
    "Ideal Bakery Chattanchal", 
    "custom cakes kasaragod", 
    "birthday cakes kasaragod", 
    "fresh bakery items",
    "wedding cakes kasaragod",
    "best cakes in chattanchal"
  ],
  authors: [{ name: "Ideal Bakery" }],
  creator: "Ideal Bakery",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://idealbakery.com", // Replace with actual domain when live
    title: "Ideal Bakery | Best Bakery in Kasaragod",
    description: "Discover Ideal Bakery in Chattanchal, Kasaragod. Known as the best bakery for custom cakes, tasty snacks, and freshly baked memories since 1999.",
    siteName: "Ideal Bakery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Bakery | Best Bakery in Kasaragod",
    description: "Discover Ideal Bakery in Chattanchal, Kasaragod. Known as the best bakery for custom cakes, tasty snacks, and freshly baked memories since 1999.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-primary/20 selection:text-primary overflow-x-hidden w-full">
        <LanguageProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
