import FeatureBullets, { type Feature } from "./FeatureBullets";

const features: Feature[] = [
  {
    title: "Personalised Care",
    description: "Tailored individual treatment for your unique goals.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM4 20a8 8 0 0116 0" />
    ),
  },
  {
    title: "Experienced Physios",
    description: "Evidence-based, hands-on clinical techniques you trust.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "Better Everyday",
    description: "Long-term functional mobility to live life unhindered.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
];

export default function HeroContent() {
  return (
    <div className="space-y-4 md:space-y-6">
      <span className="inline-flex items-center rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold tracking-wide px-3 py-1 md:px-4 md:py-1.5">
        NDIS Registered &amp; Private Physiotherapy
      </span>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight">
        Expert Physiotherapy
        <br />
        For <span className="text-primary italic">Every Body</span>
      </h1>
      <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-xl">
        MoveAbility Health delivers personalised physiotherapy, rehabilitation,
        and NDIS care in Tarneit. Tailored to help you move with freedom,
        recover safely, and live better every day.
      </p>

      <FeatureBullets features={features} />
    </div>
  );
}
