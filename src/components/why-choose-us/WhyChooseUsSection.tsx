import Image from "next/image";
import ClinicalDifferenceCard, { type ClinicalDifferenceCardProps } from "./ClinicalDifferenceCard";

const differences: Omit<ClinicalDifferenceCardProps, "index">[] = [
  {
    title: "Evidence-Based Treatment",
    description: "Therapies grounded in peer-reviewed orthopedic and neurological science for verifiable, safe outcomes.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.5" fill="currentColor" />
      </>
    ),
  },
  {
    title: "Individualised Care Plans",
    description: "Zero one-size-fits-all routines. Every recovery roadmap is uniquely engineered for your body mechanics.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0" />
    ),
  },
  {
    title: "NDIS Registered Provider",
    description: "Full compliance with quality and safeguarding benchmarks, with direct agency claim handling.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8.25-7 9.5-4-1.25-7-5-7-9.5V6l7-3zM9.5 12l1.75 1.75L14.75 10" />
    ),
  },
  {
    title: "Modern Clinic & Home Visits",
    description: "Flexibility to receive expert care in our premium Tarneit facility or directly at your residence.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-7 9 7M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9" />
    ),
  },
  {
    title: "Friendly, Professional Team",
    description: "Compassionate clinicians who listen attentively, communicate clearly, and genuinely care about your life.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1m17 0v-1a4 4 0 00-3-3.87M14 3.13a4 4 0 010 7.75M10 11a4 4 0 100-8 4 4 0 000 8z" />
    ),
  },
  {
    title: "Focus on Long-Term Results",
    description: "Sustainable resilience strategies and lifestyle ergonomics that prevent recurring flare-ups and re-injury.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
          <div className="flex flex-col space-y-4 md:space-y-6 md:sticky md:top-28">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
              Why Choose MoveAbility?
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We don&rsquo;t rely on generic exercise printouts or rushed consultations.
              Our experienced physiotherapists combine advanced clinical diagnosis with
              empathetic, 1-on-1 human connection.
            </p>

            <div className="relative hidden md:block flex-1 min-h-[280px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
                alt="Physiotherapist reviewing a treatment plan with a client"
                fill
                sizes="(max-width: 1024px) 45vw, 500px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
                Your movement, our priority
              </p>
            </div>
          </div>

          <ul className="relative space-y-7 md:space-y-9">
            <div
              aria-hidden="true"
              className="absolute left-6 md:left-7 top-6 md:top-7 bottom-6 md:bottom-7 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent"
            />
            {differences.map((item, i) => (
              <ClinicalDifferenceCard key={item.title} {...item} index={i + 1} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
