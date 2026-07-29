import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";

/**
 * Consistent eyebrow / heading / subtitle block used at the top of
 * nearly every section. `align` controls left vs centered layout.
 */
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", dark = false }) {
  const [ref, controls] = useRevealOnScroll();
  const alignment = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
      className={`flex max-w-2xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`text-balance text-3xl font-semibold md:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : "text-ink-900"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-balance text-base md:text-lg ${dark ? "text-white/70" : "text-ink-700/80"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
