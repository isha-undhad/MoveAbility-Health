import ContactInfoCard from "./ContactInfoCard";

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
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-bold tracking-widest text-primary uppercase">05 / Tarneit Clinic</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary">Visit Us</h2>
        <p className="text-gray-600 leading-relaxed">
          Conveniently positioned in Tarneit with quick access from Truganina,
          Hopper&rsquo;s Crossing, and Werribee. Easy pram and wheelchair accessibility.
        </p>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-video bg-gray-100">
        <iframe
          title={mapTitle}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={mapSrc}
        />
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-72 rounded-xl bg-white shadow-lg p-4 space-y-2">
          <p className="text-[11px] font-bold tracking-widest text-primary uppercase">{clinicName}</p>
          <p className="font-semibold text-secondary">{address}</p>
          <p className="text-xs text-gray-500">{landmark}</p>
          <div className="flex items-center justify-between gap-3 pt-1">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary text-white text-xs font-semibold px-4 py-2 shadow-sm hover:bg-gradient-to-r hover:from-primary hover:to-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-colors"
            >
              Get Directions
            </a>
            <span className="text-xs text-gray-500">{parkingNote}</span>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <ContactInfoCard title="Direct Contact">
          <p>
            Phone:{" "}
            <a href="tel:0476582414" className="text-primary font-medium hover:underline">
              0476 582 414
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@moveabilityhealth.com.au" className="text-primary font-medium hover:underline">
              info@moveabilityhealth.com.au
            </a>
          </p>
        </ContactInfoCard>
        <ContactInfoCard title="Tarneit Clinic Hours">
          <p className="flex justify-between gap-4">
            <span>Mon &ndash; Fri</span>
            <span>8:00am &ndash; 6:00pm</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Saturday</span>
            <span>9:00am &ndash; 1:00pm</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Sunday</span>
            <span>Closed</span>
          </p>
        </ContactInfoCard>
      </div>
    </div>
  );
}
