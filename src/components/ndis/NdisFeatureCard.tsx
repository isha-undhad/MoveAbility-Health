export interface NdisFeatureCardProps {
  title: string;
  description: string;
}

export default function NdisFeatureCard({ title, description }: NdisFeatureCardProps) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4 md:p-5 space-y-1.5 md:space-y-2">
      <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/20 text-primary">
        <svg aria-hidden="true" className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <p className="font-semibold text-white text-sm md:text-base">{title}</p>
      <p className="text-xs md:text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
