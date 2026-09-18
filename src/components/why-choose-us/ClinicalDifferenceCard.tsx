import type { ReactNode } from "react";

export interface ClinicalDifferenceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
}

export default function ClinicalDifferenceCard({ title, description, icon, index }: ClinicalDifferenceCardProps) {
  return (
    <li className="relative flex gap-4 md:gap-5">
      <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-md shadow-primary/20">
        <svg aria-hidden="true" className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div className="pt-1 md:pt-1.5 pb-1">
        <span className="text-[11px] font-bold text-primary/60 tracking-widest">
          0{index}
        </span>
        <p className="font-bold text-secondary text-base md:text-lg leading-snug mt-0.5">{title}</p>
        <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed mt-1 max-w-md">{description}</p>
      </div>
    </li>
  );
}
