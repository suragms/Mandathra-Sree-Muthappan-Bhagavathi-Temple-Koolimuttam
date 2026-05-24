import { motion } from "framer-motion";

interface TempleLogoProps {
  variant?: "main" | "horizontal" | "navbar" | "mobile" | "icon";
  className?: string;
}

export function TempleLogo({ variant = "main", className = "" }: TempleLogoProps) {
  // Common SVG Emblem Component
  const renderEmblem = (size: number) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className="shrink-0 transition-all duration-700 select-none drop-shadow-[0_0_15px_rgba(212,175,55,0.15)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Top arc for Malayalam text (clockwise) */}
        <path id="top-text-path" d="M 32 100 A 68 68 0 0 1 168 100" fill="none" />
        {/* Bottom arc for English text (counter-clockwise/upright) */}
        <path id="bottom-text-path" d="M 32 100 A 68 68 0 0 0 168 100" fill="none" />
        
        {/* Gold Gradients */}
        <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
        
        <linearGradient id="logo-gold-glow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="logo-flame-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF5C3" />
          <stop offset="35%" stopColor="#FFC83B" />
          <stop offset="70%" stopColor="#FF5E36" />
          <stop offset="100%" stopColor="#B31010" />
        </linearGradient>

        {/* Radial Glow Filter */}
        <filter id="sacred-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <style>{`
        @keyframes flame-flicker {
          0%, 100% {
            transform: scale(1) translate(0px, 0px);
            opacity: 0.95;
          }
          20% {
            transform: scale(1.05) translate(-0.5px, -0.3px);
            opacity: 1;
          }
          40% {
            transform: scale(0.96) translate(0.3px, 0px);
            opacity: 0.9;
          }
          60% {
            transform: scale(1.03) translate(-0.2px, -0.6px);
            opacity: 0.98;
          }
          80% {
            transform: scale(0.97) translate(0.4px, 0.2px);
            opacity: 0.92;
          }
        }
        .flame-element {
          animation: flame-flicker 2.8s ease-in-out infinite;
          transform-origin: 100px 76px;
        }
        .flame-element-inner {
          animation: flame-flicker 2s ease-in-out infinite alternate;
          transform-origin: 100px 74px;
          animation-delay: 0.15s;
        }
        .ray-item {
          transition: opacity 0.5s ease;
        }
      `}</style>

      {/* Background Spiritual Halo Glow */}
      <circle cx="100" cy="100" r="82" fill="url(#logo-gold-glow)" opacity="0.4" className="glow-aura" />

      {/* Outermost Ring */}
      <circle cx="100" cy="100" r="92" fill="none" stroke="url(#logo-gold)" strokeWidth="1.5" />
      
      {/* Dashed Inner Ring (Beaded detailing representing traditional brass carvings) */}
      <circle cx="100" cy="100" r="87" fill="none" stroke="url(#logo-gold)" strokeWidth="1" strokeDasharray="2, 3" opacity="0.8" />
      
      {/* Solid text boundary ring */}
      <circle cx="100" cy="100" r="77" fill="none" stroke="url(#logo-gold)" strokeWidth="1" opacity="0.6" />

      {/* Curved Text */}
      <text fontStyle="normal" fontWeight="700">
        <textPath
          href="#top-text-path"
          startOffset="50%"
          textAnchor="middle"
          fill="#F5E9C9"
          style={{
            fontFamily: '"Manjari", "Noto Sans Malayalam", sans-serif',
            fontSize: '8px',
            letterSpacing: '0.8px'
          }}
        >
          മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം
        </textPath>
      </text>

      <text fontStyle="normal" fontWeight="600">
        <textPath
          href="#bottom-text-path"
          startOffset="50%"
          textAnchor="middle"
          fill="url(#logo-gold)"
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: '6.5px',
            letterSpacing: '2.5px'
          }}
        >
          KOOLIMUTTAM • THRISSUR
        </textPath>
      </text>

      {/* Inner Crest Solid Ring */}
      <circle cx="100" cy="100" r="54" fill="#0B0A07" stroke="url(#logo-gold)" strokeWidth="1.25" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="url(#logo-gold)" strokeWidth="0.5" strokeDasharray="1, 2" opacity="0.5" />

      {/* Theyyam Thirumudi Arches & Rays (Muthappan Crown) */}
      <g stroke="url(#logo-gold)" fill="none" strokeLinecap="round" opacity="0.75">
        {/* Double Halo Arcs */}
        <path d="M 68 112 A 34 34 0 0 1 132 112" strokeWidth="1" strokeDasharray="1.5, 2.5" />
        <path d="M 62 112 A 40 40 0 0 1 138 112" strokeWidth="1.2" />
        
        {/* Thirumudi Spokes (Halo rays radiating outwards) */}
        {/* Center top */}
        <line x1="100" y1="72" x2="100" y2="65" strokeWidth="1.5" className="ray-item" />
        {/* Angles */}
        <line x1="88" y1="75" x2="84" y2="69" strokeWidth="1.2" className="ray-item" />
        <line x1="112" y1="75" x2="116" y2="69" strokeWidth="1.2" className="ray-item" />
        <line x1="78" y1="84" x2="73" y2="79" strokeWidth="1.2" className="ray-item" />
        <line x1="122" y1="84" x2="127" y2="79" strokeWidth="1.2" className="ray-item" />
        <line x1="72" y1="96" x2="66" y2="93" strokeWidth="1.2" className="ray-item" />
        <line x1="128" y1="96" x2="134" y2="93" strokeWidth="1.2" className="ray-item" />
      </g>

      {/* Nilavilakku (Traditional Kerala Brass Lamp) */}
      <g>
        {/* 3-Stepped Pedestal Base */}
        <path
          d="M 83 148 L 117 148 L 114 142 H 86 Z"
          fill="url(#logo-gold)"
        />
        <path
          d="M 87 142 L 113 142 L 110 136 H 90 Z"
          fill="url(#logo-gold)"
          opacity="0.9"
        />
        <path
          d="M 91 136 L 109 136 L 106 130 H 94 Z"
          fill="url(#logo-gold)"
          opacity="0.8"
        />

        {/* Shaft / Stem */}
        <path
          d="M 98 130 H 102 V 96 H 98 Z"
          fill="url(#logo-gold)"
        />
        
        {/* Decorative Ring collars on Shaft */}
        <path d="M 96 119 H 104 V 121 H 96 Z" fill="url(#logo-gold)" />
        <path d="M 96 106 H 104 V 108 H 96 Z" fill="url(#logo-gold)" opacity="0.9" />

        {/* Oil Bowl (Thattu) */}
        <path
          d="M 82 96 C 82 96 82 105 100 105 C 118 105 118 96 118 96 Z"
          fill="url(#logo-gold)"
        />
        {/* Lip of the cup */}
        <path
          d="M 80 93 H 120 V 96 H 80 Z"
          fill="url(#logo-gold)"
        />

        {/* Glowing Oil Lamp Flame */}
        {/* Outer glowing flame (semi-transparent orange-yellow glow) */}
        <path
          d="M 100 58 C 93 72 96 86 100 86 C 104 86 107 72 100 58 Z"
          fill="url(#logo-flame-grad)"
          filter="url(#sacred-glow)"
          className="flame-element"
          opacity="0.9"
        />
        {/* Inner intense flame core (temple red and bright cream) */}
        <path
          d="M 100 66 C 96 74 97 84 100 84 C 103 84 104 74 100 66 Z"
          fill="#FFF5C3"
          className="flame-element-inner"
          opacity="0.95"
        />
      </g>
    </svg>
  );

  switch (variant) {
    case "icon":
      return (
        <div className={`logo-hover relative flex items-center justify-center ${className}`}>
          {renderEmblem(180)}
        </div>
      );

    case "navbar":
      return (
        <div className={`logo-hover flex items-center gap-3 transition-colors ${className}`}>
          <div className="relative hover:glow-lamp rounded-full transition-all duration-500">
            {renderEmblem(42)}
          </div>
          <div className="leading-tight flex flex-col text-left">
            <span className="font-display text-[13px] sm:text-[14px] font-bold tracking-[0.2em] text-gradient-gold uppercase leading-none">
              Mandathra
            </span>
            <span className="font-malayalam text-[9px] sm:text-[10px] text-muted-foreground tracking-wide mt-0.5 leading-none">
              ശ്രീ മുത്തപ്പൻ ക്ഷേത്രം
            </span>
          </div>
        </div>
      );

    case "mobile":
      return (
        <div className={`logo-hover flex items-center gap-2.5 ${className}`}>
          {renderEmblem(34)}
          <div className="leading-tight flex flex-col text-left">
            <span className="font-display text-[12px] font-bold tracking-[0.16em] text-gradient-gold uppercase leading-none">
              Mandathra
            </span>
            <span className="font-malayalam text-[9px] text-muted-foreground mt-0.5 leading-none">
              ശ്രീ മുത്തപ്പൻ
            </span>
          </div>
        </div>
      );

    case "horizontal":
      return (
        <div className={`logo-hover flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left ${className}`}>
          <div className="relative rounded-full transition-transform duration-500 group-hover:scale-105">
            {renderEmblem(72)}
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-col leading-tight mb-1.5">
              <span className="font-display text-[15px] font-semibold tracking-[0.18em] text-gradient-gold uppercase">
                MANDATHRA KSHETHRAM
              </span>
              <span className="font-malayalam text-xs text-muted-foreground mt-1">
                ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം
              </span>
            </div>
            <span className="font-display text-[9px] sm:text-[10px] tracking-[0.25em] text-gold/60 uppercase">
              Koolimuttam • Thrissur
            </span>
          </div>
        </div>
      );

    case "main":
    default:
      return (
        <div className={`logo-hover flex flex-col items-center text-center max-w-lg mx-auto ${className}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative p-2 bg-gradient-to-b from-gold/5 to-transparent rounded-full mb-8 glow-lamp"
          >
            {renderEmblem(160)}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-malayalam text-2xl sm:text-4xl text-gradient-gold leading-normal glow-text mb-4">
              മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്രം
            </h1>
            <h2 className="font-display text-base sm:text-lg tracking-[0.22em] text-gold/90 uppercase mb-2">
              Mandathra Sree Muthappan Bhagavathi Temple
            </h2>
            <p className="font-display text-[10px] sm:text-xs tracking-[0.45em] text-foreground/50 uppercase mb-5">
              MANDATHRA KSHETHRAM
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold/25" />
              <span className="font-display text-[10px] sm:text-xs tracking-[0.3em] text-muted-foreground uppercase">
                Koolimuttam • Thrissur
              </span>
              <span className="h-px w-8 bg-gold/25" />
            </div>
          </motion.div>
        </div>
      );
  }
}
