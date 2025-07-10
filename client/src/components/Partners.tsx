import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Coffee, ShoppingBag, Plane, GraduationCap, Building, Utensils } from "lucide-react";

export default function Partners() {
  const partnerIcons = [
    { icon: Coffee, name: "Cafes" },
    { icon: ShoppingBag, name: "Retail" },
    { icon: Plane, name: "Airports" },
    { icon: GraduationCap, name: "Universities" },
    { icon: Building, name: "Hotels" },
    { icon: Utensils, name: "Restaurants" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-text">Trusted Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find our kiosks at these popular locations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnerIcons.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <partner.icon className="h-12 w-12 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">{partner.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-brand-blue hover:bg-brand-dark-blue text-white font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Become a Partner
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
