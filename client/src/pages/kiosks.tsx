import { motion } from "framer-motion";
import Header from "@/components/Header";
import KioskSolutions from "@/components/KioskSolutions";
import Footer from "@/components/Footer";

export default function KiosksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <KioskSolutions />
      </motion.main>
      <Footer />
    </div>
  );
}