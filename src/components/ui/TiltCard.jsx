import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * A card with a subtle 3D tilt that follows the cursor, a soft shadow,
 * and an optional gradient border. Used across services/industries grids.
 */
export default function TiltCard({ children, className = "", glow = true }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`gradient-border group relative rounded-xl2 bg-white p-7 shadow-card transition-shadow duration-300 hover:shadow-soft ${className}`}
    >
      {glow && (
        <div className="pointer-events-none absolute -inset-px -z-10 rounded-xl2 bg-grad-radial-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      )}
      {children}
    </motion.div>
  );
}
