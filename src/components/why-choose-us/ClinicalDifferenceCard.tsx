export interface ClinicalDifferenceCardProps {
  title: string;
  description: string;
}

export default function ClinicalDifferenceCard({ title, description }: ClinicalDifferenceCardProps) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-5 space-y-2">
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
        <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <p className="font-semibold text-secondary">{title}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
