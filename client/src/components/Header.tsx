import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import logoPath from "@assets/NEW  UCU LOGO_1752157158761.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={logoPath} alt="U Charge Up®" className="h-16 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:text-brand-blue transition-colors duration-200 cursor-pointer">
                Home
              </span>
            </Link>
            <Link href="/how-it-works">
              <span className="text-gray-700 hover:text-brand-blue transition-colors duration-200 cursor-pointer">
                How It Works
              </span>
            </Link>
            <Link href="/kiosks">
              <span className="text-gray-700 hover:text-brand-blue transition-colors duration-200 cursor-pointer">
                Our Kiosks
              </span>
            </Link>
            <Link href="/events">
              <span className="text-gray-700 hover:text-brand-blue transition-colors duration-200 cursor-pointer">
                Events
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-brand-blue transition-colors duration-200 cursor-pointer">
                Contact
              </span>
            </Link>
          </nav>
          
          
          
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
            <Link href="/">
              <span 
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Home
              </span>
            </Link>
            <Link href="/how-it-works">
              <span 
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                How It Works
              </span>
            </Link>
            <Link href="/kiosks">
              <span 
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Our Kiosks
              </span>
            </Link>
            <Link href="/events">
              <span 
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Events
              </span>
            </Link>
            <Link href="/contact">
              <span 
                onClick={closeMenu}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer"
              >
                Contact
              </span>
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
