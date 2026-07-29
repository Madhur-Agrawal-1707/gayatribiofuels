import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { staggerContainer, fadeUp } from "../../animations/variants.js";
import Button from "../ui/Button.jsx";
import HeroFlowIllustration from "../illustrations/HeroFlowIllustration.jsx";
import FloatingCard from "../illustrations/FloatingCard.jsx";
import ParticleField from "../illustrations/ParticleField.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist-50">
      <div className="absolute inset-0 -z-10 bg-grad-radial-glow" />
      <ParticleField />

      <div className="container-px relative mx-auto grid max-w-7xl items-center gap-16 pb-20 pt-16 md:pt-24 lg:grid-cols-2 lg:pb-32">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7"
        >
          <motion.span variants={fadeUp} className="eyebrow w-fit">
            Certified waste oil recycling
          </motion.span>

          <motion.h1 variants={fadeUp} className="text-balance text-4xl font-semibold leading-[1.05] text-ink-900 sm:text-5xl lg:text-6xl">
            Transforming Waste Oil Into{" "}
            <span className="bg-grad-emerald bg-clip-text text-transparent">Sustainable Value.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="max-w-lg text-balance text-lg text-ink-700/80">
            Gayatri Biofuels collects, tracks, and recycles used cooking oil from restaurants,
            hotels, and factories — turning a disposal problem into clean biofuel and
            a fully compliant paper trail.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-2">
            <Button to="/contact" variant="gradient" size="lg">
              Request Demo <ArrowRight size={18} />
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              <PlayCircle size={18} /> Learn More
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-6 pt-4 text-sm text-ink-700/60">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> 500+ partners
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> 25M+ liters recycled
            </span>
          </motion.div>
        </motion.div>

        <div className="relative">
          <HeroFlowIllustration />
          <FloatingCard
            icon="MapPin"
            title="Live Tracking"
            subtitle="Vehicle en route"
            className="left-[-1rem] top-6 hidden sm:flex"
            delay={0.9}
          />
          <FloatingCard
            icon="ShieldCheck"
            title="100% Compliant"
            subtitle="Certificate ready"
            className="bottom-4 right-[-0.5rem] hidden sm:flex"
            delay={1.2}
          />
        </div>
      </div>
    </section>
  );
}
