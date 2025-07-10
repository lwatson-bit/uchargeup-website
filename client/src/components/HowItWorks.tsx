import { motion } from "framer-motion";
import { QrCode, CreditCard, Battery } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      title: "1. Scan QR Code",
      description: "Find a U Charge Up kiosk and scan the QR code with your phone to start the rental process."
    },
    {
      icon: CreditCard,
      title: "2. Pay Securely",
      description: "Choose your preferred payment method - card, digital wallet, or contactless payment."
    },
    {
      icon: Battery,
      title: "3. Charge & Return",
      description: "Take your power bank, charge your device, and return it to any U Charge Up kiosk when done."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-text">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and convenient power bank rental in just three steps
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-brand-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-brand-text">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
