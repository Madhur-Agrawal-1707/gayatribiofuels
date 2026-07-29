import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { processSteps } from "../../data/content.js";
import SectionHeading from "../ui/SectionHeading.jsx";
import Icon from "../ui/Icon.jsx";

export default function HowItWorks() {
  const [ref, controls] = useRevealOnScroll({ threshold: 0.05 });

  return (
    <section id="how-it-works" className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The process"
          title="From pickup request to impact report"
          subtitle="A straightforward six-stage cycle that repeats every time — the same reliable process behind every collection."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.12)}
          className="relative mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-6"
        >
          {/* connecting line, desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent lg:block" />

          {processSteps.map((step, i) => (
            <motion.div key={step.title} variants={fadeUp} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-ink-900/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-grad-emerald text-white">
                  <Icon name={step.icon} size={20} />
                </span>
              </div>
              <span className="mt-4 font-mono text-xs text-emerald-600">Step {i + 1}</span>
              <h3 className="mt-1 font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-1 text-sm text-ink-700/70">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
