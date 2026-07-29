import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import Industries from "../components/sections/Industries.jsx";
import TrustedBy from "../components/sections/TrustedBy.jsx";

export default function IndustriesPage() {
  return (
    <>
      <Seo
        title="Industries"
        description="OilCycle serves restaurants, hotels, factories, airports, hospitals, and food manufacturers."
        path="/industries"
      />
      <PageHero
        eyebrow="Industries we serve"
        title="Collection built around your operation"
        subtitle="From single-site restaurants to multi-terminal airports, we adapt pickup schedules and reporting to fit."
      />
      <Industries />
      <TrustedBy />
    </>
  );
}
