import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/temple/PageHero";

import templeExterior from "@/assets/temple-exterior.png";
import templeExteriorPortrait from "@/assets/temple-exterior-portrait.png";
import templeCourtyardLandscape from "@/assets/temple-courtyard-landscape.png";
import innerSanctumKalam from "@/assets/inner-sanctum-kalam.png";
import stoneLion from "@/assets/stone-lion.png";
import kalvilakkuCourtyard from "@/assets/kalvilakku-courtyard.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Mandathra Sree Muthappan Temple" },
      {
        name: "description",
        content:
          "Photographs of Mandathra Sree Muthappan Bhagavathi Temple — Theyyam rituals, festival processions, sacred lamps, and devotional moments.",
      },
      { property: "og:title", content: "Gallery — Mandathra" },
      { property: "og:description", content: "Cinematic moments of Kerala temple devotion." },
      { property: "og:image", content: templeExterior },
      { name: "twitter:image", content: templeExterior },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: templeExterior, alt: "Mandathra Temple Sreekovil shrine with golden decorations", span: "wide", ratio: "landscape" },
  { src: innerSanctumKalam, alt: "Inner sanctum peedham decorated with kuruthola and colorful ritual kalam", span: "tall", ratio: "portrait" },
  { src: templeExteriorPortrait, alt: "Main Sreekovil outer wall structure and red-tiled roof", span: "tall", ratio: "portrait" },
  { src: kalvilakkuCourtyard, alt: "Traditional Kalvilakku stone lamp and outer pavilion lights", ratio: "portrait" },
  { src: stoneLion, alt: "Gilded stone lion vahana (vehicle) of Bhagavathi Devi", span: "tall", ratio: "portrait" },
  { src: templeCourtyardLandscape, alt: "Mandathra Temple courtyard wide landscape view", ratio: "landscape" },
];

function GalleryPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIdx(null);
      } else if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev !== null ? (prev + 1) % items.length : null));
      } else if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev !== null ? (prev - 1 + items.length) % items.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  return (
    <>
      <PageHero
        image={templeExterior}
        malayalam="ചിത്രങ്ങൾ"
        english="Gallery"
        subtitle="Frames from the Madappura — devotion captured in lamplight."
      />

      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              onClick={() => setActiveIdx(i)}
              className={`group relative overflow-hidden rounded-sm border border-gold/15 bg-card/65 cursor-pointer glow-lamp transition-all duration-500 hover:border-gold/40 hover:-translate-y-1 ${
                it.span === "tall" ? "row-span-2" : it.span === "wide" ? "col-span-2" : ""
              }`}
            >
              {/* Blurred background copy for portrait items */}
              {it.ratio === "portrait" && (
                <div className="absolute inset-0 bg-cover bg-center blur-[8px] scale-105 opacity-30" style={{ backgroundImage: `url(${it.src})` }} />
              )}
              
              <img
                src={it.src}
                alt={it.alt}
                className={`relative z-10 w-full h-full transition-transform duration-[2000ms] group-hover:scale-105 ${
                  it.ratio === "portrait" ? "object-contain p-3" : "object-cover"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-20" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 text-[11px] tracking-[0.2em] uppercase text-gold/90 font-medium z-30 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="font-malayalam normal-case tracking-wide text-xs block text-foreground/80 mb-1">{it.alt}</span>
                Click to expand
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          >
            {/* Background Image blur */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-20 scale-105"
              style={{ backgroundImage: `url(${items[activeIdx].src})` }}
            />
            
            {/* Close trigger clicking background */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActiveIdx(null)} />

            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
              {/* Top Bar controls */}
              <div className="w-full flex justify-between items-center text-muted-foreground text-xs uppercase tracking-[0.25em] mb-4">
                <span>Image {activeIdx + 1} of {items.length}</span>
                <button
                  onClick={() => setActiveIdx(null)}
                  className="p-2 text-gold hover:text-foreground hover:bg-gold/10 rounded-full transition-all"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main image container */}
              <div className="relative w-full flex items-center justify-between gap-4">
                {/* Prev Button */}
                <button
                  onClick={() => setActiveIdx((activeIdx - 1 + items.length) % items.length)}
                  className="p-3 text-gold hover:text-foreground hover:bg-gold/10 rounded-full shrink-0 transition-all cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Main Card with gold border */}
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full aspect-[4/3] max-h-[70vh] rounded-sm overflow-hidden border border-gold/25 bg-card/90 shadow-2xl relative"
                >
                  <div className="absolute inset-0 bg-cover bg-center blur-xl opacity-35" style={{ backgroundImage: `url(${items[activeIdx].src})` }} />
                  <img
                    src={items[activeIdx].src}
                    alt={items[activeIdx].alt}
                    className="relative z-10 w-full h-full object-contain p-4"
                  />
                </motion.div>

                {/* Next Button */}
                <button
                  onClick={() => setActiveIdx((activeIdx + 1) % items.length)}
                  className="p-3 text-gold hover:text-foreground hover:bg-gold/10 rounded-full shrink-0 transition-all cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption */}
              <motion.div
                key={`caption-${activeIdx}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 text-center max-w-2xl"
              >
                <p className="font-malayalam text-gold/90 text-sm tracking-wide leading-relaxed">
                  {items[activeIdx].alt}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-2">
                  Use ← / → arrows to navigate
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
