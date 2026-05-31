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
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="font-display text-[11px] font-bold uppercase text-temple-red">
          {eyebrow}
        </p>
      )}
      {malayalam && (
        <p className="mt-2 font-malayalam text-base font-semibold text-gold md:text-lg">
          {malayalam}
        </p>
      )}
      <h2 className="mt-3 font-malayalam text-fluid-h2 font-bold text-temple-red">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-fluid-body text-muted-foreground">{description}</p>
      )}
      <div className={`mt-7 h-px w-28 ornate-divider ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
