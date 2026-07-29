import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Technology from "../components/sections/Technology.jsx";
import HowItWorks from "../components/sections/HowItWorks.jsx";

export default function TechnologyPage() {
  return (
    <>
      <Seo
        title="Technology"
        description="GPS tracking, smart scheduling, digital reports, analytics, compliance, and QR verification — the OilCycle platform explained."
        path="/technology"
      />
      <PageHero
        eyebrow="Platform"
        title="The technology behind every pickup"
        subtitle="A live system connecting your sites, our fleet, and the recycling facilities that turn oil into biofuel."
      />
      <Technology />
      <HowItWorks />
    </>
  );
}
