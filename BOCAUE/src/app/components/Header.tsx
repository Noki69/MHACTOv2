import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const imgMhactoLogo2 = "/assets/MHACTO LOGO.jpg";
const imgMunicipalityOfBocaueLogo1 = "/assets/Bocaue Logo.jpg";

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/tourist-spots", label: "Tourist Spots" },
    { path: "/culture", label: "Culture" },
    { path: "/programs", label: "Programs" },
    { path: "/inquiry", label: "Inquiry" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f8f6f1] shadow-lg" : "bg-[#f8f6f1]/95"
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 lg:w-20 lg:h-20"
            >
              <img
                src={imgMhactoLogo2}
                alt="MHACTO Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="hidden md:block">
              <div className="font-['Playfair_Display:Bold',sans-serif] text-lg lg:text-xl text-[#1e3a34]">
                MHACTO
              </div>
              <div className="text-xs text-[#2b2b2b]">Discover Bocaue</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-['Inter',sans-serif] font-semibold text-sm relative group transition-colors ${
                  location.pathname === item.path
                    ? "text-[#b4532a]"
                    : "text-black hover:text-[#b4532a]"
                }`}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#b4532a]"
                  initial={{ width: 0 }}
                  animate={{
                    width: location.pathname === item.path ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </nav>

          {/* Municipality Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden lg:block w-16 h-16"
          >
            <img
              src={imgMunicipalityOfBocaueLogo1}
              alt="Municipality of Bocaue"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1e3a34] hover:text-[#b4532a] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-['Inter',sans-serif] text-sm py-2 transition-colors ${
                  location.pathname === item.path
                    ? "text-[#b4532a]"
                    : "text-black hover:text-[#b4532a]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
