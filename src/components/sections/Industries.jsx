import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { industries } from "../../data/industries.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import TiltCard from "../ui/TiltCard.jsx";
import IconBlob from "../illustrations/IconBlob.jsx";

export default function Industries() {
  const [ref, controls] = useRevealOnScroll({ threshold: 0.05 });

  return (
    <section id="industries" className="section-y bg-mist-50">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who we serve"
          title="Purpose-built for every kind of kitchen and plant"
          subtitle="Whatever your volume or schedule, OilCycle adapts collection around how your business actually operates."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.08)}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry, i) => (
            <motion.div key={industry.title} variants={fadeUp}>
              <TiltCard glow={false} className="h-full">
                <IconBlob icon={industry.icon} tone={i % 3 === 0 ? "gold" : "emerald"} />
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{industry.title}</h3>
                <p className="mt-2 text-sm text-ink-700/70">{industry.description}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
