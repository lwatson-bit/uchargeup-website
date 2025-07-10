import { motion } from "framer-motion";
import { QrCode, Battery, RotateCcw } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      number: "1",
      title: "Start Rental",
      description: "Scan the QR code on the kiosk using your phone, or tap your credit/debit card on the reader to begin and grab your battery."
    },
    {
      icon: Battery,
      number: "2", 
      title: "Charge On the Go",
      description: "Use the built-in cables to power up your phone or device—wherever you are, no outlet needed."
    },
    {
      icon: RotateCcw,
      number: "3",
      title: "Return Anywhere",
      description: "Done charging? Drop the battery at any U Charge Up kiosk—no need to return it to the same spot."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How to Rent a U Charge Up Battery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Renting a battery is quick and easy. Here's how our service works.
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
              <div className="bg-brand-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
