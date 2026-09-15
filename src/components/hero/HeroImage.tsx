import Image from "next/image";
import StatCard from "./StatCard";

export interface HeroImageProps {
  src: string;
  alt: string;
  caption: string;
  badge: string;
}

export default function HeroImage({ src, alt, caption, badge }: HeroImageProps) {
  return (
    <div className="relative lg:ml-6 xl:ml-10 pb-10 pr-4">
      <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 90vw, 500px"
          className="object-cover"
          priority
        />

        {/* dark badge overlay */}
        <span className="absolute top-4 right-4 rounded-full bg-secondary/90 text-white text-[11px] font-semibold tracking-wide px-3.5 py-1.5 shadow-md">
          {badge}
        </span>

        {/* script caption, partially bleeding off the edge */}
        <p
          className="absolute bottom-6 right-0 translate-x-1/4 text-2xl sm:text-3xl text-white/90 rotate-[-4deg] whitespace-nowrap"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          {caption}
        </p>
      </div>

      {/* floating stat card */}
      <div className="absolute left-0 bottom-0 sm:-left-4">
        <StatCard value="98.4%" label="Patient Recovery Goal Rate" badgeOne="NDIS Registered" badgeTwo="Tarneit Clinic" />
      </div>
    </div>
  );
}
