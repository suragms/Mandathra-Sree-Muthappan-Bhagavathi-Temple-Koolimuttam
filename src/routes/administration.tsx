import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/temple/PageHero";
import { CommitteeSection } from "@/components/temple/CommitteeSection";
import { media, temple } from "@/lib/temple-data";

export const Route = createFileRoute("/administration")({
  head: () => ({
    meta: [
      { title: `Temple Committee 2026 | ${temple.nameEn}` },
      {
        name: "description",
        content:
          "Official temple administration committee, president, secretary, treasurer, and executive members of Mandathra Sree Muthappan Bhagavathi Temple Committee.",
      },
      { property: "og:image", content: media.hero },
    ],
    links: [{ rel: "canonical", href: "/administration" }],
  }),
  component: AdministrationPage,
});

function AdministrationPage() {
  return (
    <>
      <PageHero
        image={media.hero}
        malayalam="ക്ഷേത്ര ഭരണസമിതി"
        english="Temple Committee"
        subtitle={`Reg No: ${temple.regNo} · ${temple.addressMl}`}
      />
      <CommitteeSection showTitle />
    </>
  );
}
