import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import eightUnitImage from "@assets/8 Unit UCU_1752157185780.png";
import twentyFourUnitImage from "@assets/24 Unit UCU_1752157185779.png";
import largeKioskImage from "@assets/Large 24 UCU_1752157170473.jpg";

export default function KioskSolutions() {
  const kiosks = [
    {
      image: eightUnitImage,
      title: "Compact 8-Unit",
      description: "Perfect for smaller venues like cafes, retail stores, and waiting areas. Compact design with maximum efficiency.",
      capacity: "8 Power Banks",
      feature: "Touchscreen Interface"
    },
    {
      image: twentyFourUnitImage,
      title: "Standard 24-Unit",
      description: "Ideal for busy locations like airports, malls, and transit stations. High capacity with modern design.",
      capacity: "24 Power Banks",
      feature: "LED Status Indicators"
    },
    {
      image: largeKioskImage,
      title: "Large Capacity",
      description: "Premium solution for high-traffic areas like stadiums, universities, and major retail centers.",
      capacity: "48+ Power Banks",
      feature: "Multiple Payment Options"
    }
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-text">Our Kiosk Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible kiosk sizes to fit any location and demand
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kiosks.map((kiosk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <img 
                    src={kiosk.image} 
                    alt={kiosk.title} 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-semibold mb-3 text-brand-text">{kiosk.title}</h3>
                  <p className="text-gray-600 mb-4">{kiosk.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-blue font-semibold">{kiosk.capacity}</span>
                    <span className="text-sm text-gray-500">{kiosk.feature}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
