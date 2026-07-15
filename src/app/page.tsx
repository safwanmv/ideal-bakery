import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import CustomCake from "@/components/CustomCake";
import BulkOrder from "@/components/BulkOrder";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Bakery", "LocalBusiness"],
    "name": "Ideal Bakery",
    "description": "The best bakery in Kasaragod, serving custom cakes, tasty snacks, and freshly baked goods since 1999.",
    "url": "https://ideal-bakery.vercel.app", // Update when live
    "telephone": "+919037375217", // Replace with real number if available
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Chattanchal",
      "addressLocality": "Kasaragod",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "hasMap": "https://maps.app.goo.gl/rk71cSkF11VHHaAb9",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "22:00"
    }
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Products />
      <CustomCake />
      <BulkOrder />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
}
