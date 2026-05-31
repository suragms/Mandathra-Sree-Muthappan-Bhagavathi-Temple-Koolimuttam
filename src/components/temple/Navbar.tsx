import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TempleLogo } from "@/components/temple/TempleLogo";
import { temple } from "@/lib/temple-data";

const links = [
  { to: "/", label: "Home", ml: "ഹോം" },
  { to: "/about", label: "About", ml: "ക്ഷേത്രം" },
  { to: "/administration", label: "Committee", ml: "സമിതി" },
  { to: "/festivals", label: "Festivals", ml: "ഉത്സവം" },
  { to: "/gallery", label: "Gallery", ml: "ഗ്യാലറി" },
  { to: "/contact", label: "Contact", ml: "ബന്ധപ്പെടുക" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="kerala-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" aria-label="Mandathra temple home">
            <TempleLogo variant="navbar" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-temple-red text-white"
                      : "text-foreground hover:bg-accent hover:text-temple-red"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={temple.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full gradient-maroon px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-temple-red lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-gold/20 bg-white px-5 py-5 shadow-xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center justify-between rounded-md px-4 py-3 text-left font-semibold text-temple-red hover:bg-accent"
                >
                  <span>{link.label}</span>
                  <span className="font-malayalam text-sm text-muted-foreground">{link.ml}</span>
                </Link>
              ))}
            </nav>
            <a
              href={temple.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex justify-center rounded-full gradient-maroon px-5 py-3 font-bold text-white"
            >
              Contact Secretary on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
