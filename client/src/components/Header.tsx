import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/NEW  UCU LOGO_1752157158761.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logoPath} alt="U Charge Up" className="h-8 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-brand-blue transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-brand-blue transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("our-kiosks")}
              className="text-gray-700 hover:text-brand-blue transition-colors duration-200"
            >
              Our Kiosks
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="text-gray-700 hover:text-brand-blue transition-colors duration-200"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-brand-blue transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
          
          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-brand-blue">
              Login
            </Button>
            <Button className="bg-brand-blue hover:bg-brand-dark-blue text-white">
              Download App
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-1"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("our-kiosks")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              Our Kiosks
            </button>
            <button
              onClick={() => scrollToSection("partners")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            >
              Contact
            </button>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
