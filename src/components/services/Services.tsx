import ServiceCard, { type ServiceCardProps } from "./ServiceCard";

const services: ServiceCardProps[] = [
  {
    title: "Physiotherapy",
    subtitle: "Move Better",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Sports Injury Rehabilitation",
    subtitle: "Get Stronger",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    title: "Post-Surgery Rehabilitation",
    subtitle: "Regain Independence",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: "Back & Neck Pain",
    subtitle: "Feel Relief",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zM4 20a8 8 0 0116 0" />
    ),
  },
  {
    title: "Wellbeing & Prevention",
    subtitle: "Live Healthier",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-8.318a4.5 4.5 0 010-6.364z" />
    ),
  },
  {
    title: "Personalised Care",
    subtitle: "For A Brighter Tomorrow",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 pt-10 md:pt-14 lg:pt-16 pb-5 md:pb-8 lg:pb-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Our Services</h2>
          <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-600 leading-relaxed">
            Comprehensive physiotherapy services to support your health and wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
