import HeroSection from "./HeroSection";
import ContactCards from "./ContactCards";
import ContactHeader from "./ContactHeader";
import ContactForm from "./ContactForm";
import ServiceSection from "./ServiceSection";
import StatsSection from "./StatsSection";

export default function ContactPage() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <ContactCards />
      <ContactHeader />
      <ContactForm />
      <ServiceSection />
      <StatsSection />
    </div>
  );
}
