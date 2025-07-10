import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Partners() {
  // Using placeholder partner logos that would be replaced with actual partner logos
  const partnerLogos = [
    { name: "Basement Burger Bar", alt: "Basement Burger Bar" },
    { name: "Basement Burger Bar", alt: "Basement Burger Bar" },
    { name: "Ford Field", alt: "Ford Field" },
    { name: "Meijer", alt: "Meijer" },
    { name: "Four Winds Casinos", alt: "Four Winds Casinos" },
    { name: "Brass Rail", alt: "Brass Rail" },
    { name: "The Hudson Cafe", alt: "The Hudson Cafe" },
    { name: "Love & Tequila", alt: "Love & Tequila" },
    { name: "The Licking", alt: "The Licking" },
    { name: "Empire Kitchen & Cocktails", alt: "Empire Kitchen & Cocktails" },
    { name: "Checkmate Detroit", alt: "Checkmate Detroit" }
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
                <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                  <div className="text-center">
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
                <div className="w-32 h-20 bg-white rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
                  <div className="text-center">
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
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-brand-blue text-white font-medium hover:bg-brand-dark-blue transition-colors duration-300 cursor-pointer">
            <span className="mr-2">Ready to find a kiosk?</span>
            <Button
              size="sm"
              variant="secondary"
              className="bg-white text-brand-blue hover:bg-gray-100 font-semibold ml-2"
              onClick={() => scrollToSection("contact")}
            >
              Get Started
            </Button>
          </div>
        </motion.div>
        
        
      </div>
    </section>
  );
}
