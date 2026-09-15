import MapEmbed from "./MapEmbed";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pt-5 md:pt-8 lg:pt-12 pb-10 md:pb-16 lg:pb-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <MapEmbed
            mapSrc="https://www.google.com/maps?q=Tarneit,+Victoria+3029,+Australia&output=embed"
            mapTitle="Map showing MoveAbility Health location in Tarneit, Victoria"
            clinicName="MoveAbility Health Tarneit"
            address="Tarneit, Victoria 3029"
            landmark="Near Tarneit Central & Riverdale Village"
            directionsUrl="https://www.google.com/maps/search/?api=1&query=Tarneit+Victoria+3029+Australia"
            parkingNote="Free Parking On-Site"
          />
          <ContactForm heading="Send Us An Enquiry" />
        </div>
      </div>
    </section>
  );
}
