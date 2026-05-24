import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import kalvilakkuCourtyard from "@/assets/kalvilakku-courtyard.png";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "Festivals & Events | Mandathra Sree Muthappan Temple" },
      {
        name: "description",
        content:
          "Annual festivals, Theyyam dates, and ritual events at Mandathra Sree Muthappan Bhagavathi Temple, Thrissur.",
      },
      { property: "og:title", content: "Festivals at Mandathra" },
      { property: "og:description", content: "Annual rituals and Theyyam dates." },
      { property: "og:image", content: kalvilakkuCourtyard },
      { name: "twitter:image", content: kalvilakkuCourtyard },
    ],
    links: [{ rel: "canonical", href: "/festivals" }],
  }),
  component: FestivalsPage,
});

function FestivalsPage() {
  const events = [
    {
      month: "Vrischikam",
      ml: "വൃശ്ചികോത്സവം",
      en: "Vrischika Mahotsavam",
      window: "November – December",
      desc: "The temple's grandest festival — nights of Theyyam, processions of caparisoned elephants, and a sea of lamps.",
    },
    {
      month: "Makaram",
      ml: "മകര വിളക്ക്",
      en: "Makara Vilakku",
      window: "January",
      desc: "The festival of lamps — the Madappura grounds aglow with thousands of flickering lights.",
    },
    {
      month: "Medam",
      ml: "വിഷു",
      en: "Vishu Aaradhana",
      window: "April",
      desc: "Kerala's new year, marked at Mandathra with first sights of gold, rice, and the kani lamp.",
    },
    {
      month: "Karkidakam",
      ml: "ഇല്ലം നിറ",
      en: "Illam Nira",
      window: "August",
      desc: "Harvest blessing — the first stalks of rice offered to Muthappan in gratitude.",
    },
    {
      month: "Kanni",
      ml: "നവരാത്രി",
      en: "Navaratri",
      window: "September – October",
      desc: "Nine sacred nights of devotion to Bhagavathi — chants, music, and ritual unbroken from dusk to dawn.",
    },
  ];

  return (
    <>
      <PageHero
        image={kalvilakkuCourtyard}
        malayalam="ഉത്സവങ്ങൾ"
        english="Festivals & Events"
        subtitle="A calendar carried by lamp-light, drum, and the rhythm of seasons."
      />

      <section className="relative py-24 px-6 md:px-8 max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Annual Calendar"
          malayalam="വാർഷിക പഞ്ചാംഗം"
          title="The Year of the Madappura"
          description="Each season brings its rituals — and each ritual, its own quiet promise: that the gods still walk among us."
        />

        <div className="mt-20 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          <div className="space-y-12">
            {events.map((e, i) => (
              <motion.div
                key={e.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative grid md:grid-cols-2 gap-6 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold glow-lamp" />
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <p className="font-display text-[10px] tracking-[0.4em] text-gold/70 mb-2 uppercase">
                    {e.month} · {e.window}
                  </p>
                  <p className="font-malayalam text-lg text-gold mb-1">{e.ml}</p>
                  <h3 className="font-display text-2xl text-gradient-gold tracking-wide mb-3">
                    {e.en}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                    {e.desc}
                  </p>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
