import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/kit/Section";
import { SectionHeader } from "@/components/kit/SectionHeader";
import { FadeUp } from "@/components/kit/FadeUp";
import { openChat } from "@/components/chat/api";
import autoShowPhoto from "@assets/web/auto-show-kiosk.webp";
import mbeBadge from "@assets/web/badge-mbe.webp";
import nvidiaBadge from "@assets/web/badge-nvidia-inception.webp";

export default function BuiltInDetroit() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <FadeUp className="lg:col-span-5">
          <img
            src={autoShowPhoto}
            alt="U Charge Up kiosk on the floor of the Detroit Auto Show"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full max-h-[360px] rounded-2xl object-cover ring-1 ring-black/5 lg:max-h-none"
          />
          <p className="mt-3 text-sm text-slate-500">U Charge Up kiosk at the Detroit Auto Show</p>
        </FadeUp>

        <FadeUp className="lg:col-span-7" delay={0.05}>
          <SectionHeader
            eyebrow="About us"
            title="Built in Detroit. Powering the places people gather."
          />
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-slate-600">
            U Charge Up started with a simple idea: nobody should have to leave early, miss the
            photo or lose the directions because their phone died. Our kiosks put a charged battery
            within reach in the places Detroit gathers, and one shared battery serves many people
            instead of ending up in a drawer.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <li className="flex items-center gap-3">
              <img src={mbeBadge} alt="" loading="lazy" className="h-12 w-12 object-contain" />
              <span className="text-sm leading-tight text-slate-700">
                <span className="block font-semibold text-ink">MBE certified</span>
                Minority Business Enterprise
              </span>
            </li>
            <li>
              <a
                href="https://www.nvidia.com/en-us/startups/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <img src={nvidiaBadge} alt="" loading="lazy" className="h-10 w-auto object-contain" />
                <span className="text-sm leading-tight text-slate-700">
                  <span className="block font-semibold text-ink group-hover:text-brand-600">NVIDIA Inception</span>
                  Program member
                </span>
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-slate-700">
              <MapPin className="h-4 w-4 text-brand-500" aria-hidden="true" />
              Detroit, MI · Cartagena, Colombia
            </li>
          </ul>

          <div className="mt-8">
            <Button variant="ghost" className="-ml-4" onClick={() => openChat("support")}>
              Questions? Chat with Juice
              <ArrowRight />
            </Button>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
