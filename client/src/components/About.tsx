import { motion } from "framer-motion";
import eightUnitImage from "@assets/8 Unit UCU_1752157185780.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Power on the go, simplified
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              U Charge Up was founded with a simple mission: ensure no one ever has to worry about their device running out of battery while on the move. Our network of rental kiosks makes it easy to grab a portable battery when you need one and return it when you're done.
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
              src={eightUnitImage} 
              alt="U Charge Up compact battery rental kiosk" 
              className="w-full max-w-md rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
        
        {/* Mission, Network, Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              We're committed to keeping you connected by providing convenient access to portable power whenever and wherever you need it, while reducing electronic waste through our sharing economy model.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Network</h3>
            <p className="text-gray-600">
              With partner locations across the city, you're never far from a U Charge Up kiosk. Our network continues to grow every month, making power more accessible than ever.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Impact</h3>
            <p className="text-gray-600">
              By sharing portable batteries instead of everyone owning their own, we've helped prevent thousands of batteries from ending up in landfills, reducing electronic waste and our environmental footprint.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}