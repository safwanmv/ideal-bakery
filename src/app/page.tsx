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
  return (
    <div className="flex flex-col w-full">
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
