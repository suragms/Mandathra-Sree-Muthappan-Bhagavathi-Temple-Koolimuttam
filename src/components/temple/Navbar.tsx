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
        scrolled && !open ? "glass-sacred border-b border-gold/15 py-3" : scrolled ? "py-3 border-b border-gold/10" : "bg-transparent py-5"
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
          className="lg:hidden text-gold w-12 h-12 flex items-center justify-center rounded-full hover:bg-gold/10 transition-colors z-50 relative"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed inset-0 lg:hidden z-40 bg-background/98 backdrop-blur-xl flex flex-col justify-between pt-[env(safe-area-inset-top,6rem)] pb-[env(safe-area-inset-bottom,2rem)] px-8 overflow-y-auto border-l border-gold/15"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col gap-1 mt-6 relative z-10">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 + 0.1 }}
                >
                  <Link
                    to={l.to}
                    className="flex items-center justify-between py-4.5 border-b border-gold/10 hover:border-gold/30 transition-colors group"
                  >
                    <span className="font-display text-base sm:text-lg tracking-widest text-foreground group-hover:text-gold transition-colors">
                      {l.label}
                    </span>
                    <span className="font-malayalam text-xs sm:text-sm text-muted-foreground group-hover:text-gold/80 transition-colors">
                      {l.ml}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Quick Info inside menu footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-6 border-t border-gold/10 text-center relative z-10 pb-[env(safe-area-inset-bottom,1rem)]"
            >
              <p className="font-malayalam text-xs text-gold/60 tracking-wider">
                മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം
              </p>
              <p className="text-[10px] text-muted-foreground font-body tracking-widest uppercase mt-1">
                Koolimuttam, Thrissur · Reg No: 603/99
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
