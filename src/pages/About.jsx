import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import About from "../components/sections/About.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about OilCycle's mission, vision, and the milestones behind our waste oil recycling platform."
        path="/about"
      />
      <PageHero
        eyebrow="About OilCycle"
        title="Making sustainable disposal the easy choice"
        subtitle="We started with three trucks in Austin. Today we help hundreds of businesses turn waste oil into clean, reusable biofuel."
      />
      <About />
      <Testimonials />
    </>
  );
}
