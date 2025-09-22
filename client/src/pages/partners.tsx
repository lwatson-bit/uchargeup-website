import { motion } from "framer-motion";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Partners />
      </motion.main>
      <Footer />
    </div>
  );
}