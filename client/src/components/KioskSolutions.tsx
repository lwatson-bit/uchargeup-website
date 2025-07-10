import { motion } from "framer-motion";
import { Monitor, Grid3X3, Zap } from "lucide-react";
import twentyFourUnitImage from "@assets/24 Unit UCU_1752157185779.png";

export default function KioskSolutions() {
  const features = [
    {
      icon: Monitor,
      title: "Interactive Display",
      description: "Large, user-friendly displays guide you through the rental process with clear instructions and multiple payment options."
    },
    {
      icon: Grid3X3,
      title: "Modular Design", 
      description: "Our modular charging stations can be customized to fit any space, from compact countertop units to large floor-standing kiosks."
    },
    {
      icon: Zap,
      title: "Smart Technology",
      description: "LED indicators show battery availability, automatic dispensing ensures smooth operation, and contactless payments make renting effortless."
    }
  ];

  return (
    <section id="our-kiosks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Our Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Advanced Charging Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art kiosks are designed for reliability, convenience, and scalability to meet the needs of any location.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src={twentyFourUnitImage} 
              alt="U Charge Up modular charging station with multiple battery compartments" 
              className="w-full max-w-md rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-brand-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
