import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Seo from "../components/layout/Seo.jsx";
import PageHero from "../components/ui/PageHero.jsx";
import TiltCard from "../components/ui/TiltCard.jsx";
import { staggerContainer, fadeUp } from "../animations/variants.js";
import useRevealOnScroll from "../hooks/useRevealOnScroll.js";
import { blogPosts } from "../data/blogPosts.js";

export default function Blog() {
  const [ref, controls] = useRevealOnScroll({ threshold: 0.05 });

  return (
    <>
      <Seo
        title="Blog"
        description="Insights on waste oil recycling, compliance reporting, and sustainable operations from the OilCycle team."
        path="/blog"
      />
      <PageHero
        eyebrow="Insights"
        title="Notes on recycling, compliance, and operations"
        subtitle="Practical writing for the people who manage waste oil day to day."
      />

      <section className="section-y bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerContainer(0.1)}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeUp}>
                <TiltCard className="flex h-full flex-col">
                  <span className="eyebrow w-fit">{post.category}</span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-ink-700/70">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-ink-700/50">
                    <span>{post.date} · {post.readTime}</span>
                    <span className="flex items-center gap-1 font-medium text-emerald-600">
                      Read <ArrowUpRight size={14} />
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
