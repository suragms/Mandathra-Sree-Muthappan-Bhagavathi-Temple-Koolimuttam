import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import { media } from "@/lib/temple-data";

export const Route = createFileRoute("/offerings")({
  head: () => ({
    meta: [
      { title: "Offerings | Mandathra Temple" },
      {
        name: "description",
        content: "Vazhipadu and devotional offerings at Mandathra Sree Muthappan Bhagavathi Temple.",
      },
      { property: "og:image", content: media.innerSanctum },
    ],
    links: [{ rel: "canonical", href: "/offerings" }],
  }),
  component: OfferingsPage,
});

function OfferingsPage() {
  const offerings = [
    ["തേങ്ങ സമർപ്പണം", "Coconut Offering", "A simple act of surrender and prayer."],
    ["വിളക്ക് നേർച്ച", "Lamp Offering", "Lighting the lamp for hope, clarity, and blessing."],
    ["ഭഗവതി പൂജ", "Bhagavathi Pooja", "Special worship for Devi's grace and protection."],
    ["പ്രസാദം", "Prasadam Offering", "Sacred prasadam support for devotees and festival days."],
    ["പായസ നിവേദ്യം", "Payasa Nivedyam", "Traditional sweet offering made with devotion."],
    ["ദീപാരാധന", "Deeparadhana", "Evening lamp worship in the temple atmosphere."],
  ];

  return (
    <>
      <PageHero
        image={media.innerSanctum}
        malayalam="വഴിപാട്"
        english="Sacred Offerings"
        subtitle="Devotional support for daily pooja, special rituals, and festival worship."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Vazhipadu"
          malayalam="ഭക്തിയുടെ സമർപ്പണം"
          title="Offerings for prayer, gratitude, and blessing"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map(([ml, title, desc], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="temple-card rounded-lg p-7"
            >
              <Flame className="h-7 w-7 text-gold" />
              <p className="mt-5 font-malayalam text-xl font-bold text-temple-red">{ml}</p>
              <h2 className="mt-1 font-display text-lg font-bold">{title}</h2>
              <p className="mt-4 leading-7 text-muted-foreground">{desc}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
