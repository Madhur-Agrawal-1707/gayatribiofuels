import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navigation.js";
import useScrollPosition from "../../hooks/useScrollPosition.js";
import Button from "../ui/Button.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition(16);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between"
      >
        <NavLink to="/" className="flex items-center" aria-label="Gayatri Biofuels home">
          <img
            src="/logo.png"
            alt="Gayatri Biofuels"
            className="h-16 w-16 object-contain"
          />
        </NavLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-ink-700 hover:bg-ink-900/5 hover:text-ink-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact" variant="gradient" size="md">
            Request Demo
          </Button>
        </div>

        <button
          className="rounded-full p-2 text-ink-900 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden glass lg:hidden"
          >
            <ul className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium ${
                        isActive ? "bg-emerald-50 text-emerald-700" : "text-ink-800"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Button to="/contact" variant="gradient" className="w-full" onClick={() => setOpen(false)}>
                  Request Demo
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
