import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
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
      ml: "സ്ഥലം",
      label: "Location",
      value: "Mandathra, Thrissur District, Kerala — 680000",
    },
    { icon: Phone, ml: "ഫോൺ", label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
    {
      icon: MessageCircle,
      ml: "വാട്സാപ്പ്",
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/910000000000",
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
                <div className="flex items-start gap-5 p-6 glass-sacred rounded-sm hover:border-gold/40 transition-colors">
                  <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                    <it.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-malayalam text-sm text-gold/85 mb-0.5">{it.ml}</p>
                    <p className="font-display text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                      {it.label}
                    </p>
                    <p className="text-foreground text-base">{it.value}</p>
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
            className="rounded-sm overflow-hidden border border-gold/20 min-h-[420px]"
          >
            <iframe
              title="Mandathra Temple location on Google Maps"
              src="https://www.google.com/maps?q=Thrissur,Kerala&output=embed"
              className="w-full h-full min-h-[420px] grayscale-[0.4] contrast-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
