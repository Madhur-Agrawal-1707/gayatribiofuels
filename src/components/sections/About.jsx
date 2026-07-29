import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { stats } from "../../data/content.js";
import StatCounter from "../ui/StatCounter.jsx";



export default function About() {
  const [statsRef, statsControls] = useRevealOnScroll();

  return (
    <section id="about" className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="flex flex-col gap-5"
          >
            <span className="eyebrow w-fit">Our story</span>
            <h2 className="text-balance text-3xl font-semibold text-ink-900 md:text-4xl">
              Built to make sustainable disposal effortless
            </h2>
            <p className="text-balance text-ink-700/80">
              <strong className="font-semibold text-ink-900">Mission:</strong> remove the friction from
              waste oil disposal so every kitchen and factory can recycle responsibly, without extra admin.
            </p>
            <p className="text-balance text-ink-700/80">
              <strong className="font-semibold text-ink-900">Vision:</strong> a future where used oil never
              reaches a landfill or drain — only clean, circulating biofuel.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="relative border-l border-ink-900/10 pl-8"
          >
          </motion.div>
        </div>

        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsControls}
          variants={staggerContainer(0.1)}
          className="mt-24 grid grid-cols-2 gap-8 rounded-xl3 bg-mist-50 p-10 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
