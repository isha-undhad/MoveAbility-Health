export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterBottomProps {
  copyrightText: string;
  links: FooterLink[];
}

export default function FooterBottom({ copyrightText, links }: FooterBottomProps) {
  return (
    <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-white/60">
      <p>{copyrightText}</p>
      <div className="flex items-center gap-3">
        {links.map((link, index) => (
          <span key={link.label} className="flex items-center gap-3">
            {index > 0 && <span className="text-white/25" aria-hidden="true">|</span>}
            <a href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
