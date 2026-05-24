import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import innerSanctumKalam from "@/assets/inner-sanctum-kalam.png";

export const Route = createFileRoute("/offerings")({
  head: () => ({
    meta: [
      { title: "Vazhipadu — Sacred Offerings | Mandathra Temple" },
      {
        name: "description",
        content:
          "Traditional vazhipadu offerings at Mandathra Sree Muthappan Bhagavathi Temple — Coconut Offering, Lamp Offering, Special Pooja, and Prasadam.",
      },
      { property: "og:title", content: "Vazhipadu — Sacred Offerings" },
      { property: "og:description", content: "Traditional offerings at Mandathra Madappura." },
      { property: "og:image", content: innerSanctumKalam },
      { name: "twitter:image", content: innerSanctumKalam },
    ],
    links: [{ rel: "canonical", href: "/offerings" }],
  }),
  component: OfferingsPage,
});

function OfferingsPage() {
  const offerings = [
    {
      ml: "തേങ്ങ സമർപ്പണം",
      en: "Coconut Offering",
      desc: "Whole coconut broken at the threshold — surrender of ego, opening of heart.",
      tag: "Daily",
    },
    {
      ml: "വിളക്ക് നേർച്ച",
      en: "Lamp Offering",
      desc: "Lighting of oil lamps at dusk — invoking divine light, peace, and hope in life.",
      tag: "Daily",
    },
    {
      ml: "പൂജ സമർപ്പണം",
      en: "Special Pooja",
      desc: "Special archana and pooja for vows, healing, and gratitude — performed by the temple's senior priests.",
      tag: "By request",
    },
    {
      ml: "പ്രസാദം വിതരണം",
      en: "Prasadam Offering",
      desc: "Sacred payasam and temple prasadam distributed to all who enter the temple gates.",
      tag: "Daily",
    },
    {
      ml: "പായസ നിവേദ്യം",
      en: "Payasa Nivedyam",
      desc: "Sweet rice pudding cooked with jaggery and coconut milk, offered to the deities.",
      tag: "Ritual",
    },
    {
      ml: "ദീപാരാധന",
      en: "Deeparadhana",
      desc: "Lamp ritual at twilight — the sacred fire offered back to its source as the sky darkens.",
      tag: "Evening",
    },
  ];

  return (
    <>
      <PageHero
        image={innerSanctumKalam}
        malayalam="വഴിപാട്"
        english="Sacred Offerings"
        subtitle="Each gift carries a vow. Each vow, a quiet conversation with the divine."
      />

      <section className="relative py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Vazhipadu"
          malayalam="ഭക്തിയുടെ ദാനം"
          title="Offerings of the Madappura"
          description="At Muthappan's feet, the smallest gift carries the same weight as the grandest. What matters is the heart that brings it."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((o, i) => (
            <motion.div
              key={o.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-7 glass-sacred rounded-sm hover:border-gold/40 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center group-hover:glow-lamp transition-all">
                  <Flame className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold/70 px-3 py-1 rounded-full border border-gold/20">
                  {o.tag}
                </span>
              </div>
              <p className="font-malayalam text-lg text-gold mb-1">{o.ml}</p>
              <h3 className="font-display text-lg text-foreground tracking-wide mb-3">{o.en}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-10 glass-sacred rounded-sm text-center"
        >
          <p className="font-malayalam text-xl text-gradient-gold mb-3 glow-text">
            "ഭക്തിയിൽ വലുപ്പം ഇല്ല"
          </p>
          <p className="text-foreground/80 italic max-w-2xl mx-auto">
            In devotion, there is no measure. A handful of rice from a poor man weighs the same
            on Muthappan's scales as gold from a king.
          </p>
        </motion.div>
      </section>
    </>
  );
}
