import { useState } from "react";
import { Link } from "react-router-dom";
import { Droplets, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { navLinks } from "../../data/navigation.js";

const socials = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-grad-emerald">
              <Droplets size={18} strokeWidth={2} />
            </span>
            <span className="font-display text-lg font-semibold">Gayatri Biofuels</span>
          </Link>
          <p className="max-w-xs text-sm text-white/60">
            Turning waste oil into clean biofuel — certified collection, tracking, and
            compliance reporting for businesses of every size.
          </p>
          <div className="flex gap-3 pt-2">
            {socials.map(({ icon: SIcon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-emerald-500 hover:text-white"
              >
                <SIcon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
            Company
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li>Inside Orchha Gate, Near Sultana Masjid, Gayatri Biofuels,Jhansi, Uttar Pradesh - 284002, India</li>
            <li>
              <a href="tel:+918601650628" className="transition-colors hover:text-white">
                +91 8601650628
              </a>
            </li>
            <li>
              <a href="mailto:gayatribiofuels24@gmail.com" className="transition-colors hover:text-white">
                gayatribiofuels24@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/50">
            Newsletter
          </h3>
          <p className="mb-4 text-sm text-white/60">
            Occasional updates on sustainability impact and platform features.
          </p>
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-grad-emerald transition-transform hover:scale-105"
            >
              <ArrowRight size={16} />
            </button>
          </form>
          {submitted && <p className="mt-2 text-xs text-emerald-300">Subscribed — thank you.</p>}
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-white/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Gayatri Biofuels Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-white/70">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
