"use client";

import { Star, Quote } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      content: "This is our go-to destination for baked goods in the area! It's an excellent choice for reasonably priced, fresh food and quick service. The staff members are always very polite.",
      author: "Google Reviewer",
      role: "Local Guide"
    },
    {
      content: "They have a wide selection of items, including fresh bread, cakes, chocolates, pastries, and snacks. Highly recommend for any occasion in Chattanchal.",
      author: "Verified Customer",
      role: "Google Review"
    },
    {
      content: "Great place for live cake-making for birthdays! We loved the custom cake they made for us, and the evening snacks are always a family favorite.",
      author: "Happy Customer",
      role: "Google Review"
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
            <span className="w-8 h-px bg-primary/50"></span>
            <span>Testimonials</span>
            <span className="w-8 h-px bg-primary/50"></span>
          </div>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tighter text-foreground leading-tight">
            Loved by the Community.
          </h2>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="bg-[#fafafa] rounded-[2rem] p-10 relative group hover:bg-neutral-900 transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-neutral-200 group-hover:text-neutral-800 transition-colors duration-500" />
              <div className="flex text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-white transition-colors duration-500">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
