import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "@/assets/RAD_BRAND_LOGO.png";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Tours", href: "/#tours" },
  { label: "Signature Experiences", href: "/#daytrips" },
  { label: "Happy Travelers", href: "/#gallery" },
  { label: "Travel Consulting", href: "/travel-consulting" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const scrollToSection = useCallback((hash: string) => {
    const attempt = () => {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `/#${hash}`);
      }
    };
    setTimeout(attempt, 80);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.slice(2);
      if (location.pathname === "/") {
        scrollToSection(hash);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(hash), 200);
      }
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/";
    return location.pathname === href;
  };

  // ─── Shared style tokens ────────────────────────────────────────────────────
  const desktopLink = [
    "font-body text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200",
    "relative",
    "after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:rounded-full",
    "after:bg-amber-400 after:transition-all after:duration-300",
    scrolled
      ? "text-slate-800 hover:text-amber-600 after:w-0 hover:after:w-full"
      : "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] hover:text-amber-300 after:w-0 hover:after:w-full",
  ].join(" ");

  const desktopActiveLink = [
    desktopLink,
    scrolled ? "text-amber-600 after:w-full" : "text-amber-300 after:w-full",
  ].join(" ");

  const mobileLinkBase = [
    "font-body text-[15px] font-semibold transition-all duration-200",
    "py-3 px-4 rounded-2xl flex items-center gap-3",
    "hover:bg-amber-50 hover:text-amber-700",
  ].join(" ");
  const mobileActiveClass = "text-amber-700 bg-amber-50";
  const mobileDefaultClass = "text-slate-700";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.10)] border-b border-amber-100"
          : "bg-gradient-to-b from-black/70 to-black/30 backdrop-blur-sm border-b border-white/10",
      ].join(" ")}
    >
      {/* Accent stripe at the very top */}
      <div className="h-[3px] w-full bg-gradient-to-r from-amber-500 via-orange-400 to-amber-600" />

      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">

        {/* ── Logo ─────────────────────────────────────────────────────────── */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center group shrink-0"
        >
          <img
            src={logo}
            alt="RAD Morocco"
            className="h-14 md:h-20 w-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </Link>


        {/* ── Desktop nav ──────────────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={isActive(link.href) ? desktopActiveLink : desktopLink}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className={isActive(link.href) ? desktopActiveLink : desktopLink}
              >
                {link.label}
              </Link>
            )
          )}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/message/F2FIG7DSVSLDO1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 bg-amber-500 hover:bg-amber-400 text-white shadow-[0_4px_14px_rgba(245,158,11,0.5)] hover:shadow-[0_4px_20px_rgba(245,158,11,0.7)] hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* ── Mobile hamburger ─────────────────────────────────────────────── */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className={[
            "lg:hidden p-2.5 rounded-xl transition-all duration-200",
            scrolled
              ? "text-slate-800 bg-slate-100 hover:bg-slate-200"
              : "text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm",
          ].join(" ")}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile menu drawer ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-white border-t border-amber-100 shadow-2xl">
              <nav className="container mx-auto px-3 py-4 flex flex-col gap-1">

                {/* Location/brand badge */}
                <div className="flex items-center gap-1.5 px-4 mb-3">
                  <MapPin className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Morocco Dream Planner
                  </span>
                </div>

                {/* Section links */}
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1 px-4">
                  Explore
                </p>
                {navLinks
                  .filter((l) => l.href.startsWith("/#"))
                  .map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`${mobileLinkBase} ${isActive(link.href) ? mobileActiveClass : mobileDefaultClass}`}
                    >
                      {link.label}
                    </a>
                  ))}

                <div className="h-px bg-slate-100 mx-4 my-2" />

                {/* Page links */}
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1 px-4">
                  Pages
                </p>
                {navLinks
                  .filter((l) => !l.href.startsWith("/#"))
                  .map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`${mobileLinkBase} ${isActive(link.href) ? mobileActiveClass : mobileDefaultClass}`}
                    >
                      {link.label}
                    </Link>
                  ))}

                <div className="h-px bg-slate-100 mx-4 my-2" />

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/message/F2FIG7DSVSLDO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-amber-500 hover:bg-amber-400 transition-colors px-5 py-4 text-sm font-bold text-white shadow-[0_4px_14px_rgba(245,158,11,0.4)] mx-1"
                >
                  <Phone className="h-4 w-4" />
                  Contact via WhatsApp
                </a>

                <div className="h-2" />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
