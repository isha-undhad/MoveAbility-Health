import Image from "next/image";

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface GalleryGridProps {
  photos: GalleryPhoto[];
}

export default function GalleryGrid({ photos }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
