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
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center mb-12">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-white rounded-lg border-0 h-20"
            >
              <div className="text-gray-400 text-sm text-center font-medium">
                {partner.name}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-brand-blue rounded-lg p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Basement Burger Bar</h3>
          <p className="text-xl mb-6 opacity-90">Only the best is powered by U Charge Up</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-brand-blue hover:bg-gray-100 font-semibold"
          >
            Download Our App
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
