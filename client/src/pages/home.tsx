import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import KioskSolutions from "@/components/KioskSolutions";
import Partners from "@/components/Partners";
import Events from "@/components/Events";
import Advertising from "@/components/Advertising";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
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
        <Partners />
        <About />
        <CallToAction />
      </motion.main>
      <Footer />
    </div>
  );
}
