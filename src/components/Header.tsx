"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Story", href: "#about" },
    { name: "Menu", href: "#products" },
    { name: "Custom", href: "#custom-cakes" },
    { name: "Gallery", href: "#gallery" },
  ];

  const languages = [
    { code: "EN", name: "English" },
    { code: "ML", name: "മലയാളം" },
    { code: "KN", name: "ಕನ್ನಡ" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-full border ${
          scrolled ? "bg-white/70 backdrop-blur-xl border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-3" : "bg-transparent border-transparent px-4 py-2"
        }`}>
          <Link href="/" className="flex items-center space-x-2 z-50">
            <span className="text-2xl font-bold tracking-tighter text-foreground">Ideal<span className="text-primary">Bakery.</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-neutral-600 hover:text-foreground transition-colors px-2 py-1 rounded-md"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full mt-2 right-0 bg-white border border-neutral-100 shadow-xl rounded-xl p-2 flex flex-col min-w-[120px] overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as "EN" | "ML" | "KN");
                        setIsLangOpen(false);
                      }}
                      className={`text-left px-3 py-2 text-sm rounded-lg transition-colors ${language === lang.code ? "bg-primary/10 text-primary font-bold" : "hover:bg-neutral-50 text-neutral-600"}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="#contact"
              className="bg-foreground hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 text-foreground p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-semibold text-foreground tracking-tight hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-neutral-100">
                <p className="text-sm font-semibold text-neutral-500 mb-3">Select Language</p>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as "EN" | "ML" | "KN");
                        setIsOpen(false);
                      }}
                      className={`py-2 px-3 text-sm rounded-xl font-medium transition-all ${
                        language === lang.code 
                          ? "bg-primary text-white shadow-md" 
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-foreground text-white px-6 py-4 rounded-2xl font-medium"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
