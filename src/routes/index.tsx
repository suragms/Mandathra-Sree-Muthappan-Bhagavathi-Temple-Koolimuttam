import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Download,
  Flame,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SectionHeading } from "@/components/temple/SectionHeading";
import { TempleLogo } from "@/components/temple/TempleLogo";
import { committeeMembers, galleryItems, media, temple } from "@/lib/temple-data";

const homeTempleNameMl = "മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${homeTempleNameMl} | Kerala Temple, Koolimuttam` },
      {
        name: "description",
        content:
          "Mandathra Sree Muthappan Bhagavathi Temple Committee, Reg No 603/99, P.O. Koolimuttam 680691. Kerala temple festivals, pooja, gallery, donation and contact details.",
      },
      {
        name: "keywords",
        content:
          "Mandathra Sree Muthappan Bhagavathi Temple, Koolimuttam temple, Kerala temple, Muthappan temple, Bhagavathi Pooja, Thrissur temple committee",
      },
      { property: "og:title", content: temple.nameEn },
      {
        property: "og:description",
        content: "Premium devotional website for Mandathra Sree Muthappan Bhagavathi Temple Committee.",
      },
      { property: "og:image", content: media.hero },
      { name: "twitter:image", content: media.hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const heroSlides = [
  { image: media.hero, label: "Main Sreekovil" },
  { image: media.templeWide, label: "Sacred Campus" },
  { image: media.entranceLamp, label: "Temple Entrance" },
];

const quickLinks = [
  { to: "/about", label: "About Temple", icon: Sparkles },
  { to: "/administration", label: "Committee Members", icon: Users },
  { to: "/festivals", label: "Festivals", icon: CalendarDays },
  { to: "/gallery", label: "Gallery", icon: Flame },
  { to: "/festivals", label: "Announcements", icon: Bell },
  { to: "/contact", label: "Contact", icon: Phone },
] as const;

function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <AboutTemple />
      <FestivalSection />
      <CommitteePreview />
      <Announcements />
      <GalleryPreview />
      <DonationSection />
      <ContactSection />
      <FloatingWhatsApp />
    </>
  );
}

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[760px] overflow-hidden bg-temple-red pt-28 text-white">
      {heroSlides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={`${temple.nameEn} ${slide.label}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            active === index ? "opacity-100 animate-slow-pan" : "opacity-0"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          decoding="async"
        />
      ))}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 mx-auto grid min-h-[632px] max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TempleLogo variant="icon" className="mb-7 h-24 w-24" />
          <p className="font-display text-xs font-bold uppercase text-gold">Reg No: {temple.regNo}</p>
          <h1 className="mt-4 max-w-4xl font-malayalam text-fluid-hero font-bold">
            {homeTempleNameMl}
          </h1>
          <p className="mt-5 max-w-2xl text-fluid-body text-white/86">
            Welcome to a devotional Kerala temple space for Sree Muthappan and Bhagavathi,
            rooted in ritual, community service, and the sacred traditions of Koolimuttam.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#donation"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full gradient-gold px-7 py-3 font-bold text-[#421000] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Donation <HeartHandshake className="h-5 w-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/12 px-7 py-3 font-bold text-white backdrop-blur transition-colors hover:bg-white/22"
            >
              Contact Temple <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden temple-card rounded-lg bg-white/92 p-5 text-foreground md:block"
        >
          <img
            src={media.logo}
            alt={`${homeTempleNameMl} mobile-friendly logo`}
            className="mx-auto h-40 w-40 rounded-full border-4 border-gold bg-black object-cover shadow-xl"
            width={160}
            height={160}
          />
          <div className="mt-5 text-center">
            <p className="font-malayalam text-2xl font-bold text-temple-red">{temple.shortNameMl}</p>
            <p className="mt-2 text-sm text-muted-foreground">{temple.addressMl}</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {["Pooja", "Festival", "Devotion"].map((item) => (
              <span key={item} className="rounded-md bg-accent px-3 py-3 text-xs font-bold text-temple-red">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.label}
            onClick={() => setActive(index)}
            className={`h-2.5 rounded-full transition-all ${active === index ? "w-10 bg-gold" : "w-2.5 bg-white/60"}`}
            aria-label={`Show ${slide.label}`}
          />
        ))}
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className="relative z-20 mx-auto -mt-12 max-w-7xl px-6 md:px-8">
      <div className="grid gap-3 rounded-lg bg-white p-3 shadow-2xl shadow-black/10 sm:grid-cols-2 lg:grid-cols-6">
        {quickLinks.map((link) => (
          <Link
            key={`${link.to}-${link.label}`}
            to={link.to}
            className="group flex items-center gap-3 rounded-md border border-gold/25 bg-accent/55 p-4 text-temple-red transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg"
          >
            <link.icon className="h-5 w-5 shrink-0 text-gold" />
            <span className="text-sm font-bold">{link.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AboutTemple() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={media.hero}
          alt="Traditional Kerala architecture of Mandathra Sree Muthappan Bhagavathi Temple"
          className="aspect-[4/3] w-full rounded-lg object-cover shadow-2xl"
          loading="lazy"
        />
        <img
          src={media.entranceVertical}
          alt="Temple entrance pathway with Kerala roof and devotional lamps"
          className="absolute -bottom-8 right-5 hidden h-56 w-36 rounded-lg border-4 border-white object-cover shadow-xl sm:block"
          loading="lazy"
        />
      </motion.div>
      <div>
        <SectionHeading
          align="left"
          eyebrow="About Temple"
          malayalam="ദൈവസാന്നിധ്യവും കേരള പാരമ്പര്യവും"
          title="A premium devotional home for community worship"
          description="The temple committee preserves the sacred traditions of Sree Muthappan and Bhagavathi through daily worship, festival observances, devotion, and service to devotees."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Registration", temple.regNo],
            ["Location", temple.addressMl],
            ["Main Devotion", "Sree Muthappan"],
            ["Tradition", "Bhagavathi Pooja"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-md border border-gold/25 bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase text-muted-foreground">{label}</p>
              <p className="mt-2 font-malayalam text-lg font-bold text-temple-red">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FestivalSection() {
  const countdown = useFestivalCountdown();
  const events = [
    ["Annual Festival", "വാർഷിക ഉത്സവം", "Community festival with rituals, lamps, and devotional gatherings."],
    ["Daily Pooja", "ദൈനംദിന പൂജ", "Sacred worship and prayer carried with Muthappan devotion."],
    ["Bhagavathi Pooja", "ഭഗവതി പൂജ", "Special prayers for Devi, prosperity, protection, and family welfare."],
    ["Special Events", "വിശേഷ പരിപാടികൾ", "Committee announcements, notices, and seasonal observances."],
  ];

  return (
    <section className="sacred-band py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Festival Section"
          malayalam="ഉത്സവങ്ങൾ"
          title="Ritual calendar guided by lamp, drum, and devotion"
          description="Track festival announcements, Bhagavathi pooja, special events, and upcoming temple observances."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg gradient-maroon p-7 text-white shadow-xl">
            <CalendarDays className="h-9 w-9 text-gold" />
            <p className="mt-5 font-display text-xs font-bold uppercase text-gold">Next Annual Festival Countdown</p>
            <div className="mt-5 grid grid-cols-4 gap-2 text-center">
              {countdown.map((item) => (
                <div key={item.label} className="rounded-md bg-white/12 p-3">
                  <p className="text-2xl font-bold">{item.value}</p>
                  <p className="mt-1 text-[10px] uppercase text-white/72">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-white/76">
              Countdown target is set to the next April 6 temple committee/festival planning day.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {events.map(([title, ml, desc]) => (
              <div key={title} className="temple-card rounded-lg p-6">
                <Flame className="h-6 w-6 text-gold" />
                <p className="mt-4 font-malayalam text-lg font-bold text-temple-red">{ml}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function useFestivalCountdown() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000 * 60);
    return () => window.clearInterval(timer);
  }, []);

  return useMemo(() => {
    const target = new Date(now.getFullYear(), 3, 6, 10, 0, 0);
    if (target.getTime() <= now.getTime()) target.setFullYear(now.getFullYear() + 1);
    const diff = target.getTime() - now.getTime();
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return [
      { label: "Days", value: String(days).padStart(2, "0") },
      { label: "Hours", value: String(hours).padStart(2, "0") },
      { label: "Mins", value: String(minutes).padStart(2, "0") },
      { label: "Reg", value: temple.regNo.split("/")[0] },
    ];
  }, [now]);
}

function CommitteePreview() {
  const officers = committeeMembers.filter((member) => member.officer).slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <SectionHeading
        eyebrow="Committee"
        malayalam="ക്ഷേത്ര ഭരണസമിതി"
        title="Temple administration and office bearers"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {officers.map((member) => (
          <div key={member.phone} className="temple-card rounded-lg p-6 text-center">
            <Shield className="mx-auto h-8 w-8 text-gold" />
            <p className="mt-4 font-malayalam text-lg font-bold text-temple-red">{member.roleMl}</p>
            <h3 className="mt-2 font-malayalam text-xl font-bold">{member.nameMl}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{member.nameEn}</p>
            <a href={`tel:+91${member.phone}`} className="mt-4 inline-flex font-bold text-temple-red">
              +91 {member.phone}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/administration" className="inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-bold text-temple-red hover:bg-accent">
          View all members <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Announcements() {
  return (
    <section className="bg-accent py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Notice Board"
          malayalam="അറിയിപ്പുകൾ"
          title="Latest updates and downloadable notices"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["Temple Committee 2026", "Official committee details are available under the administration page."],
            ["Festival Updates", "Annual festival and Bhagavathi Pooja dates will be published here."],
            ["Donation & Receipts", "Contact the secretary for official donation and receipt support."],
          ].map(([title, desc]) => (
            <article key={title} className="rounded-lg border border-gold/30 bg-white p-6 shadow-sm">
              <Bell className="h-6 w-6 text-gold" />
              <h3 className="mt-4 font-display text-lg font-bold text-temple-red">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{desc}</p>
              <a href="/sitemap.xml" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-temple-red">
                Download notice support <Download className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <SectionHeading
        eyebrow="Gallery"
        malayalam="ചിത്രങ്ങൾ"
        title="Temple photos selected from the public media library"
      />
      <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[250px]">
        {galleryItems.slice(0, 6).map((item) => (
          <Link
            key={item.src}
            to="/gallery"
            className={`group relative overflow-hidden rounded-lg bg-muted ${
              item.span === "wide" ? "col-span-2" : ""
            } ${item.span === "tall" ? "row-span-2" : ""}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                item.contain ? "object-contain p-3" : "object-cover"
              }`}
              loading="lazy"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-xs font-bold uppercase text-white">
              {item.category}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function DonationSection() {
  return (
    <section id="donation" className="sacred-band py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:px-8">
        <img
          src={media.kalvilakku}
          alt="Traditional Kerala lamp for devotional donation section"
          className="mx-auto max-h-96 rounded-lg object-contain"
          loading="lazy"
        />
        <div>
          <SectionHeading
            align="left"
            eyebrow="Donation"
            malayalam="സംഭാവന"
            title="Support temple rituals, festivals, and community service"
            description="For official donation details and receipts, contact the temple secretary. The committee can guide devotees on festival offerings, pooja support, and temple development contributions."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={temple.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full gradient-maroon px-7 py-3 font-bold text-white">
              Donate via Secretary
            </a>
            <a href="tel:+919495224141" className="inline-flex justify-center rounded-full border border-gold px-7 py-3 font-bold text-temple-red">
              Call {temple.phoneSecretary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="temple-card rounded-lg p-7">
          <SectionHeading
            align="left"
            eyebrow="Contact"
            malayalam="ബന്ധപ്പെടുക"
            title="Visit the temple"
          />
          <div className="mt-8 grid gap-5 text-sm">
            <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-gold" /> {temple.addressMl}</p>
            <a className="flex gap-3 font-bold text-temple-red" href="tel:+919495224141"><Phone className="h-5 w-5 shrink-0 text-gold" /> {temple.phoneSecretary}</a>
            <a className="flex gap-3 font-bold text-temple-red" href={temple.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5 shrink-0 text-gold" /> WhatsApp Temple Secretary</a>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden rounded-lg border border-gold/30 shadow-xl">
          <iframe
            title="Mandathra Sree Muthappan Bhagavathi Temple Google Map"
            src="https://www.google.com/maps?q=Mandathra+Sree+Muthappan+Bhagavathi+Temple+Koolimuttam&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={temple.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp fixed bottom-24 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white transition-transform hover:scale-105 sm:bottom-5"
      aria-label="Contact Mandathra temple on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
