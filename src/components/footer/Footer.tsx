import Image from "next/image";
import FooterColumn from "./FooterColumn";
import FooterBottom, { type FooterLink } from "./FooterBottom";

const bottomLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "NDIS Participant Rights", href: "#" },
];

export default function Footer() {
  return (
    <footer className="pt-10 md:pt-16 pb-8 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid sm:grid-cols-3 gap-8 md:gap-10">
          {/* Logo + tagline */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-full bg-white p-1.5 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="MoveAbility Health logo"
                  width={1400}
                  height={1009}
                  className="h-9 w-9 md:h-12 md:w-12 object-contain"
                />
              </span>
              <span className="flex flex-col justify-center">
                <span className="flex flex-col items-center">
                  <span className="text-lg md:text-2xl font-bold leading-none whitespace-nowrap">
                    <span className="text-white">Move</span>
                    <span className="text-primary">Ability</span>
                  </span>
                  <span className="mt-1 text-[9px] sm:text-xs font-semibold leading-none tracking-wide text-white/80 whitespace-nowrap">
                    — HEALTH —
                  </span>
                </span>
                <span className="mt-1 text-[9px] md:text-[10px] leading-tight font-semibold tracking-widest text-white/60">
                  MOVE • RECOVER • LIVE BETTER
                </span>
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/70 leading-relaxed">
              Tarneit&rsquo;s premier physiotherapy, rehabilitation, and NDIS
              capacity-building clinic. Evidence-based care delivered by
              accredited clinicians who value your lasting well-being.
            </p>
            <p className="text-xs md:text-sm text-primary font-medium">
              NDIS Provider Registered • AHPRA Certified
            </p>
          </div>

          <FooterColumn title="Contact Us">
            <ul className="space-y-2 text-xs md:text-sm text-white/70 leading-relaxed">
              <li>
                Phone:{" "}
                <a href="tel:0478582414" className="hover:text-primary transition-colors">
                  0478 582 414
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:moveabilityhealth@gmail.com" className="hover:text-primary transition-colors">
                  moveabilityhealth@gmail.com
                </a>
              </li>
              <li>Clinic: Tarneit, Victoria 3029, Australia</li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Business Hours">
            <ul className="space-y-2 text-xs md:text-sm text-white/70 leading-relaxed">
              <li className="flex justify-between gap-4">
                <span>Monday &ndash; Friday</span>
                <span>8:00am &ndash; 6:00pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Saturday</span>
                <span>9:00am &ndash; 1:00pm</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <FooterBottom
          copyrightText="© 2025 MoveAbility Health. All rights reserved. Tarneit, VIC."
          links={bottomLinks}
        />
      </div>
    </footer>
  );
}
