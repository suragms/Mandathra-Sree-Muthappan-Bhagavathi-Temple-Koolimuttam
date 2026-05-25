import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  Flame,
  Sparkles,
  Heart,
  Quote,
} from "lucide-react";

import templeExterior from "@/assets/temple-exterior.png";
import templeExteriorPortrait from "@/assets/temple-exterior-portrait.png";
import templeCourtyardLandscape from "@/assets/temple-courtyard-landscape.png";
import innerSanctumKalam from "@/assets/inner-sanctum-kalam.png";
import stoneLion from "@/assets/stone-lion.png";
import kalvilakkuCourtyard from "@/assets/kalvilakku-courtyard.png";

import { Particles } from "@/components/temple/Particles";
import { SectionHeading } from "@/components/temple/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mandathra Sree Muthappan Bhagavathi Temple | Thrissur, Kerala" },
      {
        name: "description",
        content:
          "Sacred Madappura in Thrissur, Kerala — home of Sree Muthappan and Bhagavathi. Experience Theyyam rituals, festivals, and the divine presence.",
      },
      { property: "og:title", content: "Mandathra Sree Muthappan Bhagavathi Temple" },
      {
        property: "og:description",
        content: "Where Devotion Meets Divine Presence — A sacred Kerala Madappura.",
      },
      { property: "og:image", content: templeExterior },
      { name: "twitter:image", content: templeExterior },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutMuthappan />
      <TheyyamExperience />
      <Offerings />
      <FestivalHighlight />
      <GalleryPreview />
      <Testimonials />
      <Timings />
      <ContactStrip />
    </>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden vignette smoke-overlay"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-[center_35%] animate-slow-zoom brightness-[0.75] contrast-[1.05] saturate-[0.95]"
          style={{ backgroundImage: `url(${templeExterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.14)_0%,transparent_60%)] pointer-events-none z-10" />
      </motion.div>

      <Particles count={28} />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-malayalam text-fluid-hero text-gradient-gold leading-[1.25] glow-text font-bold"
        >
          മണ്ടത്ര ശ്രീ മുത്തപ്പൻ
          <br />
          ഭഗവതി ക്ഷേത്രം
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 font-display text-fluid-h3 tracking-wider text-gold/90 uppercase font-medium max-w-2xl px-2"
        >
          Mandathra Sree Muthappan Bhagavathi Temple
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-3 font-display text-xs sm:text-sm tracking-[0.35em] text-foreground/60 uppercase"
        >
          MANDATHRA KSHETHRAM
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="mt-8 flex items-center justify-center gap-2 sm:gap-3 w-full px-4"
        >
          <span className="h-px w-4 sm:w-16 bg-gold/20" />
          <span className="font-display text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground uppercase whitespace-nowrap">
            Koolimuttam · Thrissur
          </span>
          <span className="h-px w-4 sm:w-16 bg-gold/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-xl px-2 mx-auto"
        >
          <Link
            to="/about"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full gradient-gold text-background font-medium text-sm tracking-wide glow-lamp transition-transform hover:scale-[1.03] w-full sm:w-auto min-h-[48px]"
          >
            Explore Temple
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gold/40 text-gold text-sm font-medium tracking-wide hover:bg-gold/10 transition-colors w-full sm:w-auto min-h-[48px]"
          >
            Festival Gallery
          </Link>
          <a
            href="https://share.google/ykFbz9xgrCEjdyXmx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-foreground/80 hover:text-gold text-sm tracking-wide transition-colors w-full sm:w-auto min-h-[48px]"
          >
            <MapPin className="w-4 h-4" /> Get Directions
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/70 text-[10px] tracking-[0.4em] uppercase"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}

/* --------------------------- INTRODUCTION --------------------------- */
function Introduction() {
  return (
    <section className="relative py-16 sm:py-28 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-sm overflow-hidden relative border border-gold/15 glow-lamp">
            <img
              src={templeExterior}
              alt="Mandathra Sree Muthappan temple exterior"
              className="w-full h-full object-cover object-[center_30%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 hidden md:block rounded-full border border-gold/25 p-1 bg-background z-10">
            <img src={kalvilakkuCourtyard} alt="Temple Kalvilakku stone lamp" className="w-full h-full object-cover rounded-full glow-lamp animate-flicker object-center" loading="lazy" />
          </div>
        </motion.div>

        <div>
          <p className="font-display text-[11px] tracking-[0.5em] text-gold/80 mb-4 uppercase">
            ✦ The Sacred Place ✦
          </p>
          <p className="font-malayalam text-base text-muted-foreground mb-2">
            ക്ഷേത്രത്തെക്കുറിച്ച്
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-gradient-gold leading-[1.15] mb-6">
            A Madappura Where the Divine Walks Among Devotees
          </h2>
          <div className="ornate-divider w-24 mb-6" />
          <p className="text-foreground/80 leading-relaxed mb-4">
            Nestled in the verdant heart of Thrissur, the Mandathra Sree Muthappan Bhagavathi
            Temple is a sacred Madappura where the timeless traditions of Kerala find living
            breath. For generations, devotees have gathered here under the soft glow of brass
            lamps to seek the grace of Muthappan — the divine wanderer who recognises no caste,
            no creed, only devotion.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            The temple stands as a quiet sentinel of equality, where the rich and the humble bow
            their heads on the same earth, and where the embers of the ritual fire have never
            cooled.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-gold font-medium tracking-wide group"
          >
            Discover our heritage
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- ABOUT MUTHAPPAN --------------------------- */
function AboutMuthappan() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Shiva & Vishnu",
      ml: "ശിവ - വിഷ്ണു സംഗമം",
      desc: "Muthappan embodies the divine fusion of Shiva and Vishnu — fierce justice and tender compassion bound in one form.",
    },
    {
      icon: Heart,
      title: "Equality of Devotees",
      ml: "സമത്വം",
      desc: "No barriers of caste or creed. Every devotee — humble or proud — is welcomed by Muthappan with the same grace.",
    },
    {
      icon: Flame,
      title: "Sacred Companions",
      ml: "പുണ്യ ശ്വാനൻ",
      desc: "The faithful dogs of Muthappan walk beside him as eternal companions — symbols of loyalty and devotion.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center filter grayscale contrast-125"
        style={{ backgroundImage: `url(${innerSanctumKalam})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="The Deity"
          malayalam="മുത്തപ്പൻ — ദിവ്യ സങ്കല്പം"
          title="Muthappan, The Divine Wanderer"
          description="A god of the people, Muthappan refuses palaces and gold. He chooses the company of the poor, the hunter, the toddy-tapper — walking beside them as friend, protector, and divine kin."
        />

        <div className="mt-12 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative p-8 glass-sacred rounded-sm hover:border-gold/40 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center mb-6 group-hover:glow-lamp transition-all">
                <p.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
              </div>
              <p className="font-malayalam text-sm text-gold/80 mb-2">{p.ml}</p>
              <h3 className="font-display text-xl text-foreground mb-3 tracking-wide">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- THEYYAM EXPERIENCE --------------------------- */
function TheyyamExperience() {
  return (
    <section className="relative py-16 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-display text-[11px] tracking-[0.5em] text-gold/80 mb-4 uppercase">
            ✦ The Living Ritual ✦
          </p>
          <p className="font-malayalam text-base text-muted-foreground mb-2">തെയ്യം</p>
          <h2 className="font-display text-3xl md:text-5xl text-gradient-gold leading-[1.15] mb-6">
            When the God Becomes Visible
          </h2>
          <div className="ornate-divider w-24 mb-6" />
          <p className="text-foreground/80 leading-relaxed mb-4">
            Theyyam is not performance. It is possession — the moment the divine descends into
            mortal form, when paint, costume, and chant transform a man into a god who walks the
            earth.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-4">
            Beneath the flicker of torchlight, drums summon ancestors, and Muthappan arrives —
            speaking, blessing, dancing, weeping with his devotees. For those few sacred hours,
            the boundary between this world and the divine dissolves into smoke and song.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            At Mandathra, this thousand-year tradition continues unbroken — passed hand to hand,
            generation to generation, with the same fire, the same faith.
          </p>
          <Link
            to="/theyyam"
            className="inline-flex items-center gap-2 text-gold font-medium tracking-wide group"
          >
            Witness the ritual
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative aspect-[3/4] rounded-sm overflow-hidden border border-gold/15 bg-card/65 glow-lamp"
        >
          {/* Blurred backdrop copy to prevent visual padding emptiness */}
          <div className="absolute inset-0 bg-cover bg-center blur-md scale-105 opacity-40 animate-slow-zoom" style={{ backgroundImage: `url(${innerSanctumKalam})` }} />
          <img
            src={innerSanctumKalam}
            alt="Mandathra Sree Muthappan inner sanctum decorated for Theyyam rituals"
            className="relative z-10 w-full h-full object-contain p-2"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent z-20" />
          <div className="absolute bottom-6 left-6 right-6 z-30">
            <p className="font-malayalam text-sm text-gold/90 mb-1">
              "ദൈവത്തിന്റെ തിരുമുറ്റത്ത്"
            </p>
            <p className="text-xs text-muted-foreground italic">
              The sacred sanctum adorned for Theyyam rituals
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --------------------------- OFFERINGS --------------------------- */
function Offerings() {
  const items = [
    { ml: "തേങ്ങ സമർപ്പണം", en: "Coconut Offering", desc: "Whole coconut broken at the threshold as a symbol of surrendering the ego." },
    { ml: "വിളക്ക് നേർച്ച", en: "Lamp Offering", desc: "Lighting of oil lamps at dusk to invoke wisdom, hope, and dispel darkness." },
    { ml: "പൂജ സമർപ്പണം", en: "Special Pooja", desc: "Personalized prayers and archana rituals performed by the temple priests." },
    { ml: "പ്രസാദം വിതരണം", en: "Prasadam Offering", desc: "Sacred prasadam distributed to all devotees walking through the temple gates." },
  ];

  return (
    <section
      className="relative py-16 sm:py-28 overflow-hidden"
      style={{ backgroundImage: `linear-gradient(180deg, var(--background), var(--card), var(--background))` }}
    >
      <div className="absolute inset-0 opacity-[0.22]">
        <img src={kalvilakkuCourtyard} alt="Temple offerings courtyard background" className="w-full h-full object-cover object-center filter blur-[1px] brightness-50" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <SectionHeading
          eyebrow="Vazhipadu"
          malayalam="വഴിപാട്"
          title="Sacred Offerings"
          description="Each offering carries a prayer, a vow, a quiet bargain with the divine. At Muthappan's feet, the simplest gift carries the same weight as the grandest."
        />

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-6 glass-sacred rounded-sm hover:border-gold/50 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute top-4 right-4 font-display text-xs text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <Flame className="w-5 h-5 text-gold mb-4" strokeWidth={1.5} />
              <p className="font-malayalam text-lg text-gold mb-1">{it.ml}</p>
              <h3 className="font-display text-base text-foreground tracking-wide mb-2">
                {it.en}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FESTIVAL --------------------------- */
function FestivalHighlight() {
  return (
    <section className="relative py-16 sm:py-28 px-6 md:px-8">
      <div className="max-w-7xl mx-auto relative rounded-sm overflow-hidden border border-gold/15 vignette bg-card/25 flex flex-col md:block">
        <div className="relative md:absolute md:inset-0 w-full aspect-[16/9] md:aspect-auto md:h-full">
          <img
            src={templeCourtyardLandscape}
            alt="Mandathra temple courtyard during festival preparations"
            className="w-full h-full object-cover object-[center_30%] md:animate-slow-zoom brightness-[0.6] md:brightness-[0.8]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-background/45 to-transparent hidden md:block" />

        <div className="relative z-10 flex items-center p-6 sm:p-10 md:p-16 md:min-h-[400px] lg:min-h-[460px]">
          <div className="max-w-xl">
            <p className="font-display text-[10px] sm:text-[11px] tracking-[0.4em] sm:tracking-[0.5em] text-gold/80 mb-3 uppercase">
              ✦ Annual Festival ✦
            </p>
            <p className="font-malayalam text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">വാർഷിക ഉത്സവം</p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl text-gradient-gold leading-[1.15] mb-4 sm:mb-5">
              Nights of Lamp & Drum
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6 text-sm sm:text-base">
              Each year, the Madappura erupts into days of ritual — Theyyam through the night,
              processions of caparisoned elephants, drumming that shakes the soil, and a sea of
              devotees united under one sacred sky.
            </p>
            <Link
              to="/festivals"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-gold/40 text-gold text-sm font-medium tracking-wide hover:bg-gold/10 transition-colors w-full sm:w-auto min-h-[48px]"
            >
              View festival calendar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- GALLERY --------------------------- */
function GalleryPreview() {
  const imgs = [
    { src: innerSanctumKalam, alt: "Inner sanctum peedham with kalam decoration" },
    { src: templeExterior, alt: "Mandathra temple main shrine" },
    { src: kalvilakkuCourtyard, alt: "Kalvilakku stone lamp in courtyard" },
    { src: templeCourtyardLandscape, alt: "Temple courtyard wide view" },
    { src: stoneLion, alt: "Gilded stone lion vahana sculpture" },
    { src: templeExteriorPortrait, alt: "Main Sreekovil vertical shot" }
  ];
  return (
    <section className="relative py-16 sm:py-28 max-w-7xl mx-auto px-6 md:px-8">
      <SectionHeading
        eyebrow="Gallery"
        malayalam="ചിത്രങ്ങൾ"
        title="Moments Touched by the Sacred"
      />
      <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {imgs.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className={`relative overflow-hidden rounded-sm border border-gold/10 group bg-card/45 ${
              i === 0 || i === 4 ? "md:row-span-2 md:aspect-[3/4] aspect-square" : "aspect-square"
            }`}
          >
            {(i === 0 || i === 4 || i === 2 || i === 5) ? (
              <div className="absolute inset-0 bg-cover bg-center blur-[6px] scale-105 opacity-30" style={{ backgroundImage: `url(${img.src})` }} />
            ) : null}
            <img
              src={img.src}
              alt={img.alt}
              className={`relative z-10 w-full h-full transition-transform duration-[1500ms] group-hover:scale-105 ${
                (i === 0 || i === 4 || i === 2 || i === 5) ? "object-contain p-1" : "object-cover"
              }`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity z-20" />
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold/40 text-gold text-sm font-medium tracking-wide hover:bg-gold/10 transition-colors"
        >
          View full gallery
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

/* --------------------------- TESTIMONIALS --------------------------- */
function Testimonials() {
  const items = [
    {
      ml: "മുത്തപ്പൻ എനിക്ക് ഒരു അച്ഛനാണ്.",
      quote:
        "Muthappan is not a god you visit; he is a presence that walks beside you. Mandathra is where I learned to bow.",
      who: "Devotee · Thrissur",
    },
    {
      ml: "ഇവിടെ എല്ലാവരും തുല്യരാണ്.",
      quote:
        "There is no rich, no poor, no caste at Mandathra. Only devotees and the embers of the sacred fire.",
      who: "Pilgrim · Kannur",
    },
    {
      ml: "തെയ്യം കാണുമ്പോൾ കണ്ണ് നിറയും.",
      quote:
        "When the Theyyam arrived, my tears came before my prayers. The god had returned to bless his children.",
      who: "Visitor · Kochi",
    },
  ];

  return (
    <section className="relative py-16 sm:py-28 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Voices of Devotion"
          malayalam="ഭക്തരുടെ വാക്കുകൾ"
          title="Whispers from the Madappura"
        />
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative p-8 glass-sacred rounded-sm"
            >
              <Quote className="w-7 h-7 text-gold/40 mb-4" />
              <p className="font-malayalam text-base text-gold/85 mb-3 leading-relaxed">
                {t.ml}
              </p>
              <p className="text-foreground/85 italic leading-relaxed text-sm mb-6">
                "{t.quote}"
              </p>
              <footer className="text-xs tracking-[0.25em] text-muted-foreground uppercase">
                — {t.who}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- TIMINGS --------------------------- */
function Timings() {
  const rows = [
    { ml: "പ്രഭാത പൂജ", en: "Morning Pooja", time: "5:30 AM – 9:00 AM" },
    { ml: "ഉച്ച പൂജ", en: "Noon Pooja", time: "11:00 AM – 12:30 PM" },
    { ml: "സന്ധ്യ ദീപാരാധന", en: "Evening Deeparadhana", time: "6:30 PM – 8:00 PM" },
    { ml: "തെയ്യം ദിനങ്ങൾ", en: "Theyyam Days", time: "Announced Annually" },
  ];

  return (
    <section className="relative py-16 sm:py-28 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Daily Rituals"
          malayalam="ക്ഷേത്ര സമയം"
          title="Temple Timings"
        />
        <div className="mt-10 sm:mt-14 glass-sacred rounded-sm overflow-hidden">
          {rows.map((r, i) => (
            <div
              key={r.en}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 px-4 sm:px-8 py-4 sm:py-5 ${
                i !== rows.length - 1 ? "border-b border-gold/10" : ""
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <Clock className="w-4.5 h-4.5 text-gold shrink-0" />
                <div>
                  <p className="font-malayalam text-xs sm:text-sm text-gold/80">{r.ml}</p>
                  <p className="font-display text-sm sm:text-base tracking-wider text-foreground">{r.en}</p>
                </div>
              </div>
              <div className="font-display text-xs sm:text-sm tracking-wider sm:tracking-[0.18em] text-muted-foreground pl-7 sm:pl-0 sm:text-right">
                {r.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- CONTACT STRIP --------------------------- */
function ContactStrip() {
  return (
    <section className="relative py-16 sm:py-28 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="glass-sacred rounded-sm p-6 sm:p-10"
        >
          <p className="font-display text-[11px] tracking-[0.5em] text-gold/80 mb-3 uppercase">
            ✦ Visit ✦
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-gradient-gold mb-6">
            Find Your Way to the Madappura
          </h3>
          <div className="space-y-5 text-sm">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-malayalam text-gold/85 mb-0.5">സ്ഥലം (മേൽവിലാസം)</p>
                <p className="text-foreground/85 leading-relaxed">
                  മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം, പി.ഒ. കൂളിമട്ടം, തൃശ്ശൂർ - 680691
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 font-display tracking-wide">
                  Mandathra Sree Muthappan Bhagavathi Temple, P.O. Koolimuttam, Thrissur - 680691
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-malayalam text-gold/85 mb-0.5">ഫോൺ (സെക്രട്ടറി)</p>
                <a href="tel:+919495224141" className="text-foreground/85 hover:text-gold transition-colors font-medium">
                  +91 94952 24141
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://share.google/ykFbz9xgrCEjdyXmx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-gold text-background font-medium text-sm tracking-wide glow-lamp hover:brightness-110 transition-all duration-300"
          >
            Get Directions <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="rounded-sm overflow-hidden border border-gold/15 min-h-[360px] relative group"
        >
          <iframe
            title="Mandathra Temple location"
            src="https://www.google.com/maps?q=Mandathra+Sree+Muthappan+Bhagavathi+Temple+Koolimuttam&output=embed"
            className="w-full h-full min-h-[360px] grayscale-[0.4] contrast-90"
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
    </section>
  );
}
