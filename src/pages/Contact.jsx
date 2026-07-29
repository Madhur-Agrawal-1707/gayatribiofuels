import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";
import Faq from "../components/sections/Faq.jsx";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with OilCycle to schedule your first waste oil pickup or ask about our recycling program."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="We'll help you get started"
        subtitle="Reach out for a demo, a quote, or just to ask how the process works for your business."
      />
      <ContactSection />
      <Faq />
    </>
  );
}
