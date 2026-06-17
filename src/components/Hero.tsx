"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide text-neutral-600 uppercase">Est. 1999</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Memories</span><br />
              Since 1999.
            </h1>
            
            <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-xl">
              Elevating the art of baking. Experience our signature cakes, artisanal breads, and delightful pastries, baked fresh daily in Chattanchal.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#custom-cakes"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-foreground text-white font-medium hover:bg-neutral-800 transition-all shadow-xl shadow-neutral-900/10 hover:scale-105 active:scale-95"
              >
                Order Custom Cake
              </Link>
              <Link
                href="#products"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white text-foreground font-medium hover:bg-neutral-50 transition-all border border-neutral-200 group"
              >
                View Menu
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/real/store_front.jpeg"
              alt="Ideal Bakery Store Front"
              fill
              className="object-cover contrast-[1.1] saturate-[1.2]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/10 mix-blend-multiply"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
