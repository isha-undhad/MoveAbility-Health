import type { ReactNode } from "react";

export interface FooterColumnProps {
  title: string;
  children: ReactNode;
}

export default function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="space-y-3 md:space-y-4">
      <h3 className="font-semibold text-white text-sm md:text-base">{title}</h3>
      {children}
    </div>
  );
}
