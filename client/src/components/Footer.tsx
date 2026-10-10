import { Link } from "wouter";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { AppBadges } from "@/components/kit/AppBadges";
import { openChat } from "@/components/chat/api";
import logoPath from "@assets/web/logo.png";
import mbeBadge from "@assets/web/badge-mbe.webp";
import nvidiaBadge from "@assets/web/badge-nvidia-inception.webp";

const linkClass = "text-sm text-slate-600 transition-colors hover:text-brand-600";
const titleClass = "text-xs font-semibold uppercase tracking-[0.12em] text-slate-500";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface-1 pb-24 pt-14 md:pb-14 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand column: the color logo sits directly on the light surface. */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="U Charge Up home" className="inline-flex rounded-md">
              <img src={logoPath} alt="U Charge Up" width={794} height={173} className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Portable phone charging from kiosks in the places people gather.
            </p>
            <p className="mt-2 text-sm text-slate-600">Detroit, Michigan · Cartagena, Colombia</p>
            <AppBadges className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <div>
              <p className={titleClass}>Renters</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/how-it-works" className={linkClass}>How it works</Link></li>
                <li><Link href="/locations" className={linkClass}>Find a kiosk</Link></li>
                <li><Link href="/how-it-works#pricing" className={linkClass}>Pricing and FAQ</Link></li>
                <li><Link href="/contact" className={linkClass}>Get help</Link></li>
              </ul>
            </div>
            <div>
              <p className={titleClass}>Venues and events</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/kiosks" className={linkClass}>For venues</Link></li>
                <li><Link href="/events" className={linkClass}>Events</Link></li>
                <li>
                  <button type="button" onClick={() => openChat("partner")} className={linkClass}>
                    Talk to us
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p className={titleClass}>Company</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/contact" className={linkClass}>Contact</Link></li>
                <li><a href="mailto:support@uchargeup.com" className={linkClass}>support@uchargeup.com</a></li>
                <li>
                  <a href="https://instagram.com/uchargeup" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1.5`}>
                    <FaInstagram className="h-4 w-4" aria-hidden="true" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://x.com/uchargeup" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1.5`}>
                    <FaXTwitter className="h-4 w-4" aria-hidden="true" />
                    X
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className={titleClass}>Legal</p>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/terms-of-service" className={linkClass}>Terms of Service</Link></li>
                <li><Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link></li>
                <li><Link href="/es/terms-of-service" className={linkClass}>Terms of Service (Español)</Link></li>
                <li><Link href="/es/privacy-policy" className={linkClass}>Privacy Policy (Español)</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-8">
          <div className="flex items-center gap-3">
            <img src={mbeBadge} alt="" loading="lazy" className="h-12 w-12 object-contain" />
            <span className="text-sm leading-tight text-slate-600">
              <span className="block font-semibold text-ink">MBE certified</span>
              Minority Business Enterprise
            </span>
          </div>
          <a
            href="https://www.nvidia.com/en-us/startups/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3"
            aria-label="NVIDIA Inception Program member"
          >
            <img src={nvidiaBadge} alt="" loading="lazy" className="h-10 w-auto object-contain" />
            <span className="text-sm leading-tight text-slate-600">
              <span className="block font-semibold text-ink group-hover:text-brand-600">NVIDIA Inception</span>
              Program member
            </span>
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-[13px] text-slate-500 sm:flex-row sm:justify-between">
          <p>© 2026 U Charge Up®. All rights reserved. U Charge Up® is a registered trademark.</p>
          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
      </div>
    </footer>
  );
}
