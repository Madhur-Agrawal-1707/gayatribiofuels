import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/**
 * Animated numeric counter that starts counting once scrolled into view.
 * `format` lets callers override the display (e.g. "12K+") while still
 * counting up from a real numeric value under the hood.
 */
export default function StatCounter({ value, suffix = "", label, format, dark = false }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span className={`font-display text-4xl font-semibold md:text-5xl ${dark ? "text-white" : "text-ink-900"}`}>
        {inView ? (
          format ? (
            format
          ) : (
            <CountUp end={value} duration={2.2} separator="," suffix={suffix} />
          )
        ) : (
          "0"
        )}
      </span>
      <span className={`text-sm ${dark ? "text-white/60" : "text-ink-700/70"}`}>{label}</span>
    </div>
  );
}
