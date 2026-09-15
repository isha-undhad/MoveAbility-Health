import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import TrustBadgeStrip from "@/components/trust-badges/TrustBadgeStrip";
import Services from "@/components/services/Services";
import NdisSection from "@/components/ndis/NdisSection";
import WhyChooseUsSection from "@/components/why-choose-us/WhyChooseUsSection";
import Testimonials from "@/components/testimonials/Testimonials";
import Gallery from "@/components/gallery/Gallery";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <TrustBadgeStrip />
      <Services />
      <NdisSection />
      <WhyChooseUsSection />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
