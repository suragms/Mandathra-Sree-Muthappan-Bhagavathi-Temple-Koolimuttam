import { motion } from "framer-motion";
import { Award, MapPin, Phone, Shield, Users } from "lucide-react";
import { committeeMembers, temple } from "@/lib/temple-data";
import { SectionHeading } from "./SectionHeading";

interface CommitteeSectionProps {
  showTitle?: boolean;
}

export function CommitteeSection({ showTitle = true }: CommitteeSectionProps) {
  const officers = committeeMembers.filter((member) => member.officer);
  const members = committeeMembers.filter((member) => !member.officer);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      {showTitle && (
        <SectionHeading
          eyebrow="Temple Management"
          malayalam="ക്ഷേത്ര ഭരണസമിതി 2026"
          title="Office bearers and executive members"
          description={`Reg No: ${temple.regNo}. The committee serves devotees, coordinates festivals, and maintains the temple's daily devotional activities.`}
        />
      )}

      <div className="mt-12">
        <div className="mb-6 flex items-center gap-3 border-b border-gold/30 pb-3">
          <Shield className="h-5 w-5 text-gold" />
          <h3 className="font-malayalam text-2xl font-bold text-temple-red">ഭാരവാഹികൾ</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {officers.map((member, index) => (
            <MemberCard key={member.phone} member={member} index={index} featured={index === 0} />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-6 flex items-center gap-3 border-b border-gold/30 pb-3">
          <Users className="h-5 w-5 text-gold" />
          <h3 className="font-malayalam text-2xl font-bold text-temple-red">എക്സിക്യൂട്ടീവ് അംഗങ്ങൾ</h3>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <MemberCard key={member.phone} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MemberCard({
  member,
  index,
  featured = false,
}: {
  member: (typeof committeeMembers)[number];
  index: number;
  featured?: boolean;
}) {
  const Icon = featured ? Award : Shield;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.05, 0.25) }}
      className={`temple-card rounded-lg p-6 ${featured ? "lg:col-span-1 border-gold/60" : ""}`}
    >
      <Icon className="h-7 w-7 text-gold" />
      <p className="mt-4 font-malayalam text-base font-bold text-temple-red">{member.roleMl}</p>
      <p className="text-xs font-bold uppercase text-muted-foreground">{member.roleEn}</p>
      <h4 className="mt-4 font-malayalam text-xl font-bold text-foreground">{member.nameMl}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{member.nameEn}</p>
      <div className="mt-5 grid gap-2 text-sm">
        <p className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-gold" />
          {member.place}
        </p>
        <a href={`tel:+91${member.phone}`} className="flex items-center gap-2 font-bold text-temple-red">
          <Phone className="h-4 w-4 text-gold" />
          +91 {member.phone}
        </a>
      </div>
    </motion.article>
  );
}
