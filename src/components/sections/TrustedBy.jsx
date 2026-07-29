import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { trustedByCategories } from "../../data/content.js";
import Icon from "../ui/Icon.jsx";

export default function TrustedBy() {
  const [ref, controls] = useRevealOnScroll();

  return (
    <section className="border-y border-ink-900/5 bg-white">
      <div className="container-px mx-auto max-w-7xl py-12">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-ink-700/50">
          Trusted across the industries that need it most
        </p>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.08)}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {trustedByCategories.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="flex items-center gap-2 text-ink-700/40 transition-colors hover:text-ink-900"
            >
              <Icon name={item.icon} size={20} />
              <span className="font-display text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
