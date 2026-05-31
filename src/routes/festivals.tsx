import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CalendarDays, Flame, Gift, HandHeart, Sparkles } from "lucide-react";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import { media } from "@/lib/temple-data";

export const Route = createFileRoute("/festivals")({
  head: () => ({
    meta: [
      { title: "മകം പൂജ & മകം ഉത്സവം | Mandathra Temple" },
      {
        name: "description",
        content:
          "മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രത്തിലെ മകം പൂജ, മാസാന്ത ചടങ്ങുകൾ, വാർഷിക മകം ഉത്സവം, പ്രത്യേക വഴിപാടുകൾ, അന്നദാനം, ദീപാലങ്കാരം.",
      },
      { property: "og:image", content: media.entranceLamp },
    ],
    links: [{ rel: "canonical", href: "/festivals" }],
  }),
  component: FestivalsPage,
});

const monthlyRituals = [
  "ഗണപതി ഹോമം",
  "ഉഷഃപൂജ",
  "വിശേഷാൽ മകം പൂജ",
  "നൈവേദ്യം",
  "ദീപാരാധന",
  "പ്രസാദ വിതരണം",
];

const annualHighlights = [
  "വിശേഷാൽ പൂജകൾ",
  "കലശാഭിഷേകം",
  "ചെണ്ടമേളം",
  "ദീപാലങ്കാരം",
  "അന്നദാനം",
  "സാംസ്കാരിക പരിപാടികൾ",
  "ഭക്തജന പങ്കാളിത്തം",
];

function FestivalsPage() {
  return (
    <>
      <PageHero
        image={media.templeWideAlt}
        malayalam="മകം പൂജയും മകം ഉത്സവവും"
        english="Festivals & Announcements"
        subtitle="മലയാള മാസങ്ങളിലെ മകം നക്ഷത്ര ദിന പൂജകളും ക്ഷേത്രത്തിലെ പ്രധാന വാർഷിക മകം ഉത്സവവും."
      />

      <section className="sacred-band py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading
            eyebrow="Makam Pooja"
            malayalam="മകം നക്ഷത്ര ദിനം"
            title="മാസംതോറും നടത്തുന്ന മകം പൂജ"
            description="ക്ഷേത്രത്തിൽ എല്ലാ മലയാള മാസങ്ങളിലെയും മകം നക്ഷത്ര ദിനത്തിൽ വിശേഷാൽ മകം പൂജയും പ്രത്യേക വഴിപാടുകളും നടത്തപ്പെടുന്നു."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="temple-card rounded-lg p-7 md:p-9"
            >
              <Flame className="h-8 w-8 text-gold" />
              <h2 className="mt-5 font-malayalam text-3xl font-bold text-temple-red">
                മകം പൂജ
              </h2>
              <p className="mt-5 font-malayalam text-lg leading-9 text-muted-foreground">
                ഭക്തജനങ്ങൾക്ക് മകം പൂജയിൽ പങ്കെടുത്ത് മുത്തപ്പന്റെയും ഭഗവതിയുടെയും
                അനുഗ്രഹം പ്രാപിക്കാവുന്നതാണ്.
              </p>
              <div className="mt-7 rounded-lg bg-accent p-5">
                <p className="font-malayalam text-xl font-bold text-temple-red">
                  മാസംതോറും നടത്തുന്ന ചടങ്ങുകൾ
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {monthlyRituals.map((ritual) => (
                    <div key={ritual} className="flex items-center gap-3 rounded-md bg-white p-3 shadow-sm">
                      <Sparkles className="h-4 w-4 shrink-0 text-gold" />
                      <span className="font-malayalam font-semibold text-foreground">{ritual}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="overflow-hidden rounded-lg border border-gold/30 bg-white shadow-xl"
            >
              <img
                src={media.entranceLamp}
                alt="Mandathra temple entrance and lamp for Makam pooja"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="p-7">
                <CalendarDays className="h-7 w-7 text-gold" />
                <h2 className="mt-4 font-malayalam text-3xl font-bold text-temple-red">
                  വാർഷിക മകം ഉത്സവം
                </h2>
                <p className="mt-5 font-malayalam text-lg leading-9 text-muted-foreground">
                  മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രത്തിലെ പ്രധാന വാർഷിക ആഘോഷമായ
                  മകം ഉത്സവം എല്ലാ വർഷവും ഭക്തി സാന്ദ്രമായ ചടങ്ങുകളോടെ ആഘോഷിക്കുന്നു.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Annual Makam Festival"
          malayalam="ഉത്സവത്തിന്റെ പ്രധാന ആകർഷണങ്ങൾ"
          title="ഭക്തിയും കൂട്ടായ്മയും നിറഞ്ഞ വാർഷിക ആഘോഷം"
          description="ക്ഷേത്ര കമ്മിറ്റിയുടെയും ഭക്തജനങ്ങളുടെയും സഹകരണത്തോടെ മകം ഉത്സവം എല്ലാ വർഷവും ഭംഗിയായി നടത്തിവരുന്നു."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {annualHighlights.map((highlight, index) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="temple-card rounded-lg p-6"
            >
              {index % 2 === 0 ? (
                <HandHeart className="h-7 w-7 text-gold" />
              ) : (
                <Gift className="h-7 w-7 text-gold" />
              )}
              <p className="mt-5 font-malayalam text-xl font-bold text-temple-red">
                {highlight}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-lg gradient-maroon p-8 text-center text-white md:p-10">
          <p className="font-malayalam text-2xl font-bold leading-relaxed text-gold md:text-3xl">
            "മുത്തപ്പന്റെയും ഭഗവതിയുടെയും അനുഗ്രഹം ഏവർക്കും ലഭിക്കട്ടെ"
          </p>
        </div>
      </section>
    </>
  );
}
