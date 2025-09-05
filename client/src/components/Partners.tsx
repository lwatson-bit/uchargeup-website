import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bbbLogo from "@assets/BBB-LOGO_1752165222960.jpg";
import fordFieldLogo from "@assets/Ford_field_stadium_logo_1752165222960.png";
import fourWindsLogo from "@assets/Four-winds_1752165222960.png";
import rocketClassicLogo from "@assets/Logo-2025RocketClassic-PresentingSponsorLogo-CMYK-8639137248_Horz-Color (7)_1752165222960.png";
import fixinsLogo from "@assets/Fixins Logo_1752165204990.png";
import afroFutureLogo from "@assets/afrobeats-festival-downtown-detroit.png_1757032474149.webp";

export default function Partners() {
  // Partner companies with actual uploaded logos
  const partnerLogos = [
    { name: "Basement Burger Bar", alt: "Basement Burger Bar", logoPath: bbbLogo },
    { name: "Ford Field", alt: "Ford Field", logoPath: fordFieldLogo },
    { name: "Four Winds Casinos", alt: "Four Winds Casinos", logoPath: fourWindsLogo },
    { name: "Rocket Classic", alt: "Rocket Classic", logoPath: rocketClassicLogo },
    { name: "Fixins", alt: "Fixins", logoPath: fixinsLogo },
    { name: "Afro Future Detroit", alt: "Afro Future Detroit", logoPath: afroFutureLogo },
    // Duplicating some logos to fill the carousel for smooth scrolling
    { name: "Basement Burger Bar", alt: "Basement Burger Bar", logoPath: bbbLogo },
    { name: "Ford Field", alt: "Ford Field", logoPath: fordFieldLogo },
    { name: "Four Winds Casinos", alt: "Four Winds Casinos", logoPath: fourWindsLogo },
    { name: "Rocket Classic", alt: "Rocket Classic", logoPath: rocketClassicLogo },
    { name: "Fixins", alt: "Fixins", logoPath: fixinsLogo },
    { name: "Afro Future Detroit", alt: "Afro Future Detroit", logoPath: afroFutureLogo }
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
                  <img 
                    src={partner.logoPath}
                    alt={partner.alt}
                    className="max-w-32 max-h-16 object-contain"
                    onError={(e) => {
                      // Fallback to text if logo not found
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-center hidden">
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {partner.name}
                    </div>
                    <div className="w-8 h-1 bg-brand-blue rounded-full mx-auto opacity-60"></div>
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
                  <img 
                    src={partner.logoPath}
                    alt={partner.alt}
                    className="max-w-32 max-h-16 object-contain"
                    onError={(e) => {
                      // Fallback to text if logo not found
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="text-center hidden">
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {partner.name}
                    </div>
                    <div className="w-8 h-1 bg-brand-blue rounded-full mx-auto opacity-60"></div>
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
