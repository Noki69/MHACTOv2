import { Link } from "react-router";
import { Facebook, Instagram, Mail, Twitter, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#1e3a34] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Bocaue Section */}
          <div>
            <div className="mb-4 flex justify-center md:justify-start">
              <img
                src="/assets/mhacto-logo.png"
                alt="MHACTO Logo"
                className="w-32 h-auto drop-shadow-md"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h3 className="font-['Playfair_Display:Bold',sans-serif] text-2xl text-white mb-4">
              Bocaue
            </h3>
            <p className="text-sm text-[#a8ccc7] leading-relaxed font-['Inter',sans-serif]">
              Discover the rich heritage, vibrant culture, and stunning landscapes of Bocaue, Bulacan. Your journey to paradise begins here.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#b4532a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#b4532a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#b4532a] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Playfair_Display:Bold',sans-serif] text-2xl text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm font-['Inter',sans-serif]">
              <li>
                <Link
                  to="/about"
                  className="text-[#a8ccc7] hover:text-[#b4532a] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/tourist-spots"
                  className="text-[#a8ccc7] hover:text-[#b4532a] transition-colors"
                >
                  Tourist Spots
                </Link>
              </li>
              <li>
                <Link
                  to="/culture"
                  className="text-[#a8ccc7] hover:text-[#b4532a] transition-colors"
                >
                  Places & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/inquiry"
                  className="text-[#a8ccc7] hover:text-[#b4532a] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/inquiry"
                  className="text-[#a8ccc7] hover:text-[#b4532a] transition-colors"
                >
                  Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-['Playfair_Display:Bold',sans-serif] text-2xl text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#b4532a] mt-1 flex-shrink-0" />
                <p className="text-sm text-[#a8ccc7]">
                  Municipal Hall, Bocaue, Bulacan, Philippines 3018
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-[#b4532a] mt-1 flex-shrink-0" />
                <a href="tel:+63441234567" className="text-sm text-[#a8ccc7] hover:text-[#b4532a] transition-colors">
                  +63 (44) 123-4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#b4532a] mt-1 flex-shrink-0" />
                <a href="mailto:tourism@bocaue.gov.ph" className="text-sm text-[#a8ccc7] hover:text-[#b4532a] transition-colors">
                  tourism@bocaue.gov.ph
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-['Playfair_Display:Bold',sans-serif] text-2xl text-white mb-6">
              Newsletter
            </h3>
            <p className="text-sm text-[#a8ccc7] mb-4 font-['Inter',sans-serif]">
              Subscribe to get the latest updates and travel tips.
            </p>
            {subscribed ? (
              <div className="bg-[#b4532a] text-white p-3 rounded text-center text-sm font-medium">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-[#a8ccc7]/50 focus:outline-none focus:border-[#b4532a] transition-colors text-sm rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-[#b4532a] text-white px-4 py-3 font-medium hover:bg-[#8f3f1f] transition-colors text-sm rounded"
                >
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm text-[#a8ccc7] font-['Inter',sans-serif]">
              © 2026 Bocaue Tourism Office. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-[#a8ccc7] font-['Inter',sans-serif]">
              <a href="#" className="hover:text-[#b4532a] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#b4532a] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#b4532a] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
