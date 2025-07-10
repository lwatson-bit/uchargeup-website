import { motion } from "framer-motion";
import mbeLogo from "@assets/mbe_1752170626183.webp";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* MBE Certification in Footer */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <img 
              src={mbeLogo} 
              alt="MBE Certified - Minority Business Enterprise" 
              className="w-12 h-12 object-contain"
            />
            <div className="text-left">
              <div className="text-sm font-semibold text-white">MBE Certified</div>
              <div className="text-xs text-gray-400">Minority Business Enterprise</div>
            </div>
          </div>
          
          <p className="text-gray-400">
            &copy; 2024 U Charge Up. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
