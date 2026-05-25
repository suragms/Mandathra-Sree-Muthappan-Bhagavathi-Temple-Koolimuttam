import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { TempleLogo } from "@/components/temple/TempleLogo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-gold/15 bg-background">
      <div className="ornate-divider" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2">
          <TempleLogo variant="horizontal" className="mb-5" />
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            A sacred Koolimuttam temple rooted in Kerala's spiritual soil, where Muthappan walks among
            devotees as the divine protector of the humble.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.25em] text-gold mb-4">VISIT</h4>
          <ul className="space-y-3.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-gold transition-colors py-1.5 block">About Temple</Link></li>
            <li><Link to="/administration" className="hover:text-gold transition-colors py-1.5 block">Administration</Link></li>
            <li><Link to="/theyyam" className="hover:text-gold transition-colors py-1.5 block">Theyyam Tradition</Link></li>
            <li><Link to="/offerings" className="hover:text-gold transition-colors py-1.5 block">Vazhipadu</Link></li>
            <li><Link to="/festivals" className="hover:text-gold transition-colors py-1.5 block">Festivals</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors py-1.5 block">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-[0.25em] text-gold mb-4">CONTACT</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">Mandathra, Koolimuttam, Thrissur - 680691</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <a href="tel:+919495224141" className="hover:text-gold transition-colors py-1.5 block font-medium">+91 94952 24141 (Sec)</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <a href="mailto:info@mandathratemple.org" className="hover:text-gold transition-colors py-1.5 block">info@mandathratemple.org</a>
            </li>
            <li className="flex gap-3 items-center text-xs text-gold/60 pt-2.5 border-t border-gold/10">
              <span>Reg No: 603/99</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6 px-6 pb-[calc(env(safe-area-inset-bottom,0rem)+1.5rem)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mandathra Sree Muthappan Bhagavathi Temple</p>
          <p className="font-malayalam tracking-wide">Designed with devotion · ഭക്തിയോടെ നിർമ്മിച്ചത്</p>
        </div>
      </div>
    </footer>
  );
}
