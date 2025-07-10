import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Partners() {
  // Partner logos with SVG representations of real companies
  const partnerLogos = [
    { 
      name: "Basement Burger Bar", 
      alt: "Basement Burger Bar",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <rect x="10" y="15" width="100" height="10" fill="#8B4513" rx="2"/>
          <text x="60" y="25" textAnchor="middle" className="text-xs font-bold fill-white">BASEMENT BURGER</text>
        </svg>
      )
    },
    { 
      name: "Ford Field", 
      alt: "Ford Field",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <ellipse cx="60" cy="20" rx="50" ry="15" fill="#002F6C"/>
          <text x="60" y="25" textAnchor="middle" className="text-sm font-bold fill-white">FORD FIELD</text>
        </svg>
      )
    },
    { 
      name: "Meijer", 
      alt: "Meijer",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <rect x="10" y="10" width="100" height="20" fill="#FF6B35" rx="4"/>
          <text x="60" y="25" textAnchor="middle" className="text-lg font-bold fill-white">meijer</text>
        </svg>
      )
    },
    { 
      name: "Four Winds Casinos", 
      alt: "Four Winds Casinos",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <circle cx="30" cy="20" r="8" fill="#DAA520"/>
          <circle cx="50" cy="20" r="8" fill="#DAA520"/>
          <circle cx="70" cy="20" r="8" fill="#DAA520"/>
          <circle cx="90" cy="20" r="8" fill="#DAA520"/>
          <text x="60" y="35" textAnchor="middle" className="text-xs font-bold fill-gray-700">FOUR WINDS</text>
        </svg>
      )
    },
    { 
      name: "Brass Rail", 
      alt: "Brass Rail",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <rect x="20" y="18" width="80" height="4" fill="#B8860B"/>
          <text x="60" y="15" textAnchor="middle" className="text-sm font-bold fill-gray-800">BRASS</text>
          <text x="60" y="32" textAnchor="middle" className="text-sm font-bold fill-gray-800">RAIL</text>
        </svg>
      )
    },
    { 
      name: "The Hudson Cafe", 
      alt: "The Hudson Cafe",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <rect x="15" y="12" width="90" height="16" fill="#654321" rx="3"/>
          <text x="60" y="22" textAnchor="middle" className="text-xs font-bold fill-white">THE HUDSON</text>
          <text x="60" y="32" textAnchor="middle" className="text-xs font-bold fill-gray-700">CAFE</text>
        </svg>
      )
    },
    { 
      name: "Love & Tequila", 
      alt: "Love & Tequila",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <heart cx="40" cy="20" r="6" fill="#E91E63"/>
          <text x="60" y="18" textAnchor="middle" className="text-xs font-bold fill-gray-800">LOVE &</text>
          <text x="60" y="28" textAnchor="middle" className="text-xs font-bold fill-gray-800">TEQUILA</text>
        </svg>
      )
    },
    { 
      name: "The Licking", 
      alt: "The Licking",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <rect x="10" y="15" width="100" height="10" fill="#FF4500" rx="5"/>
          <text x="60" y="25" textAnchor="middle" className="text-sm font-bold fill-white">THE LICKING</text>
        </svg>
      )
    },
    { 
      name: "Empire Kitchen", 
      alt: "Empire Kitchen & Cocktails",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <rect x="15" y="10" width="90" height="20" fill="#2C3E50" rx="2"/>
          <text x="60" y="18" textAnchor="middle" className="text-xs font-bold fill-white">EMPIRE</text>
          <text x="60" y="28" textAnchor="middle" className="text-xs font-bold fill-white">KITCHEN</text>
        </svg>
      )
    },
    { 
      name: "Checkmate Detroit", 
      alt: "Checkmate Detroit",
      logo: (
        <svg viewBox="0 0 120 40" className="w-full h-full">
          <rect x="20" y="15" width="8" height="8" fill="#000"/>
          <rect x="32" y="15" width="8" height="8" fill="#FFF" stroke="#000"/>
          <rect x="44" y="15" width="8" height="8" fill="#000"/>
          <rect x="56" y="15" width="8" height="8" fill="#FFF" stroke="#000"/>
          <text x="60" y="32" textAnchor="middle" className="text-xs font-bold fill-gray-800">CHECKMATE</text>
        </svg>
      )
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Our Partners</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Find U Charge Up at these locations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've partnered with leading businesses to make sure you can find a U Charge Up kiosk wherever you go.
          </p>
        </motion.div>
        
        {/* Rotating Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-40 h-24 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 border border-gray-100">
                  <div className="w-32 h-16 flex items-center justify-center">
                    {partner.logo}
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="w-40 h-24 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 border border-gray-100">
                  <div className="w-32 h-16 flex items-center justify-center">
                    {partner.logo}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        
        
      </div>
    </section>
  );
}
