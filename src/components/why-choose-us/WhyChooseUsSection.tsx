import ClinicalDifferenceCard, { type ClinicalDifferenceCardProps } from "./ClinicalDifferenceCard";
import ClinicHighlightCard from "./ClinicHighlightCard";

const differences: ClinicalDifferenceCardProps[] = [
  {
    title: "Evidence-Based Treatment",
    description: "Therapies grounded in peer-reviewed orthopedic and neurological science for verifiable, safe outcomes.",
  },
  {
    title: "Individualised Care Plans",
    description: "Zero one-size-fits-all routines. Every recovery roadmap is uniquely engineered for your body mechanics.",
  },
  {
    title: "NDIS Registered Provider",
    description: "Full compliance with quality and safeguarding benchmarks, with direct agency claim handling.",
  },
  {
    title: "Modern Clinic & Home Visits",
    description: "Flexibility to receive expert care in our premium Tarneit facility or directly at your residence.",
  },
  {
    title: "Friendly, Professional Team",
    description: "Compassionate clinicians who listen attentively, communicate clearly, and genuinely care about your life.",
  },
  {
    title: "Focus on Long-Term Results",
    description: "Sustainable resilience strategies and lifestyle ergonomics that prevent recurring flare-ups and re-injury.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 pt-10 md:pt-16 lg:pt-24 pb-5 md:pb-8 lg:pb-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <p className="text-sm font-bold tracking-widest text-primary uppercase">
              02 / The Clinical Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary leading-tight">
              Why Choose MoveAbility?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We don&rsquo;t rely on generic exercise printouts or rushed consultations.
              Our experienced physiotherapists combine advanced clinical diagnosis with
              empathetic, 1-on-1 human connection.
            </p>

            <ClinicHighlightCard
              title="Modern Tarneit Clinic"
              description="Purpose-built rehabilitation space with free on-site parking."
              suburbs={["Hoppers Crossing", "Werribee", "Truganina"]}
              linkLabel="Nearby Western Suburbs"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {differences.map((item) => (
              <ClinicalDifferenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
