import Seo from "../components/layout/Seo.jsx";
import Hero from "../components/sections/Hero.jsx";
import TrustedBy from "../components/sections/TrustedBy.jsx";
import Services from "../components/sections/Services.jsx";
import About from "../components/sections/About.jsx";
import Industries from "../components/sections/Industries.jsx";
import HowItWorks from "../components/sections/HowItWorks.jsx";
import EnvironmentalImpact from "../components/sections/EnvironmentalImpact.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Faq from "../components/sections/Faq.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

export default function Home() {
  return (
    <>
      <Seo
        title="Transforming Waste Oil Into Sustainable Value"
        description="OilCycle collects, tracks, and recycles waste oil for restaurants, hotels, and factories — with real-time tracking and compliance reporting."
        path="/"
      />
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Industries />
      <HowItWorks />
      <EnvironmentalImpact />
      <Testimonials />
      <Faq />
      <ContactSection />
    </>
  );
}
