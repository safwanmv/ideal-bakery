"use client";

import { motion, Variants } from "framer-motion";

export default function Products() {
  const categories = [
    { name: "Birthday Cakes", desc: "Joyful cakes for your special day." },
    { name: "Wedding Cakes", desc: "Elegant designs for your perfect moment." },
    { name: "Custom Cakes", desc: "Personalized themes and flavors." },
    { name: "Celebration Cakes", desc: "For anniversaries, farewells, and more." },
    { name: "Snacks & Puffs", desc: "Crispy, savory delights baked fresh daily." },
    { name: "Fresh Bakery Items", desc: "Breads, buns, and traditional favorites." },
    { name: "Tea Time Specials", desc: "Perfect accompaniments for your evening tea." },
    { name: "Bulk Event Orders", desc: "Reliable catering for parties and events." },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
            <span className="w-8 h-px bg-primary/50"></span>
            <span>Our Specialties</span>
            <span className="w-8 h-px bg-primary/50"></span>
          </div>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-tight">
            Fresh From Our Ovens.
          </h2>
          <p className="mt-6 text-xl text-neutral-500">
            From daily snacks to grand celebration cakes, we have something to make every moment sweeter.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div 
              key={category.name} 
              variants={item}
              className="bg-white rounded-[2rem] p-8 border border-neutral-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center group cursor-pointer"
            >
              <div className="h-12 w-12 rounded-full bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <span className="text-xl group-hover:scale-110 transition-transform">✨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">{category.name}</h3>
              <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{category.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
