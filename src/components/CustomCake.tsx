"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomCake() {
  return (
    <section id="custom-cakes" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary/80 lg:grid lg:grid-cols-2 lg:gap-4 border border-neutral-800"
        >
          {/* Background Abstract Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10 pt-16 pb-20 px-8 sm:pt-20 sm:px-16 lg:py-24 lg:pr-0 xl:py-28 xl:px-20">
            <div className="lg:self-center max-w-lg">
              <div className="inline-flex items-center space-x-2 text-white/60 font-bold tracking-widest uppercase text-xs mb-6">
                <span>Dream it. We bake it.</span>
              </div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl leading-tight tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Custom Cake</span>
                <span className="block mt-2 font-serif italic font-light">Specialists.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-300">
                Make your celebration unforgettable with a personalized cake. Whether it&#39;s a themed birthday, an elegant wedding cake, or an anniversary surprise, our master bakers will bring your vision to life.
              </p>
              
              <ul className="mt-8 space-y-4 text-neutral-200 font-medium">
                <li className="flex items-center space-x-3"><span className="text-primary">✦</span> <span>Personalized themes and designs</span></li>
                <li className="flex items-center space-x-3"><span className="text-primary">✦</span> <span>Birthday, Wedding & Anniversary Cakes</span></li>
                <li className="flex items-center space-x-3"><span className="text-primary">✦</span> <span>Premium, locally-sourced ingredients</span></li>
              </ul>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block mt-10">
                <Link
                  href="#contact"
                  className="bg-white rounded-full shadow-lg px-8 py-4 inline-flex items-center text-base font-bold text-foreground hover:bg-neutral-100 transition-all border border-transparent"
                >
                  Request Your Custom Cake
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="relative -mt-6 sm:-mt-10 aspect-square md:aspect-[4/3] lg:mt-0 lg:aspect-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute inset-0 transform translate-x-6 translate-y-6 sm:translate-x-16 lg:translate-y-20 lg:translate-x-10 rounded-tl-[3rem] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/birthday-cake.png"
                alt="Custom Birthday Cake"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
