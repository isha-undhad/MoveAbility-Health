export interface TrustBadgeItemProps {
  label: string;
  subtitle: string;
}

export default function TrustBadgeItem({ label, subtitle }: TrustBadgeItemProps) {
  return (
    <div className="text-center">
      <p className="text-primary font-bold tracking-wide text-xs sm:text-sm md:text-base">{label}</p>
      <p className="text-[9px] sm:text-[11px] md:text-xs font-semibold tracking-widest text-gray-500 uppercase mt-1">
        {subtitle}
      </p>
    </div>
  );
}
