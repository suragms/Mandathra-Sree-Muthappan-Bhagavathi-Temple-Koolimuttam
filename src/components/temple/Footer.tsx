import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { TempleLogo } from "@/components/temple/TempleLogo";
import { temple } from "@/lib/temple-data";

const quickLinks = [
  { to: "/about", label: "About Temple" },
  { to: "/administration", label: "Committee Members" },
  { to: "/festivals", label: "Festivals" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-gold/30 bg-[#4f0606] text-white">
      <div className="kerala-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_0.8fr_1fr] md:px-8">
          <div>
            <TempleLogo variant="horizontal" className="[&_*]:text-white [&_img]:bg-black" />
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/78">
              A devotional Kerala temple space for Sree Muthappan and Bhagavathi, maintained by
              the Mandathra temple committee with faith, service, and community care.
            </p>
            <p className="mt-4 font-malayalam text-sm text-gold">{temple.addressMl}</p>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase text-gold">Quick Links</h2>
            <ul className="mt-5 grid gap-3 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-bold uppercase text-gold">Contact</h2>
            <ul className="mt-5 grid gap-4 text-sm text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>{temple.addressEn}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <a href="tel:+919495224141" className="hover:text-gold">
                  {temple.phoneSecretary}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <a href={`mailto:${temple.email}`} className="hover:text-gold">
                  {temple.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} {temple.nameEn}. All rights reserved.</p>
          <p>Visitor counter: 60399 · Reg No: {temple.regNo}</p>
        </div>
      </div>
    </footer>
  );
}
