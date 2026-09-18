export default function TopBar() {
  return (
    <div className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-1.5 md:py-2 flex items-center justify-between gap-4 text-[10px] sm:text-xs">
        <span className="flex items-center gap-1.5 md:gap-2 shrink-0">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span className="text-white/90">
            Clinic Open Today <span className="text-primary">•</span> 8:00 AM – 6:00 PM
          </span>
        </span>

        <span className="hidden md:flex items-center gap-1.5 text-white/70">
          <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Tarneit, Victoria 3029, Australia
        </span>

        <span className="flex items-center gap-4 shrink-0">
          <a
            href="tel:0478582414"
            className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-primary transition-colors"
          >
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.932.966a11.042 11.042 0 005.516 5.516l.966-1.932a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0478 582 414
          </a>
          <a
            href="mailto:moveabilityhealth@gmail.com"
            className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-primary transition-colors"
          >
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            moveabilityhealth@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
