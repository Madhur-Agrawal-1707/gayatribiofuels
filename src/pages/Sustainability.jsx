import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import EnvironmentalImpact from "../components/sections/EnvironmentalImpact.jsx";
import About from "../components/sections/About.jsx";

export default function SustainabilityPage() {
  return (
    <>
      <Seo
        title="Sustainability"
        description="See the measurable environmental impact of OilCycle's waste oil recycling — CO₂ saved, oil recycled, and waste prevented."
        path="/sustainability"
      />
      <PageHero
        eyebrow="Sustainability"
        title="Impact you can measure, not just claim"
        subtitle="Every liter collected feeds directly into a running impact total, verified by our certified recycling partners."
      />
      <EnvironmentalImpact />
      <About />
    </>
  );
}
