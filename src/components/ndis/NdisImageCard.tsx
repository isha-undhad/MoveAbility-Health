import Image from "next/image";

export interface NdisImageCardProps {
  src: string;
  alt: string;
  badge: string;
  caption: string;
  subCaption: string;
}

export default function NdisImageCard({ src, alt, badge, caption, subCaption }: NdisImageCardProps) {
  return (
    <div>
      <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 90vw, 500px" className="object-cover" />
        <span className="absolute top-3 left-3 md:top-4 md:left-4 rounded-full bg-primary text-white text-[10px] md:text-[11px] font-semibold tracking-wide px-2.5 py-1 md:px-3.5 md:py-1.5 shadow-md">
          {badge}
        </span>
      </div>
      <div className="rounded-xl bg-white shadow-md -mt-6 md:-mt-8 mx-3 md:mx-4 relative p-4 md:p-5">
        <p className="font-semibold text-secondary leading-snug text-sm md:text-base">{caption}</p>
        <p className="text-xs md:text-sm text-gray-500 mt-1">{subCaption}</p>
      </div>
    </div>
  );
}
