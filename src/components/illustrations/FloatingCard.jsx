import { motion } from "framer-motion";
import Icon from "../ui/Icon.jsx";

/**
 * Small glassmorphic card that floats gently — used to scatter quick
 * proof-points (live tracking, compliance, etc.) around the hero art.
 */
export default function FloatingCard({ icon, title, subtitle, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={`glass animate-float absolute flex items-center gap-3 rounded-xl2 px-4 py-3 shadow-soft ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-grad-emerald text-white">
        <Icon name={icon} size={16} />
      </span>
      <div className="leading-tight">
        <p className="text-xs font-semibold text-ink-900">{title}</p>
        <p className="text-[11px] text-ink-700/60">{subtitle}</p>
      </div>
    </motion.div>
  );
}
