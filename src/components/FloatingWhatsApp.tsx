"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();

  const messages = {
    EN: "Hi Ideal Bakery! I have some inquiries about your products and would like to place an order.",
    ML: "നമസ്കാരം ഐഡിയൽ ബേക്കറി! എനിക്ക് ചില വിവരങ്ങൾ അറിയാനും ഓർഡർ ചെയ്യാനും താല്പര്യമുണ്ട്.",
    KN: "ನಮಸ್ಕಾರ ಐಡಿಯಲ್ ಬೇಕರಿ! ನಾನು ಕೆಲವು ಮಾಹಿತಿಯನ್ನು ತಿಳಿಯಲು ಮತ್ತು ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ."
  };

  const message = messages[language as keyof typeof messages];
  const whatsappUrl = `https://wa.me/9181568 57777?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-neutral-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-neutral-100">
          Chat with us
        </span>
      </a>
    </motion.div>
  );
}
