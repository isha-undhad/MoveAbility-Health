export interface ClinicHighlightCardProps {
  title: string;
  description: string;
  suburbs: string[];
  linkLabel: string;
}

export default function ClinicHighlightCard({ title, description, suburbs, linkLabel }: ClinicHighlightCardProps) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 space-y-3">
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-primary/10 text-primary">
          <svg aria-hidden="true" className="w-4.5 h-4.5 fill-current" viewBox="0 0 20 20">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85z" />
          </svg>
        </span>
        <div>
          <p className="font-semibold text-secondary">{title}</p>
          <p className="text-sm text-gray-500 leading-relaxed mt-0.5">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100 text-xs">
        <span className="text-gray-500">{suburbs.join(" • ")}</span>
        <a href="#contact" className="text-primary font-medium hover:underline shrink-0">
          {linkLabel}
        </a>
      </div>
    </div>
  );
}
