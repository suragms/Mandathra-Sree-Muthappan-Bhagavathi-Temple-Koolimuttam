import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import templeExterior from "@/assets/temple-exterior.png";
import kalvilakkuCourtyard from "@/assets/kalvilakku-courtyard.png";
import { CommitteeSection } from "@/components/temple/CommitteeSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Temple | Mandathra Sree Muthappan Bhagavathi Temple" },
      {
        name: "description",
        content:
          "History and heritage of Mandathra Sree Muthappan Bhagavathi Temple — a sacred Madappura in Thrissur, Kerala devoted to Sree Muthappan and Bhagavathi.",
      },
      { property: "og:title", content: "About the Temple — Mandathra" },
      { property: "og:description", content: "A sacred Madappura rooted in Kerala tradition." },
      { property: "og:image", content: templeExterior },
      { name: "twitter:image", content: templeExterior },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const sections = [
    {
      ml: "ചരിത്രം",
      en: "Our History",
      body: "For generations, the Mandathra Madappura has stood as a quiet beacon of devotion in Thrissur. Built by hands that knew only faith, it has weathered centuries of monsoons, festivals, and silent prayers — its lamps refusing to dim.",
    },
    {
      ml: "ശിവൻ - വിഷ്ണു സങ്കൽപ്പം",
      en: "Shiva & Vishnu, One Form",
      body: "Sree Muthappan is revered as the divine fusion of Shiva and Vishnu — the wrathful protector and the merciful preserver, intertwined in one wandering god who walks among mortals as one of their own.",
    },
    {
      ml: "സമത്വം",
      en: "The God of Equality",
      body: "Muthappan rejects the hierarchies men make. Brahmin and toddy-tapper, scholar and farmer — all who arrive with folded hands receive the same blessing. This sacred equality is the soul of the Madappura.",
    },
    {
      ml: "പുണ്യ ശ്വാനന്മാർ",
      en: "The Sacred Dogs",
      body: "Beside Muthappan walk his loyal dogs — symbols of unwavering devotion, watchful guardians of the divine. Their presence in temple iconography reminds us: love and loyalty are sacred too.",
    },
    {
      ml: "കേരളീയ പാരമ്പര്യം",
      en: "Living Kerala Tradition",
      body: "The temple is more than stone and lamp. It is a living thread in the weave of Kerala's spiritual culture — Theyyam, ritual cuisine, Malayalam chant, the rhythm of chenda drums — all kept alive within these walls.",
    },
  ];

  return (
    <>
      <PageHero
        image={templeExterior}
        malayalam="ക്ഷേത്ര ചരിത്രം"
        english="About the Temple"
        subtitle="A heritage carried by lamp-light, drum, and devotion."
      />

      <section className="relative py-24 px-6 md:px-8 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Sacred Heritage"
          malayalam="പുണ്യ പാരമ്പര്യം"
          title="Where Faith Has Refused to Fade"
          description="Every stone of Mandathra remembers a prayer. Every lamp here has been lit a thousand times. This is not merely a temple — it is the breathing memory of devotion itself."
        />

        <div className="mt-20 space-y-16">
          {sections.map((s, i) => (
            <motion.article
              key={s.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="grid sm:grid-cols-[80px_1fr] gap-6"
            >
              <div className="font-display text-3xl md:text-5xl text-gold/30 tracking-tight">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="font-malayalam text-sm text-gold/80 mb-1">{s.ml}</p>
                <h3 className="font-display text-xl md:text-2xl text-gradient-gold tracking-wide mb-4">
                  {s.en}
                </h3>
                <div className="ornate-divider w-16 mb-5" />
                <p className="text-foreground/80 leading-relaxed">{s.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto relative aspect-[16/9] rounded-sm overflow-hidden border border-gold/15 bg-card/65 glow-lamp">
          <div className="absolute inset-0 bg-cover bg-center blur-md scale-105 opacity-40 animate-slow-zoom brightness-50" style={{ backgroundImage: `url(${kalvilakkuCourtyard})` }} />
          <img src={kalvilakkuCourtyard} alt="Temple Kalvilakku stone lamp" className="relative z-10 w-full h-full object-contain p-4" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-20" />
          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 text-center z-30">
            <p className="font-malayalam text-2xl md:text-3xl text-gradient-gold mb-2 glow-text">
              "ഭക്തി മാത്രമാണ് മുത്തപ്പന് വേണ്ടത്"
            </p>
            <p className="text-sm md:text-base text-muted-foreground italic">
              All Muthappan asks of you is your devotion.
            </p>
          </div>
        </div>
      </section>

      <div className="ornate-divider max-w-5xl mx-auto" />
      <section className="relative py-12">
        <CommitteeSection showTitle={true} />
      </section>
    </>
  );
}
