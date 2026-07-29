import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { staggerContainer, fadeUp } from "../../animations/variants.js";
import useRevealOnScroll from "../../hooks/useRevealOnScroll.js";
import { testimonials } from "../../data/content.js";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Testimonials() {
  const [ref, controls] = useRevealOnScroll({ threshold: 0.05 });

  return (
    <section className="section-y bg-white">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trusted by operators"
          title="Teams who've made the switch"
          subtitle="Real feedback from the people who manage collections day to day."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer(0.12)}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col gap-5 rounded-xl2 bg-mist-50 p-8 shadow-card"
            >
              <Quote className="text-emerald-400" size={28} />
              <p className="text-balance text-sm leading-relaxed text-ink-800">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-auto flex items-center gap-3 pt-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-grad-emerald font-display text-sm font-semibold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                  <p className="text-xs text-ink-700/60">{t.role}, {t.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-ink-900/15"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
