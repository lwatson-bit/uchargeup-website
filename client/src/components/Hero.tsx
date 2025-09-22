import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Battery, Zap, MapPin, Leaf, Award } from "lucide-react";
import kioskImage from "@assets/Large 24 UCU_1752157170473.jpg";
import { handleAppDownload } from "@/utils/appDownload";
import bbbLogo from "@assets/BBB-LOGO_1752165222960.jpg";
import fordFieldLogo from "@assets/Ford_field_stadium_logo_1752165222960.png";
import fourWindsLogo from "@assets/Four-winds_1752165222960.png";
import rocketClassicLogo from "@assets/Logo-2025RocketClassic-PresentingSponsorLogo-CMYK-8639137248_Horz-Color (7)_1752165222960.png";
import fixinsLogo from "@assets/Fixins Logo_1752165204990.png";
import afroFutureLogo from "@assets/afrobeats-festival-downtown-detroit.png_1757032474149.webp";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Partner logos for hero section with scrolling
  const baseLogos = [
    { name: "Basement Burger Bar", alt: "Basement Burger Bar", logoPath: bbbLogo },
    { name: "Ford Field", alt: "Ford Field", logoPath: fordFieldLogo },
    { name: "Four Winds Casinos", alt: "Four Winds Casinos", logoPath: fourWindsLogo },
    { name: "Rocket Classic", alt: "Rocket Classic", logoPath: rocketClassicLogo },
    { name: "Fixins", alt: "Fixins", logoPath: fixinsLogo },
    { name: "Afro Future Detroit", alt: "Afro Future Detroit", logoPath: afroFutureLogo }
  ];

  // Create enough duplicates for seamless infinite scroll
  const partnerLogos = [
    ...baseLogos,
    ...baseLogos,
    ...baseLogos
  ];

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">Stay Connected. Stay In The Moment.</h1>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Rent portable batteries at any of our partner locations. Return them anywhere in our network. Never worry about running out of power again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
                onClick={handleAppDownload}
              >
                Download App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold"
                onClick={() => scrollToSection("how-it-works")}
              >
                How It Works
              </Button>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-brand-blue" />
                Fast charging
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-brand-blue" />
                Multiple locations
              </div>
              <div className="flex items-center">
                <Leaf className="w-4 h-4 mr-2 text-brand-blue" />
                Eco-friendly
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-brand-blue" />
                MBE Certified
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img 
                src={kioskImage} 
                alt="U Charge Up battery rental kiosk" 
                className="w-full max-w-md"
                style={{
                  background: 'transparent',
                  border: 'none',
                  boxShadow: 'none'
                }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Partner logos - scrolling carousel in hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Trusted by</span>
          </div>
          
          {/* Scrolling Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set */}
              {partnerLogos.map((partner, index) => (
                <div
                  key={`set1-${index}`}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 border border-gray-100">
                    <img 
                      src={partner.logoPath}
                      alt={partner.alt}
                      className="max-w-24 max-h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Second set for seamless loop */}
              {partnerLogos.map((partner, index) => (
                <div
                  key={`set2-${index}`}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 border border-gray-100">
                    <img 
                      src={partner.logoPath}
                      alt={partner.alt}
                      className="max-w-24 max-h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
