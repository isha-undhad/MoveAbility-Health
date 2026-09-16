import Image from "next/image";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <TopBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3 md:py-5 flex items-center">
        <a href="#home" className="flex items-center gap-2 md:gap-3 shrink-0" aria-label="MoveAbility Health home">
          <Image
            src="/images/logo.png"
            alt="MoveAbility Health logo"
            width={1400}
            height={1009}
            className="h-8 w-8 md:h-12 md:w-12 object-contain shrink-0"
            priority
          />
          <span className="flex flex-col justify-center">
            <span className="flex flex-col items-center">
              <span className="text-base sm:text-xl md:text-2xl font-bold leading-none whitespace-nowrap">
                <span className="text-secondary">Move</span>
                <span className="text-primary">Ability</span>
              </span>
              <span className="mt-0.5 md:mt-1 text-[8px] sm:text-[10px] md:text-xs font-semibold leading-none tracking-wide text-secondary whitespace-nowrap">
                — HEALTH —
              </span>
            </span>
            <span className="mt-0.5 md:mt-1 text-[7px] sm:text-[10px] leading-tight tracking-wide text-secondary/70 font-medium whitespace-nowrap">
              MOVE • RECOVER • LIVE BETTER
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
