export interface NdisFeatureCardProps {
  title: string;
  description: string;
}

export default function NdisFeatureCard({ title, description }: NdisFeatureCardProps) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-5 space-y-2">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
        <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-sm text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}
