import { motion } from "framer-motion";
import { Link } from "wouter";
import { Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import mbeLogo from "@assets/mbe_1752170626183.webp";
import nvidiaInceptionBadge from "@assets/nvidia-inception-program-badge.png";

const FOOTER_LINKS = [
  {
    title: "Rent",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Our Kiosks", href: "/kiosks" },
      { label: "Locations", href: "/locations" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "For Venues", href: "/for-venues" },
      { label: "Events", href: "/events" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr] text-left pb-8 mb-8 sm:pb-10 sm:mb-10 border-b border-white/15">
          <div className="col-span-2 lg:col-span-1">
            <div className="text-lg font-bold text-white">U Charge Up®</div>
            <p className="mt-3 text-sm leading-relaxed text-gray-300 max-w-xs">
              Portable battery rental for stadiums, hospitals, hotels,
              restaurants and events.
            </p>
            <a
              href="mailto:support@uchargeup.com"
              className="mt-3 inline-block text-sm text-gray-200 underline hover:text-white transition-colors duration-200"
            >
              support@uchargeup.com
            </a>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://instagram.com/uchargeup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="U Charge Up on Instagram"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/uchargeup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="U Charge Up on X"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <FaXTwitter className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          {FOOTER_LINKS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <div className="text-xs font-bold tracking-widest uppercase text-gray-400">
                {group.title}
              </div>
              <ul className="mt-3 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-sm text-gray-200 hover:text-white transition-colors duration-200 cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

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
          <p className="text-xs text-gray-500 mt-2">
            U Charge Up® is a registered trademark.
          </p>
        </div>
      </div>
    </footer>
  );
}
