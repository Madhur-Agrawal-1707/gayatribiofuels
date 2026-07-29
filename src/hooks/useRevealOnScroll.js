import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Fires a Framer Motion "show" animation the first time an element
 * scrolls into view. Returns [ref, controls] to spread onto a
 * motion component: <motion.div ref={ref} animate={controls} ... />
 */
export default function useRevealOnScroll({ threshold = 0.2, triggerOnce = true } = {}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  return [ref, controls];
}
