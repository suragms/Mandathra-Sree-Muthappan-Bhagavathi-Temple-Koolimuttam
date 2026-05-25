import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Shield } from "lucide-react";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import templeExterior from "@/assets/temple-exterior.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | Mandathra Sree Muthappan Temple" },
      {
        name: "description",
        content:
          "Visit Mandathra Sree Muthappan Bhagavathi Temple in Thrissur, Kerala. Address, phone, WhatsApp, email, and Google Maps directions.",
      },
      { property: "og:title", content: "Contact & Location — Mandathra" },
      { property: "og:description", content: "Visit the sacred Madappura in Thrissur, Kerala." },
      { property: "og:image", content: templeExterior },
      { name: "twitter:image", content: templeExterior },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    {
      icon: MapPin,
      ml: "സ്ഥലം (മേൽവിലാസം)",
      label: "Address",
      value: "മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം, പി.ഒ. കൂളിമട്ടം, തൃശ്ശൂർ - 680691",
      subtitle: "Mandathra Sree Muthappan Bhagavathi Temple, P.O. Koolimuttam, Thrissur - 680691",
      href: "https://share.google/ykFbz9xgrCEjdyXmx",
    },
    {
      icon: Shield,
      ml: "രജിസ്റ്റർ നമ്പർ",
      label: "Registration Info",
      value: "രജിസ്റ്റർ നമ്പർ: 603/99",
      subtitle: "Reg No: 603/99",
    },
    {
      icon: Phone,
      ml: "ഫോൺ (പ്രസിഡന്റ്)",
      label: "President Phone",
      value: "+91 90480 55144",
      href: "tel:+919048055144",
    },
    {
      icon: Phone,
      ml: "ഫോൺ (സെക്രട്ടറി)",
      label: "Secretary Phone",
      value: "+91 94952 24141",
      href: "tel:+919495224141",
    },
    {
      icon: MessageCircle,
      ml: "വാട്സാപ്പ്",
      label: "WhatsApp",
      value: "സെക്രട്ടറിയുമായി ചാറ്റ് ചെയ്യുക (Chat with Secretary)",
      href: "https://wa.me/919495224141",
    },
    {
      icon: Mail,
      ml: "ഇമെയിൽ",
      label: "Email",
      value: "info@mandathratemple.org",
      href: "mailto:info@mandathratemple.org",
    },
    { icon: Clock, ml: "സമയം", label: "Open Hours", value: "5:30 AM – 8:30 PM (Daily)" },
  ];

  return (
    <>
      <PageHero
        image={templeExterior}
        malayalam="ബന്ധപ്പെടുക"
        english="Contact & Location"
        subtitle="The Madappura welcomes you — with lamps lit and gates open."
      />

      <section className="relative py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Visit Us"
          malayalam="ദർശനം"
          title="Find Your Way to the Sacred Grounds"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-3"
          >
            {items.map((it, i) => {
              const Inner = (
                <div className="flex items-start gap-5 p-6 glass-sacred rounded-sm hover:border-gold/40 transition-colors h-full">
                  <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                    <it.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-malayalam text-sm text-gold/85 mb-0.5">{it.ml}</p>
                    <p className="font-display text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                      {it.label}
                    </p>
                    <p className="text-foreground text-base">{it.value}</p>
                    {it.subtitle && (
                      <p className="text-xs text-muted-foreground mt-1 font-malayalam">{it.subtitle}</p>
                    )}
                  </div>
                </div>
              );
              return it.href ? (
                <a key={i} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                  {Inner}
                </a>
              ) : (
                <div key={i}>{Inner}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="rounded-sm overflow-hidden border border-gold/20 min-h-[420px] relative group"
          >
            <iframe
              title="Mandathra Temple location on Google Maps"
              src="https://www.google.com/maps?q=Mandathra+Sree+Muthappan+Bhagavathi+Temple+Koolimuttam&output=embed"
              className="w-full h-full min-h-[420px] grayscale-[0.4] contrast-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 right-4 z-30">
              <a
                href="https://share.google/ykFbz9xgrCEjdyXmx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/90 text-gold text-xs font-semibold hover:bg-gold hover:text-background border border-gold/40 shadow-lg transition-all duration-300"
              >
                <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-16 p-10 glass-sacred rounded-sm text-center"
        >
          <p className="font-malayalam text-xl md:text-2xl text-gradient-gold mb-2 glow-text">
            "എല്ലാവർക്കും സ്വാഗതം"
          </p>
          <p className="text-foreground/80 italic">All are welcome at the Madappura.</p>
        </motion.div>
      </section>
    </>
  );
}
