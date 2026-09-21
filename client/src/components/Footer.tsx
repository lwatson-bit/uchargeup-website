import { motion } from "framer-motion";
import { Link } from "wouter";
import mbeLogo from "@assets/mbe_1752170626183.webp";
import nvidiaInceptionBadge from "@assets/nvidia-inception-program-badge.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Credentials: MBE Certification + NVIDIA Inception membership */}
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-6">
            <div className="flex items-center gap-3">
              <img 
                src={mbeLogo} 
                alt="MBE Certified - Minority Business Enterprise" 
                className="w-12 h-12 object-contain bg-white rounded p-1"
                onError={(e) => {
                  console.log('MBE logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="text-left">
                <div className="text-sm font-semibold text-white">MBE Certified</div>
                <div className="text-xs text-gray-400">Minority Business Enterprise</div>
              </div>
            </div>
            <a
              href="https://www.nvidia.com/en-us/startups/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
              aria-label="NVIDIA Inception Program member"
            >
              <img
                src={nvidiaInceptionBadge}
                alt="NVIDIA Inception Program"
                className="h-12 w-auto object-contain bg-white rounded px-2 py-1"
              />
              <div className="text-left">
                <div className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors duration-200">NVIDIA Inception</div>
                <div className="text-xs text-gray-400">Program Member</div>
              </div>
            </a>
          </div>
          
          <p className="text-gray-400">
            &copy; 2026 U Charge Up®. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="/privacy-policy">
              <span className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-200 cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-of-service">
              <span className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-200 cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            U Charge Up® is a registered trademark.
          </p>
        </div>
      </div>
    </footer>
  );
}
