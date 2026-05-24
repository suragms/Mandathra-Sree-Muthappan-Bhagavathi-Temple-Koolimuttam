import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import innerSanctumKalam from "@/assets/inner-sanctum-kalam.png";
import kalvilakkuCourtyard from "@/assets/kalvilakku-courtyard.png";

export const Route = createFileRoute("/theyyam")({
  head: () => ({
    meta: [
      { title: "Muthappan Theyyam | Mandathra Temple, Thrissur" },
      {
        name: "description",
        content:
          "Muthappan Theyyam at Mandathra — Kerala's sacred ritual where the divine takes mortal form. Discover the chenda drums, fire, paint, and ancient chants.",
      },
      { property: "og:title", content: "Muthappan Theyyam — The Living Ritual" },
      {
        property: "og:description",
        content: "Witness Kerala's sacred art of divine possession.",
      },
      { property: "og:image", content: innerSanctumKalam },
      { name: "twitter:image", content: innerSanctumKalam },
    ],
    links: [{ rel: "canonical", href: "/theyyam" }],
  }),
  component: TheyyamPage,
});

function TheyyamPage() {
  const stages = [
    {
      ml: "തെയ്യം ഒരുക്കം",
      en: "The Preparation",
      body: "Hours before the ritual, the performer fasts, prays, and surrenders. Layers of sacred paint — red, white, yellow — transform skin into canvas, mortal into vessel.",
    },
    {
      ml: "വരവിളി",
      en: "The Invocation",
      body: "Chenda drums begin — slow, then thunderous. Ancient chants summon the deity. The torches are lit. The boundary between worlds begins to soften.",
    },
    {
      ml: "ദൈവത്തിന്റെ വരവ്",
      en: "The Arrival",
      body: "The Theyyam awakens. Eyes change. The performer is no longer present — Muthappan has descended. He dances, blesses, speaks, weeps, walks among his children.",
    },
    {
      ml: "അനുഗ്രഹം",
      en: "The Blessing",
      body: "Devotees approach. Muthappan listens — to grief, to gratitude, to whispered vows. With a touch, a word, a small gift, the divine answers each one.",
    },
  ];

  return (
    <>
      <PageHero
        image={innerSanctumKalam}
        malayalam="തെയ്യം — ദൈവത്തിന്റെ കല"
        english="The Sacred Theyyam"
        subtitle="Where chant, fire, and faith conjure the god in mortal form."
      />

      <section className="relative py-24 px-6 md:px-8 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="The Living Ritual"
          malayalam="ജീവനുള്ള ആചാരം"
          title="Theyyam Is Not Performance — It Is Presence"
          description="For over a thousand years, Theyyam has refused to die. It is older than empires, older than texts. In its flame, the gods of Kerala still walk."
        />

        <div className="mt-20 space-y-12">
          {stages.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pl-10 border-l border-gold/30"
            >
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gold glow-lamp" />
              <p className="font-display text-[10px] tracking-[0.4em] text-gold/70 mb-2 uppercase">
                Stage {i + 1}
              </p>
              <p className="font-malayalam text-base text-gold mb-1">{s.ml}</p>
              <h3 className="font-display text-2xl text-gradient-gold mb-3 tracking-wide">
                {s.en}
              </h3>
              <p className="text-foreground/80 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="aspect-[3/4] overflow-hidden rounded-sm relative border border-gold/15 bg-card/65 group"
          >
            <div className="absolute inset-0 bg-cover bg-center blur-md scale-105 opacity-40 animate-slow-zoom brightness-50" style={{ backgroundImage: `url(${innerSanctumKalam})` }} />
            <img src={innerSanctumKalam} alt="Sacred Theyyam preparations in Sreekovil" className="relative z-10 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent z-20" />
            <div className="absolute bottom-6 left-6 right-6 z-30">
              <p className="font-malayalam text-sm text-gold/90 mb-1">
                "ശ്രീ കോവിൽ ഒരുക്കം"
              </p>
              <p className="text-xs text-muted-foreground italic">
                Adorning the sanctum for theyyam invocation
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="aspect-[3/4] overflow-hidden rounded-sm relative border border-gold/15 bg-card/65 group"
          >
            <div className="absolute inset-0 bg-cover bg-center blur-md scale-105 opacity-40 animate-slow-zoom brightness-50" style={{ backgroundImage: `url(${kalvilakkuCourtyard})` }} />
            <img src={kalvilakkuCourtyard} alt="Kalvilakku stone lamp illuminated" className="relative z-10 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-[1500ms]" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent z-20" />
            <div className="absolute bottom-6 left-6 right-6 z-30">
              <p className="font-malayalam text-sm text-gold/90 mb-1">
                "ദീപക്കാഴ്ച"
              </p>
              <p className="text-xs text-muted-foreground italic">
                The glow of traditional oil lamps in the evening
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
