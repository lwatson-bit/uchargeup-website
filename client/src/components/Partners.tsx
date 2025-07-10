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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-50 p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500">Partner Location</p>
                </div>
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center text-xs text-gray-400">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Available Now
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
}
