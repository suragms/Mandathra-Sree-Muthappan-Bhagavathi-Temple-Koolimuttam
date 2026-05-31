import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Shield } from "lucide-react";
import { PageHero } from "@/components/temple/PageHero";
import { SectionHeading } from "@/components/temple/SectionHeading";
import { media, temple } from "@/lib/temple-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | Mandathra Temple" },
      {
        name: "description",
        content:
          "Contact Mandathra Sree Muthappan Bhagavathi Temple Committee. Address P.O. Koolimuttam 680691, phone, email, WhatsApp, and Google Maps.",
      },
      { property: "og:image", content: media.entranceLamp },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: MapPin, label: "Address", value: temple.addressMl, sub: temple.addressEn, href: temple.mapsUrl },
    { icon: Shield, label: "Registration Number", value: temple.regNo },
    { icon: Phone, label: "President", value: temple.phonePresident, href: "tel:+919048055144" },
    { icon: Phone, label: "Secretary", value: temple.phoneSecretary, href: "tel:+919495224141" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with temple secretary", href: temple.whatsappUrl },
    { icon: Mail, label: "Email", value: temple.email, href: `mailto:${temple.email}` },
  ];

  return (
    <>
      <PageHero
        image={media.entranceLamp}
        malayalam="ബന്ധപ്പെടുക"
        english="Contact & Location"
        subtitle="Phone, email, WhatsApp, address, and Google Maps directions for devotees."
      />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          malayalam="പി.ഒ. കൂളിമുട്ടം, 680691"
          title="Find your way to Mandathra Kshethram"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {items.map((item) => {
              const content = (
                <div className="temple-card flex gap-4 rounded-lg p-5 transition-transform hover:-translate-y-0.5">
                  <item.icon className="mt-1 h-6 w-6 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-bold uppercase text-muted-foreground">{item.label}</p>
                    <p className="mt-1 font-malayalam text-lg font-bold text-temple-red">{item.value}</p>
                    {item.sub && <p className="mt-1 text-sm text-muted-foreground">{item.sub}</p>}
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
          <div id="map" className="min-h-[520px] scroll-mt-28 overflow-hidden rounded-lg border border-gold/30 shadow-xl">
            <iframe
              title="Mandathra Sree Muthappan Bhagavathi Temple location"
              src="https://www.google.com/maps?q=Mandathra+Sree+Muthappan+Bhagavathi+Temple+Koolimuttam&output=embed"
              className="h-full min-h-[520px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
