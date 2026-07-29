import { motion } from "framer-motion";

const nodes = [
  { key: "restaurant", label: "Restaurant", cx: 70, cy: 70 },
  { key: "collection", label: "Collection", cx: 230, cy: 40 },
  { key: "truck", label: "Truck", cx: 360, cy: 110 },
  { key: "plant", label: "Recycling Plant", cx: 330, cy: 250 },
  { key: "factory", label: "Factory", cx: 150, cy: 300 },
  { key: "biofuel", label: "Biofuel", cx: 70, cy: 200 },
];

const path =
  "M70,70 C150,30 190,20 230,40 C280,65 320,80 360,110 C380,150 370,210 330,250 C280,290 210,300 150,300 C100,290 70,250 70,200 C70,160 60,110 70,70";

/**
 * The site's signature visual: a continuous droplet-loop connecting the
 * six real steps of the oil-recycling journey, rather than a generic
 * numbered flow. Nodes pulse in sequence to suggest circulation.
 */
export default function HeroFlowIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]">
      {/* ambient gradient glow behind the illustration */}
      <div className="absolute inset-0 -z-10 rounded-full bg-grad-radial-glow blur-2xl" />

      <svg viewBox="0 0 420 380" className="h-full w-full" role="img" aria-label="Diagram of the waste oil recycling loop">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FA981" />
            <stop offset="100%" stopColor="#F0B857" />
          </linearGradient>
        </defs>

        {/* base path (static, faint) */}
        <path d={path} fill="none" stroke="#0B1120" strokeOpacity="0.08" strokeWidth="3" />

        {/* animated draw-in path */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#flowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1000"
          initial={{ strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {/* traveling droplet along the path */}
        <motion.circle r="5" fill="#0FA981">
          <animateMotion dur="6s" repeatCount="indefinite" path={path} />
        </motion.circle>

        {nodes.map((n, i) => (
          <g key={n.key}>
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r="26"
              fill="white"
              stroke="#E2E9E6"
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: "backOut" }}
              style={{ filter: "drop-shadow(0 6px 16px rgba(11,17,32,0.08))" }}
            />
          </g>
        ))}
      </svg>

      {/* Node labels as floating HTML cards positioned over the SVG */}
      {nodes.map((n, i) => (
        <motion.div
          key={n.key}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-card"
          style={{ left: `${(n.cx / 420) * 100}%`, top: `${(n.cy / 380) * 100}%` }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
          {n.label}
        </motion.div>
      ))}
    </div>
  );
}
