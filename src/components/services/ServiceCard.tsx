import type { ReactNode } from "react";

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

export default function ServiceCard({ icon, title, subtitle }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white p-6 space-y-3 text-center">
      <span className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary">
        <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          {icon}
        </svg>
      </span>
      <div className="space-y-1">
        <h3 className="font-semibold text-secondary text-sm">{title}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
