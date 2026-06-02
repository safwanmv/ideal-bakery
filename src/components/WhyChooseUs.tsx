import { Award, Users, ThumbsUp, Clock, Star, Heart } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { name: "25+ Years Experience", icon: Clock, desc: "Decades of baking perfection and trust." },
    { name: "Thousands of Happy Customers", icon: Users, desc: "A loyal community that chooses us every time." },
    { name: "Trusted Local Brand", icon: Award, desc: "A household name in Chattanchal." },
    { name: "Freshly Prepared", icon: Heart, desc: "Baked daily with high-quality ingredients." },
    { name: "Custom Specialists", icon: Star, desc: "Bringing your dream cakes to reality." },
    { name: "Affordable Pricing", icon: ThumbsUp, desc: "Premium quality that fits your budget." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Why Ideal Bakery</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl">
            A Tradition of Excellence
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-x-8 sm:gap-y-12">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-50 text-primary mb-4">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.name}</h3>
                <p className="mt-2 text-base text-neutral-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
