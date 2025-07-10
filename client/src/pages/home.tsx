import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import KioskSolutions from "@/components/KioskSolutions";
import Partners from "@/components/Partners";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
        <HowItWorks />
        <KioskSolutions />
        <Partners />
        <Gallery />
        <Stats />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
}
