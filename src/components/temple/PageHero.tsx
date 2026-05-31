import { motion } from "framer-motion";
import { TempleLogo } from "./TempleLogo";

interface Props {
  image: string;
  malayalam: string;
  english: string;
  subtitle?: string;
}

export function PageHero({ image, malayalam, english, subtitle }: Props) {
  return (
    <section className="relative flex min-h-[440px] items-end overflow-hidden bg-temple-red pt-28 text-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-6 pb-16 md:grid-cols-[1fr_auto] md:items-end md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="font-malayalam text-xl font-bold text-gold md:text-2xl">{malayalam}</p>
          <h1 className="mt-2 font-display text-fluid-hero font-bold">{english}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-fluid-body text-white/86">{subtitle}</p>}
        </motion.div>
        <TempleLogo variant="icon" className="hidden h-24 w-24 md:block" />
      </div>
    </section>
  );
}
