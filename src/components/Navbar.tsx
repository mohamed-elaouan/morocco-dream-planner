import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/RAD_BRAND_LOGO.png";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Tours", href: "/#tours" },
  { label: "Expériences", href: "/#daytrips" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Travel Consulting", href: "/travel-consulting" },
  { label: "Contact", href: "/travel-consulting#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If we're on the same page and the link is an anchor
    if (href.startsWith("/#")) {
      const hash = href.substring(1); // remove leading /
      if (location.pathname === "/") {
        // Same page: scroll to the element
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
      // different page: let it navigate naturally
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-card"
          : "bg-primary/70 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="RAD Morocco" 
            className="h-12 md:h-16 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-lg" 
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-body text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full whitespace-nowrap ${scrolled ? 'text-foreground/80 hover:text-accent' : 'text-primary-foreground/90 hover:text-accent'}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/message/F2FIG7DSVSLDO1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition-all hover:shadow-glow hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-body text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/message/F2FIG7DSVSLDO1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
