import type { ReactNode } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface FeatureBulletsProps {
  features: Feature[];
}

export default function FeatureBullets({ features }: FeatureBulletsProps) {
  return (
    <ul className="grid sm:grid-cols-3 gap-4 md:gap-6 pt-2">
      {features.map((feature) => (
        <li key={feature.title} className="space-y-1.5 md:space-y-2">
          <span className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary/10 text-primary">
            <svg aria-hidden="true" className="w-4 h-4 md:w-4.5 md:h-4.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {feature.icon}
            </svg>
          </span>
          <p className="font-semibold text-secondary text-xs sm:text-sm">{feature.title}</p>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
        </li>
      ))}
    </ul>
  );
}
