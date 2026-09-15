import Image from "next/image";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <TopBar />

      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center">
          <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="MoveAbility Health home">
            <Image
              src="/images/logo.png"
              alt="MoveAbility Health logo"
              width={1400}
              height={1009}
              className="h-10 w-10 md:h-12 md:w-12 object-contain shrink-0"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-bold">
                <span className="text-secondary">MoveAbility</span>{" "}
                <span className="text-primary">Health</span>
              </span>
              <span className="text-[10px] tracking-wide text-primary font-medium">
                MOVE • RECOVER • LIVE BETTER
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
