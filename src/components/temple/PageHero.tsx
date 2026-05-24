import { motion } from "framer-motion";
import { Particles } from "./Particles";

interface Props {
  image: string;
  malayalam: string;
  english: string;
  subtitle?: string;
}

export function PageHero({ image, malayalam, english, subtitle }: Props) {
  const isPortrait = image.includes("portrait") || 
                     image.includes("kalam") || 
                     image.includes("lion") || 
                     image.includes("kalvilakku") || 
                     image.includes("APNQkAG") || 
                     image.includes("APNQkAH") ||
                     image.includes("w141");

  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden vignette smoke-overlay bg-card">
      {/* Blurred background copy for small/portrait images */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-105 opacity-40 animate-slow-zoom brightness-50"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* The main image, contained if portrait, covered if landscape */}
      <div
        className={`absolute inset-0 bg-center animate-slow-zoom ${
          isPortrait ? "bg-contain py-4" : "bg-cover"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/45 to-background/95 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.12)_0%,transparent_60%)] pointer-events-none z-10" />
      
      <Particles count={16} />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-malayalam text-lg md:text-2xl text-gold/90 mb-4 glow-text"
        >
          {malayalam}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl text-gradient-gold tracking-wide"
        >
          {english}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-5 max-w-2xl text-foreground/75 text-sm md:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
