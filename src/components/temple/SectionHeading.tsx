import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  malayalam?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({
  malayalam,
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="font-display text-[11px] tracking-[0.5em] text-gold/80 mb-4 uppercase">
          ✦ {eyebrow} ✦
        </p>
      )}
      {malayalam && (
        <p className="font-malayalam text-base md:text-lg text-muted-foreground mb-3">
          {malayalam}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl text-gradient-gold leading-[1.15] mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-foreground/75 leading-relaxed text-base md:text-lg">{description}</p>
      )}
      <div className={`mt-6 h-px ${align === "center" ? "mx-auto" : ""} w-24 ornate-divider`} />
    </motion.div>
  );
}
