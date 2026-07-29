import { motion } from "framer-motion";
import { Home } from "lucide-react";
import Seo from "../components/layout/Seo.jsx";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-mist-50">
        <div className="absolute inset-0 -z-10 bg-grad-radial-glow" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container-px mx-auto flex max-w-lg flex-col items-center gap-5 text-center"
        >
          <span className="font-display text-7xl font-semibold bg-grad-emerald bg-clip-text text-transparent">
            404
          </span>
          <h1 className="text-2xl font-semibold text-ink-900">This page has been recycled</h1>
          <p className="text-ink-700/70">
            The page you&apos;re looking for doesn&apos;t exist, or has moved somewhere new.
          </p>
          <Button to="/" variant="gradient" size="lg">
            <Home size={18} /> Back to home
          </Button>
        </motion.div>
      </section>
    </>
  );
}
