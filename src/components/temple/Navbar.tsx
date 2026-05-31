import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  HandHeart,
  Home,
  Image,
  Landmark,
  MapPin,
  MoreHorizontal,
  Phone,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { TempleLogo } from "@/components/temple/TempleLogo";
import { temple } from "@/lib/temple-data";

const desktopLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Temple" },
  { href: "/festivals#makam-pooja", label: "Makam Pooja" },
  { href: "/festivals#makam-ulsavam", label: "Makam Ulsavam" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#announcements", label: "Announcements" },
  { href: "/administration", label: "Committee" },
  { href: "/#donation", label: "Donations" },
  { href: "/contact", label: "Contact" },
] as const;

const mobileMenuLinks = [
  { href: "/about", label: "About Temple", ml: "ക്ഷേത്രം", icon: Landmark },
  { href: "/administration", label: "Committee", ml: "സമിതി", icon: Users },
  { href: "/#donation", label: "Donations", ml: "സംഭാവന", icon: HandHeart },
  { href: "/contact", label: "Contact", ml: "ബന്ധപ്പെടുക", icon: Phone },
  { href: "/contact#map", label: "Location Map", ml: "ലൊക്കേഷൻ", icon: MapPin },
] as const;

export function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMoreOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl" : "bg-white/80 backdrop-blur"
        }`}
      >
        <div className="kerala-border">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
            <Link to="/" aria-label="Mandathra temple home">
              <TempleLogo variant="navbar" />
            </Link>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {desktopLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? location.pathname === "/"
                    : link.href.startsWith(location.pathname) && location.pathname !== "/";
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-2 text-[13px] font-semibold transition-colors xl:px-4 ${
                      active
                        ? "bg-temple-red text-white"
                        : "text-foreground hover:bg-accent hover:text-temple-red"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <a
              href={temple.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full gradient-maroon px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 lg:inline-flex"
            >
              WhatsApp Updates
            </a>

            <div className="h-12 w-12 lg:hidden" aria-hidden="true" />
          </div>
        </div>
      </header>

      <MobileBottomNav moreOpen={moreOpen} setMoreOpen={setMoreOpen} />
    </>
  );
}

function MobileBottomNav({
  moreOpen,
  setMoreOpen,
}: {
  moreOpen: boolean;
  setMoreOpen: (value: boolean) => void;
}) {
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/festivals#makam-pooja", label: "Makam", icon: Sparkles },
    { href: "/festivals#makam-ulsavam", label: "Ulsavam", icon: CalendarDays },
    { href: "/gallery", label: "Gallery", icon: Image },
  ] as const;

  return (
    <>
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[58] bg-black/35 lg:hidden"
            onClick={() => setMoreOpen(false)}
          >
            <motion.div
              initial={{ y: 80 }}
              animate={{ y: 0 }}
              exit={{ y: 80 }}
              className="absolute inset-x-3 bottom-24 rounded-2xl border border-gold/30 bg-white p-4 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="font-malayalam text-lg font-bold text-temple-red">കൂടുതൽ</p>
                  <p className="text-xs text-muted-foreground">Temple services and details</p>
                </div>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-temple-red"
                  onClick={() => setMoreOpen(false)}
                  aria-label="Close more menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid gap-2">
                {mobileMenuLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex min-h-14 items-center gap-3 rounded-xl border border-gold/20 bg-accent/45 px-4 font-semibold text-temple-red"
                    onClick={() => setMoreOpen(false)}
                  >
                    <link.icon className="h-5 w-5 text-gold" />
                    <span className="flex-1">{link.label}</span>
                    <span className="font-malayalam text-sm text-muted-foreground">{link.ml}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed inset-x-0 bottom-0 z-[60] border-t border-gold/25 bg-white/96 px-2 pb-[calc(env(safe-area-inset-bottom,0rem)+0.45rem)] pt-2 shadow-[0_-10px_28px_rgba(80,0,0,0.12)] backdrop-blur-xl lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-5 gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-bold text-temple-red active:bg-accent"
            >
              <item.icon className="h-5 w-5 text-gold" />
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-xl text-[11px] font-bold text-temple-red active:bg-accent"
            aria-label="Open more temple links"
            aria-expanded={moreOpen}
          >
            <MoreHorizontal className="h-5 w-5 text-gold" />
            More
          </button>
        </div>
      </nav>
    </>
  );
}
