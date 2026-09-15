export interface StatCardProps {
  value: string;
  label: string;
  badgeOne: string;
  badgeTwo: string;
}

export default function StatCard({ value, label, badgeOne, badgeTwo }: StatCardProps) {
  return (
    <div className="rounded-xl bg-white shadow-lg p-5 flex items-start gap-3 max-w-[260px]">
      <span className="flex items-center justify-center w-8 h-8 shrink-0 rounded-full bg-primary/10 text-primary">
        <svg aria-hidden="true" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <div>
        <p className="text-2xl font-bold text-secondary leading-none">{value}</p>
        <p className="text-[10px] font-semibold tracking-wide text-gray-500 uppercase mt-1.5">{label}</p>
        <p className="text-xs mt-2 space-x-1.5">
          <span className="text-primary font-medium">{badgeOne}</span>
          <span className="text-gray-300">•</span>
          <span className="text-secondary font-medium">{badgeTwo}</span>
        </p>
      </div>
    </div>
  );
}
