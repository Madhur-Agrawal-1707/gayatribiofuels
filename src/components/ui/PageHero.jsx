import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants.js";

/**
 * Compact hero used at the top of every non-home page — keeps the
 * gradient/eyebrow language consistent without repeating the full
 * illustrated home hero.
 */
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-mist-50">
      <div className="absolute inset-0 -z-10 bg-grad-radial-glow" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="container-px mx-auto flex max-w-4xl flex-col items-center gap-5 pb-16 pt-24 text-center md:pt-32"
      >
        <motion.span variants={fadeUp} className="eyebrow">{eyebrow}</motion.span>
        <motion.h1 variants={fadeUp} className="text-balance text-4xl font-semibold text-ink-900 md:text-5xl">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeUp} className="max-w-2xl text-balance text-lg text-ink-700/80">
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
