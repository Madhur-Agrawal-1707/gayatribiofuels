import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

/**
 * Shared shell for every route: sticky navbar, routed page content,
 * and the footer. Kept intentionally thin — pages own their own sections.
 */
export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-mist-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
