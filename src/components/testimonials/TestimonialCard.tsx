export interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <div className="h-full relative rounded-xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 md:p-8 space-y-2.5 md:space-y-3">
      <span className="absolute top-4 right-4 md:top-5 md:right-5 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-bold tracking-wide px-2 py-0.5 md:px-2.5 md:py-1">
        Verified
      </span>
      <div className="flex gap-1 text-primary" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} aria-hidden="true" className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
          </svg>
        ))}
      </div>
      <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-secondary text-sm md:text-base">{name}</p>
        <p className="text-xs md:text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
