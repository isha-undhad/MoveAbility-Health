export interface MapEmbedProps {
  mapSrc: string;
  mapTitle: string;
  clinicName: string;
  address: string;
  landmark: string;
  directionsUrl: string;
  parkingNote: string;
}

export default function MapEmbed({
  mapSrc,
  mapTitle,
  clinicName,
  address,
  landmark,
  directionsUrl,
  parkingNote,
}: MapEmbedProps) {
  return (
    <div className="h-full flex flex-col space-y-4 md:space-y-6">
      <div className="space-y-2 md:space-y-3">
        <p className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">05 / Tarneit Clinic</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Visit Us</h2>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          Conveniently positioned in Tarneit with quick access from Truganina,
          Hopper&rsquo;s Crossing, and Werribee. Easy pram and wheelchair accessibility.
        </p>
      </div>

      <div className="relative flex-1 min-h-[240px] md:min-h-[280px] rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-100">
        <iframe
          title={mapTitle}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        />
        <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 sm:right-auto sm:w-72 rounded-xl bg-white shadow-lg p-3 md:p-4 space-y-1.5 md:space-y-2">
          <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-primary uppercase">{clinicName}</p>
          <p className="font-semibold text-secondary text-sm md:text-base">{address}</p>
          <p className="text-[11px] md:text-xs text-gray-500">{landmark}</p>
          <div className="flex items-center justify-between gap-3 pt-1">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary text-white text-[11px] md:text-xs font-semibold px-3 py-1.5 md:px-4 md:py-2 shadow-sm hover:bg-gradient-to-r hover:from-primary hover:to-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
            >
              Get Directions
            </a>
            <span className="text-[11px] md:text-xs text-gray-500">{parkingNote}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
