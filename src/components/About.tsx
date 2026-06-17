"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const points = [
    "Over 25 years of mastery",
    "Locally sourced fresh ingredients",
    "Beloved by the Kasaragod community",
    "Expertly trained bakers and decorators"
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 lg:mb-0 relative"
          >
            <div className="relative h-[400px] sm:h-[600px] w-full lg:w-11/12 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/images/real/jalebi.jpeg"
                alt="Fresh Traditional Bakery Snacks"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 contrast-[1.1] saturate-[1.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent pointer-events-none mix-blend-overlay"></div>
            </div>
            {/* Floating accent block */}
            <div className="absolute -bottom-10 -right-4 lg:-right-10 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-neutral-100 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-red-50 text-primary flex items-center justify-center rounded-2xl shrink-0">
                  <span className="text-2xl font-bold">25+</span>
                </div>
                <p className="text-sm font-semibold text-neutral-800 leading-tight">
                  Years of Baking Excellence
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <span className="w-8 h-px bg-primary/50"></span>
              <span>Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-tight">
              A Legacy of Taste in Chattanchal.
            </h2>
            <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
              Since our opening over two decades ago, Ideal Bakery has been more than just a place to buy bread. We are woven into the very fabric of the Chattanchal community&#39;s daily life and most cherished celebrations.
            </p>
            <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
              We take immense pride in our traditional recipes while constantly innovating to bring you the best cakes, snacks, and authentic bakery items.
            </p>
            
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-neutral-700">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
