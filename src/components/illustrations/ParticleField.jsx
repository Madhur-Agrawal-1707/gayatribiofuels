const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 3 + ((i * 7) % 6),
  top: (i * 53) % 100,
  left: (i * 37) % 100,
  duration: 8 + (i % 6),
  delay: (i % 5) * 0.6,
}));

/**
 * Purely decorative floating particles for the hero background.
 * Deterministic pseudo-random placement keeps output stable across renders.
 */
export default function ParticleField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-emerald-400/30 animate-float-slow"
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
