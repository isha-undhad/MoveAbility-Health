import TestimonialCard, { type TestimonialCardProps } from "./TestimonialCard";

const testimonials: TestimonialCardProps[] = [
  {
    name: "Sarah M.",
    role: "Post-Surgery Patient",
    quote:
      "The team at MoveAbility Health helped me recover from my knee surgery faster than I expected. Truly personalised care.",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Spinal Care Client",
    quote:
      "Professional, friendly, and genuinely invested in my progress. I finally feel like I'm getting my life back.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "NDIS Participant",
    quote:
      "As an NDIS participant, I've found their support and treatment plans to be exactly what I needed to build confidence again.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 pt-5 md:pt-8 lg:pt-12 pb-5 md:pb-8 lg:pb-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14 space-y-2 md:space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">What Our Clients Say</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Real stories of restored mobility, surgical recovery, and newfound
            confidence from our community in Tarneit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 items-stretch">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>

        <p className="text-center text-[11px] md:text-xs font-semibold tracking-wide text-gray-500 uppercase mt-8 md:mt-10 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
          Rated 4.9 / 5.0 from independent verified clinic appointments
        </p>
      </div>
    </section>
  );
}
