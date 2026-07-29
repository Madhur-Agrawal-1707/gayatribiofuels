# OilCycle — Premium Business Website

A modern, animated marketing website for a waste-oil collection & recycling
company, built with React + Vite (no Next.js), Tailwind CSS, Framer Motion,
Lucide icons, GSAP-ready structure, React CountUp, and React Intersection
Observer.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  animations/     Shared Framer Motion variants (fadeUp, staggerContainer, ...)
  components/
    ui/           Reusable primitives: Button, TiltCard, SectionHeading, Icon, StatCounter...
    layout/       Navbar, Footer, Seo
    illustrations/ Signature SVG art: hero flow diagram, icon blobs, floating cards, particles
    sections/     Full page sections: Hero, Services, About, Industries, HowItWorks,
                  Technology, EnvironmentalImpact, Testimonials, Faq, ContactSection
  data/           Declarative content: nav links, services, industries, stats, blog posts
  hooks/          useRevealOnScroll, useScrollPosition
  layouts/        SiteLayout (navbar + outlet + footer)
  pages/          Route-level pages, each lazy-loaded for code splitting
  styles/         Tailwind entry + component-layer utility classes
```

## Design system

Defined in `tailwind.config.js`:

- **Colors** — `ink` (near-black navy for dark sections/text), `emerald`
  (primary brand — recycling/biofuel), `amber` (secondary accent — oil/gold),
  `mist` (light neutral backgrounds).
- **Type** — Space Grotesk for display/headings, Inter for body copy, IBM
  Plex Mono for small numeric/label accents.
- **Signature element** — an animated SVG "flow loop" connecting the six real
  stops in the recycling journey (restaurant → collection → truck → plant →
  factory → biofuel), used in the hero instead of a generic numbered graphic.

## Notes

- All content is placeholder/dummy copy — replace `src/data/*.js` with real
  copy, contact details, and blog posts before shipping.
- Forms (`ContactSection`, newsletter in `Footer`) are front-end only; wire
  them up to your backend or a form service (e.g. Formspree, Resend) before
  going live.
- Respects `prefers-reduced-motion` and includes visible focus states,
  semantic headings, and ARIA attributes on interactive elements (accordion,
  mobile menu, nav).
