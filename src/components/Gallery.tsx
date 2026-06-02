"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "/images/hero-bakery.png", alt: "Storefront and Fresh Bakes" },
    { src: "/images/wedding-cake.png", alt: "Elegant Wedding Cake" },
    { src: "/images/birthday-cake.png", alt: "Custom Birthday Cake" },
    { src: "/images/bakery-snacks.png", alt: "Fresh Evening Snacks" },
  ];

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
            <span className="w-8 h-px bg-primary/50"></span>
            <span>Gallery</span>
            <span className="w-8 h-px bg-primary/50"></span>
          </div>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-tight">
            A Glimpse of Perfection.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-[2rem] overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${i === 0 || i === 3 ? "md:col-span-2 md:h-96" : "md:h-96"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-white font-medium text-lg tracking-tight">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
