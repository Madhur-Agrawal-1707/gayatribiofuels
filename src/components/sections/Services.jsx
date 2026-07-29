import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { services } from "../../data/services.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import TiltCard from "../ui/TiltCard.jsx";
import IconBlob from "../illustrations/IconBlob.jsx";

export default function Services() {
  const [ref, controls] = useRevealOnScroll({ threshold: 0.05 });

  return (
    <section id="services" className="section-y bg-mist-50">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What we do"
          title="Everything you need to recycle waste oil, in one platform"
          subtitle="From the first pickup request to the final compliance certificate, OilCycle handles the entire lifecycle of your waste oil."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.1)}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div key={service.title} variants={fadeUp}>
              <TiltCard className="h-full">
                <IconBlob icon={service.icon} tone={i % 2 === 0 ? "emerald" : "gold"} />
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{service.title}</h3>
                <p className="mt-2 text-sm text-ink-700/70">{service.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
