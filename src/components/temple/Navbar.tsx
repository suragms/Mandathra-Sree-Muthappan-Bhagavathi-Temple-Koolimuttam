import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { TempleLogo } from "@/components/temple/TempleLogo";

const links = [
  { to: "/", label: "Home", ml: "ഹോം" },
  { to: "/about", label: "About", ml: "ക്ഷേത്രം" },
  { to: "/administration", label: "Committee", ml: "ഭരണസമിതി" },
  { to: "/theyyam", label: "Theyyam", ml: "തെയ്യം" },
  { to: "/offerings", label: "Offerings", ml: "വഴിപാട്" },
  { to: "/festivals", label: "Festivals", ml: "ഉത്സവം" },
  { to: "/gallery", label: "Gallery", ml: "ഗ്യാലറി" },
  { to: "/contact", label: "Contact", ml: "ബന്ധപ്പെടുക" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-sacred border-b border-gold/15 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <TempleLogo variant="navbar" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-gold" : "text-foreground/75 hover:text-gold"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full border border-gold/40 text-gold text-sm font-medium tracking-wide hover:bg-gold/10 transition-colors"
        >
          Get Directions
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-gold p-2"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-sacred border-t border-gold/15 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-baseline justify-between py-3 border-b border-gold/10 last:border-0"
                >
                  <span className="font-display text-sm tracking-widest text-foreground">
                    {l.label}
                  </span>
                  <span className="font-malayalam text-xs text-muted-foreground">{l.ml}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
