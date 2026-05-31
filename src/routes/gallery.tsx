import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import { galleryItems, media } from "@/lib/temple-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Mandathra Sree Muthappan Bhagavathi Temple" },
      {
        name: "description",
        content:
          "Modern masonry gallery of Mandathra Sree Muthappan Bhagavathi Temple photos, festivals, temple events, lamps, and Kerala devotional moments.",
      },
      { property: "og:title", content: "Mandathra Temple Gallery" },
      { property: "og:image", content: media.hero },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value === null ? null : (value + 1) % galleryItems.length));
      if (event.key === "ArrowLeft") setActive((value) => (value === null ? null : (value - 1 + galleryItems.length) % galleryItems.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <PageHero
        image={media.entranceLamp}
        malayalam="ചിത്രങ്ങൾ"
        english="Gallery"
        subtitle="Temple events, festival moments, ritual spaces, and devotional Kerala architecture."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Masonry Gallery"
          malayalam="ഉത്സവവും ക്ഷേത്രവും"
          title="Selected and optimized temple photographs"
          description="Images are lazy-loaded and served from compressed WebP assets generated from the public media folder."
        />
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[260px]">
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
              onClick={() => setActive(index)}
              className={`group relative overflow-hidden rounded-lg bg-muted text-left shadow-sm ${
                item.span === "wide" ? "sm:col-span-2" : ""
              } ${item.span === "tall" ? "sm:row-span-2" : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                  item.contain ? "object-contain p-4" : "object-cover"
                }`}
                loading="lazy"
                decoding="async"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                <span className="block text-xs font-bold uppercase text-gold">{item.category}</span>
                <span className="mt-1 line-clamp-2 block text-sm font-semibold text-white">{item.alt}</span>
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/92 p-4"
          >
            <button className="absolute inset-0 cursor-zoom-out" onClick={() => setActive(null)} aria-label="Close gallery image" />
            <div className="relative z-10 w-full max-w-6xl">
              <div className="mb-3 flex items-center justify-between text-white">
                <p className="text-sm font-bold">{galleryItems[active].category} · {active + 1}/{galleryItems.length}</p>
                <button onClick={() => setActive(null)} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="relative overflow-hidden rounded-lg bg-white/5">
                <img
                  src={galleryItems[active].src}
                  alt={galleryItems[active].alt}
                  className="max-h-[75vh] w-full object-contain p-2"
                />
                <button
                  onClick={() => setActive((active - 1 + galleryItems.length) % galleryItems.length)}
                  className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setActive((active + 1) % galleryItems.length)}
                  className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
