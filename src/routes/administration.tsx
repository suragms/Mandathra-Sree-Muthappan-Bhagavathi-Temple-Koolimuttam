import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/temple/PageHero";
import { CommitteeSection } from "@/components/temple/CommitteeSection";
import templeCourtyardLandscape from "@/assets/temple-courtyard-landscape.png";

export const Route = createFileRoute("/administration")({
  head: () => ({
    meta: [
      { title: "Temple Committee 2026 | Mandathra Sree Muthappan Bhagavathi Temple" },
      {
        name: "description",
        content:
          "Official temple administration committee of Mandathra Sree Muthappan Bhagavathi Temple, Koolimuttam for the year 2026. Contact details of committee members.",
      },
      { property: "og:title", content: "Temple Committee 2026 — Mandathra Kshethram" },
      { property: "og:description", content: "Official administration and committee details." },
      { property: "og:image", content: templeCourtyardLandscape },
      { name: "twitter:image", content: templeCourtyardLandscape },
    ],
    links: [{ rel: "canonical", href: "/administration" }],
  }),
  component: AdministrationPage,
});

function AdministrationPage() {
  return (
    <>
      <PageHero
        image={templeCourtyardLandscape}
        malayalam="ക്ഷേത്ര ഭരണസമിതി"
        english="Temple Administration"
        subtitle="Reg No: 603/99 · Koolimuttam, Thrissur · ഭക്തിയോടെ ജനസേവനം"
      />
      <section className="relative py-12">
        <CommitteeSection showTitle={true} />
      </section>
    </>
  );
}
