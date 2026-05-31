import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import { CommitteeSection } from "@/components/temple/CommitteeSection";
import { media, temple } from "@/lib/temple-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About | ${temple.nameEn}` },
      {
        name: "description",
        content:
          "About Mandathra Sree Muthappan Bhagavathi Temple Committee, its Kerala temple tradition, Muthappan devotion, Bhagavathi worship, and community service.",
      },
      { property: "og:image", content: media.hero },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const sections = [
    ["ചരിത്രം", "Temple Heritage", "Mandathra Kshethram is a devotional community space at Koolimuttam, preserving Kerala temple values through worship, ritual, service, and festival observance."],
    ["മുത്തപ്പൻ ഭക്തി", "Sree Muthappan Devotion", "Muthappan is revered as a guardian of ordinary people, welcoming devotees with equality, compassion, and living ritual tradition."],
    ["ഭഗവതി ആരാധന", "Bhagavathi Worship", "Bhagavathi pooja anchors the temple's protective and maternal devotional presence through lamps, prayers, and special offerings."],
    ["സേവനം", "Committee Service", "The temple committee coordinates worship, announcements, festival planning, donation guidance, and day-to-day support for devotees."],
  ];

  return (
    <>
      <PageHero
        image={media.hero}
        malayalam="ക്ഷേത്ര ചരിത്രം"
        english="About the Temple"
        subtitle={`${temple.nameMl} · Reg No: ${temple.regNo}`}
      />
      <section className="mx-auto max-w-5xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Sacred Heritage"
          malayalam="പുണ്യ പാരമ്പര്യം"
          title="A Kerala temple carried by devotion and community"
          description="The redesigned website presents the temple as a clean, premium, accessible home for devotees, announcements, festivals, gallery, and committee information."
        />
        <div className="mt-14 grid gap-6">
          {sections.map(([ml, title, body], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="temple-card grid gap-5 rounded-lg p-6 sm:grid-cols-[72px_1fr]"
            >
              <p className="font-display text-4xl font-bold text-gold/55">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="font-malayalam text-lg font-bold text-temple-red">{ml}</p>
                <h2 className="mt-1 font-display text-xl font-bold">{title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <CommitteeSection showTitle />
    </>
  );
}
