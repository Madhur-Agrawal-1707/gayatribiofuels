import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { impactStats } from "../../data/content.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import StatCounter from "../ui/StatCounter.jsx";
import Icon from "../ui/Icon.jsx";

export default function EnvironmentalImpact() {
  const [ref, controls] = useRevealOnScroll();

  return (
    <section id="sustainability" className="section-y relative overflow-hidden bg-grad-dusk text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl animate-drift" />

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          dark
          eyebrow="Real impact"
          title="Measurable environmental impact, updated in real time"
          subtitle="Every collection feeds directly into a running total — not an annual estimate."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.1)}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impactStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="glass-dark flex flex-col items-center gap-4 rounded-xl3 p-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                <Icon name={stat.icon} size={22} />
              </span>
              <StatCounter {...stat} dark />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
