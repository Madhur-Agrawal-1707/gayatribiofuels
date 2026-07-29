import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Services from "../components/sections/Services.jsx";
import HowItWorks from "../components/sections/HowItWorks.jsx";
import Faq from "../components/sections/Faq.jsx";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Waste oil collection, pickup scheduling, real-time tracking, certified recycling, compliance reporting, and environmental analytics."
        path="/services"
      />
      <PageHero
        eyebrow="Our services"
        title="A complete waste oil program, end to end"
        subtitle="Every service is built to remove manual work from your team while keeping you fully compliant."
      />
      <Services />
      <HowItWorks />
      <Faq />
    </>
  );
}
