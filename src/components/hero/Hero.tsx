import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-20 pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-16 lg:pb-20"
    >
      <div id="about" className="scroll-mt-24 max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
        <HeroContent />
        <HeroImage
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
          alt="Physiotherapist assisting a patient with a guided leg stretch"
          caption="Your Movement, Our Priority"
          badge="1-On-1 Consultations"
        />
      </div>
    </section>
  );
}
