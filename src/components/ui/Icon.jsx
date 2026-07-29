import {
  Circle,
  Droplets,
  CalendarClock,
  MapPin,
  ShieldCheck,
  FileCheck2,
  BarChart3,
  UtensilsCrossed,
  Hotel,
  Factory,
  Plane,
  Cross,
  Wheat,
  Beef,
  ChefHat,
  CloudFog,
  Recycle,
  TreePine,
  ClipboardList,
  Truck,
  FileText,
  LineChart,
  QrCode,
} from "lucide-react";

// Explicit registry (rather than `import * as Icons`) keeps only the icons
// actually used in the app's JS bundle instead of the full icon set.
const registry = {
  Droplets,
  CalendarClock,
  MapPin,
  ShieldCheck,
  FileCheck2,
  BarChart3,
  UtensilsCrossed,
  Hotel,
  Factory,
  Plane,
  Cross,
  Wheat,
  Beef,
  ChefHat,
  CloudFog,
  Recycle,
  TreePine,
  ClipboardList,
  Truck,
  FileText,
  LineChart,
  QrCode,
  Circle,
};

/**
 * Data files reference icons by string name (so content stays declarative).
 * This component resolves that string to the actual Lucide component.
 */
export default function Icon({ name, className = "", size = 22, strokeWidth = 1.8 }) {
  const LucideIcon = registry[name] || Circle;
  return <LucideIcon className={className} size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
