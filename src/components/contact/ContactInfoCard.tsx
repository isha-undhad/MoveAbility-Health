import type { ReactNode } from "react";

export interface ContactInfoCardProps {
  title: string;
  children: ReactNode;
}

export default function ContactInfoCard({ title, children }: ContactInfoCardProps) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-5">
      <p className="text-sm font-semibold text-secondary mb-3">{title}</p>
      <div className="space-y-2 text-sm text-gray-600">{children}</div>
    </div>
  );
}
