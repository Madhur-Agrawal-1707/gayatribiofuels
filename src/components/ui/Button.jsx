import { forwardRef, useState } from "react";
import { Link } from "react-router-dom";

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-transform duration-300 focus-visible:outline-none active:scale-[0.97]";

const variants = {
  primary:
    "bg-ink-900 text-white shadow-soft hover:scale-[1.03] hover:shadow-glow",
  gradient:
    "bg-grad-emerald text-white shadow-soft hover:scale-[1.03] hover:shadow-glow",
  outline:
    "border border-ink-900/15 text-ink-900 hover:border-ink-900/30 hover:scale-[1.02] bg-white/60 backdrop-blur",
  ghost: "text-ink-900 hover:text-emerald-600",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Button doubles as a <Link> when `to` is provided, or a native <button>
 * otherwise. Includes a lightweight ripple effect on click.
 */
const Button = forwardRef(function Button(
  { children, to, href, variant = "primary", size = "md", className = "", onClick, ...props },
  ref
) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [
      ...r,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    onClick?.(e);
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const rippleNodes = ripples.map((r) => (
    <span
      key={r.id}
      className="pointer-events-none absolute rounded-full bg-white/40 animate-ping"
      style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
    />
  ));

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} onClick={handleClick} {...props}>
        {children}
        {rippleNodes}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onClick={handleClick} {...props}>
        {children}
        {rippleNodes}
      </a>
    );
  }

  return (
    <button ref={ref} className={classes} onClick={handleClick} {...props}>
      {children}
      {rippleNodes}
    </button>
  );
});

export default Button;
