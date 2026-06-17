"use client";

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const messages = {
    EN: "Hi Ideal Bakery! I have some inquiries about your products and would like to place an order.",
    ML: "നമസ്കാരം ഐഡിയൽ ബേക്കറി! എനിക്ക് ചില വിവരങ്ങൾ അറിയാനും ഓർഡർ ചെയ്യാനും താല്പര്യമുണ്ട്.",
    KN: "ನಮಸ್ಕಾರ ಐಡಿಯಲ್ ಬೇಕರಿ! ನಾನು ಕೆಲವು ಮಾಹಿತಿಯನ್ನು ತಿಳಿಯಲು ಮತ್ತು ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ."
  };

  const message = messages[language as keyof typeof messages];
  const whatsappMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/08156857777?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
            <span className="w-8 h-px bg-primary/50"></span>
            <span>Get In Touch</span>
            <span className="w-8 h-px bg-primary/50"></span>
          </div>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-tight">
            We&#39;d Love to Hear From You.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* WhatsApp Direct Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 p-8 sm:p-12 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#25D366]"></div>

            <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <MessageCircle className="w-12 h-12 text-[#25D366]" />
            </div>

            <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Chat with us directly</h3>
            <p className="text-lg text-neutral-500 mb-10 max-w-sm">
              Skip the forms! Click below to send us a direct message on WhatsApp. We usually reply within minutes.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center px-10 py-4 rounded-full bg-[#25D366] text-white font-bold tracking-wide hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/20 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 mr-3 fill-current" />
              Message on WhatsApp
            </a>
          </motion.div>

          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-8 tracking-tight">Visit Our Store</h3>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-6">
                    <p className="text-lg font-bold text-foreground">Ideal Bakery</p>
                    <p className="mt-1 text-neutral-500 leading-relaxed">F3H4+XX3, Chattanchal<br />Kasaragod, Kerala 671541</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-6">
                    <p className="text-lg font-bold text-foreground">08156857777</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="ml-6">
                    <p className="text-lg font-bold text-foreground">Business Hours</p>
                    <p className="mt-1 text-neutral-500">8:00 AM – 10:00 PM Daily</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="h-64 sm:h-72 bg-neutral-200 rounded-[2rem] overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.476483569722!2d75.03713055!3d12.4746811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba47da061e88fdf%3A0xa1ea14ed9e7f8e81!2sChattanchal%2C%20Kerala%20671541!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
