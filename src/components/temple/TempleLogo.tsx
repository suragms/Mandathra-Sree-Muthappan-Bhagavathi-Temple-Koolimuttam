import { temple, media } from "@/lib/temple-data";

interface TempleLogoProps {
  variant?: "main" | "horizontal" | "navbar" | "mobile" | "icon";
  className?: string;
}

export function TempleLogo({ variant = "main", className = "" }: TempleLogoProps) {
  const img = (
    <img
      src={media.logo}
      alt={`${temple.nameMl} logo`}
      className="h-full w-full rounded-full object-cover"
      width={variant === "main" ? 180 : 72}
      height={variant === "main" ? 180 : 72}
      loading="eager"
      decoding="async"
    />
  );

  if (variant === "icon") {
    return (
      <span className={`block overflow-hidden rounded-full border-2 border-gold bg-black shadow-lg ${className}`}>
        {img}
      </span>
    );
  }

  if (variant === "navbar" || variant === "mobile") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="block h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-black shadow-md">
          {img}
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block font-malayalam text-[13px] font-bold text-temple-red sm:text-sm">
            {temple.shortNameMl}
          </span>
          <span className="block truncate font-display text-[10px] font-semibold uppercase text-muted-foreground">
            Reg No: {temple.regNo}
          </span>
        </span>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <span className="block h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-black shadow-md">
          {img}
        </span>
        <span>
          <span className="block font-malayalam text-lg font-bold text-temple-red">
            {temple.shortNameMl}
          </span>
          <span className="block font-display text-xs font-semibold uppercase text-muted-foreground">
            {temple.shortNameEn} · {temple.addressEn}
          </span>
        </span>
      </div>
    );
  }

  return (
    <div className={`mx-auto flex max-w-xl flex-col items-center text-center ${className}`}>
      <span className="block h-32 w-32 overflow-hidden rounded-full border-4 border-gold bg-black shadow-2xl sm:h-40 sm:w-40">
        {img}
      </span>
      <h1 className="mt-6 font-malayalam text-fluid-h2 font-bold text-temple-red">
        {temple.nameMl}
      </h1>
      <p className="mt-2 font-display text-xs font-semibold uppercase text-muted-foreground">
        Reg No: {temple.regNo} · {temple.addressEn}
      </p>
    </div>
  );
}
