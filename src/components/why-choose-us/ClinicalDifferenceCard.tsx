export interface ClinicalDifferenceCardProps {
  title: string;
  description: string;
}

export default function ClinicalDifferenceCard({ title, description }: ClinicalDifferenceCardProps) {
  return (
    <div className="h-full rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 md:p-5 space-y-1.5 md:space-y-2">
      <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 text-primary">
        <svg aria-hidden="true" className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <p className="font-semibold text-secondary text-sm md:text-base leading-snug">{title}</p>
      <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
