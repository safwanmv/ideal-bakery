import Link from "next/link";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">Ideal Bakery</h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Freshly Baked Memories for Over 25 Years. Trusted by generations in Chattanchal for cakes, snacks, bakery favorites, and custom celebrations.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="font-bold">FB</span>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="font-bold">IG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Custom Cakes', 'Bulk Orders', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block font-medium text-white">Monday - Sunday</span>
                  <span className="text-neutral-400">8:00 AM – 10:00 PM</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="block font-medium text-white">Holidays</span>
                  <span className="text-neutral-400">Open (Special Hours May Apply)</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  F3H4+XX3, Chattanchal<br />
                  Kasaragod, Kerala 671541<br />
                  India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@idealbakery.com</span>
              </li> */}
            </ul>
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=Ideal+Bakery+Chattanchal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-white transition-colors"
              >
                <span>Get Directions</span>
                <MapPin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 md:pb-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Ideal Bakery. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by{" "}
            <a 
              href="https://wa.me/917025849734?text=Hi%20Mohammed%20Safwan!%20I%20saw%20the%20Ideal%20Bakery%20website%20you%20designed%20and%20I%20am%20very%20impressed.%20I%20would%20love%20to%20discuss%20building%20a%20website%20like%20that%20for%20my%20business."
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-white transition-colors font-medium"
            >
              Mohammed Safwan.MV
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
