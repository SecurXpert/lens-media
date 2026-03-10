import HeroSection from "@/components/about/HeroSection";
import ValuesSection from "@/components/about/ValuesSection";
import AboutAgencySection from "@/components/about/AboutAgencySection";
import HowWeWorkSection from "@/components/about/HowWeWorkSection";
import WhyChooseUsSection from "@/components/about/WhyChooseUsSection";

export default function About() {
  return (
    <>
      <section className="bg-black overflow-x-hidden">
        <HeroSection />
        <ValuesSection />
        <AboutAgencySection />
        <HowWeWorkSection />
        <WhyChooseUsSection />
      </section>
    </>
  );
}
