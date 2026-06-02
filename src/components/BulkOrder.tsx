"use client";

import { Package, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function BulkOrder() {
  const { language } = useLanguage();

  const messages = {
    EN: "Hi Ideal Bakery! I am planning a big event and would like to inquire about a bulk order.",
    ML: "നമസ്കാരം ഐഡിയൽ ബേക്കറി! ഞാൻ ഒരു വലിയ പരിപാടി പ്ലാൻ ചെയ്യുന്നു, ബൾക്ക് ഓർഡറിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു.",
    KN: "ನಮಸ್ಕಾರ ಐಡಿಯಲ್ ಬೇಕರಿ! ನಾನು ದೊಡ್ಡ ಕಾರ್ಯಕ್ರಮವನ್ನು ಆಯೋಜಿಸುತ್ತಿದ್ದೇನೆ ಮತ್ತು ಬಲ್ಕ್ ಆರ್ಡರ್ ಬಗ್ಗೆ ವಿಚಾರಿಸಲು ಬಯಸುತ್ತೇನೆ."
  };

  const message = messages[language as keyof typeof messages];
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

  return (
    <section id="bulk-orders" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute -left-40 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 rounded-[3rem] shadow-2xl p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 mx-auto h-20 w-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 rotate-3">
            <Package className="h-10 w-10 text-primary -rotate-3" />
          </div>
          
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tighter">
            Planning a Big Event?
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-neutral-400 mx-auto leading-relaxed">
            From wedding events and birthday parties to school functions, corporate events, and community gatherings—we handle bulk orders with guaranteed timely delivery and uncompromised quality.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-10 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:bg-red-800 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 mr-3 fill-current" />
              Enquire Bulk Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
