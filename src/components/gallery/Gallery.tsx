import GalleryGrid, { type GalleryPhoto } from "./GalleryGrid";

const photos: GalleryPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    alt: "Modern physiotherapy clinic treatment room",
  },
  {
    src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80",
    alt: "Physiotherapist guiding a patient through a stretching exercise",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    alt: "Hands-on treatment of a patient's shoulder",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    alt: "Patient using exercise equipment during rehabilitation",
  },
  {
    src: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&w=800&q=80",
    alt: "Clinic reception and waiting area",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    alt: "Physiotherapist reviewing a treatment plan with a client",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 pt-5 md:pt-8 lg:pt-12 pb-5 md:pb-8 lg:pb-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-2 md:space-y-3 mb-8 md:mb-14">
          <p className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">
            04 / Our Environment
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">Clinic &amp; Treatment Gallery</h2>
        </div>

        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}
