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
        <span className="absolute top-4 left-4 rounded-full bg-primary text-white text-[11px] font-semibold tracking-wide px-3.5 py-1.5 shadow-md">
          {badge}
        </span>
      </div>
      <div className="rounded-xl bg-white shadow-md -mt-8 mx-4 relative p-5">
        <p className="font-semibold text-secondary leading-snug">{caption}</p>
        <p className="text-sm text-gray-500 mt-1">{subCaption}</p>
      </div>
    </div>
  );
}
