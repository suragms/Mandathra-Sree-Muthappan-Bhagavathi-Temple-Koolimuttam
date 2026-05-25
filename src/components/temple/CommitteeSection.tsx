import { motion } from "framer-motion";
import { Phone, MapPin, Shield, Users, Award } from "lucide-react";

interface CommitteeMember {
  id: number;
  nameMl: string;
  nameEn: string;
  roleMl: string;
  roleEn: string;
  phone: string;
  placeMl: string;
  placeEn: string;
  isOfficer: boolean;
}

const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    nameMl: "എം.വി. സതീഷ്കുമാർ",
    nameEn: "M.V. Satheeshkumar",
    roleMl: "പ്രസിഡൻ്റ്",
    roleEn: "President",
    phone: "9048055144",
    placeMl: "കൊടുങ്ങല്ലൂർ",
    placeEn: "Kodungallur",
    isOfficer: true,
  },
  {
    id: 2,
    nameMl: "എം.ആർ. സന്തോഷ്",
    nameEn: "M.R. Santhosh",
    roleMl: "സെക്രട്ടറി",
    roleEn: "Secretary",
    phone: "9495224141",
    placeMl: "കൂളിമുട്ടം",
    placeEn: "Koolimuttam",
    isOfficer: true,
  },
  {
    id: 3,
    nameMl: "എം.എസ്. പ്രഭാകരൻ",
    nameEn: "M.S. Prabhakaran",
    roleMl: "ട്രഷറർ",
    roleEn: "Treasurer",
    phone: "7907338712",
    placeMl: "കൂളിമുട്ടം",
    placeEn: "Koolimuttam",
    isOfficer: true,
  },
  {
    id: 4,
    nameMl: "അജിത പ്രഭാകരൻ",
    nameEn: "Ajitha Prabhakaran",
    roleMl: "വൈസ് പ്രസിഡൻ്റ്",
    roleEn: "Vice President",
    phone: "9747611856",
    placeMl: "കൂളിമുട്ടം",
    placeEn: "Koolimuttam",
    isOfficer: true,
  },
  {
    id: 5,
    nameMl: "ശാലിനി ഉണ്ണികൃഷ്ണൻ",
    nameEn: "Shalini Unnikrishnan",
    roleMl: "ജോയിൻ്റ് സെക്രട്ടറി",
    roleEn: "Joint Secretary",
    phone: "9497559878",
    placeMl: "കാര",
    placeEn: "Kara",
    isOfficer: true,
  },
  {
    id: 6,
    nameMl: "എം.എസ്. കൃഷ്ണൻ",
    nameEn: "M.S. Krishnan",
    roleMl: "ഭരണസമിതി അംഗം",
    roleEn: "Committee Member",
    phone: "9562198013",
    placeMl: "എസ്.എൻ.പുരം",
    placeEn: "S.N. Puram",
    isOfficer: false,
  },
  {
    id: 7,
    nameMl: "അനിത ഷൺമുഖൻ",
    nameEn: "Anitha Shanmughan",
    roleMl: "ഭരണസമിതി അംഗം",
    roleEn: "Committee Member",
    phone: "6282358380",
    placeMl: "കൂളിമുട്ടം",
    placeEn: "Koolimuttam",
    isOfficer: false,
  },
  {
    id: 8,
    nameMl: "ബീന ഹരിലാൽ",
    nameEn: "Beena Harilal",
    roleMl: "ഭരണസമിതി അംഗം",
    roleEn: "Committee Member",
    phone: "8590064710",
    placeMl: "പി. വെമ്പല്ലൂർ",
    placeEn: "P. Vempallur",
    isOfficer: false,
  },
  {
    id: 9,
    nameMl: "എം.വി. ഉണ്ണികൃഷ്ണൻ",
    nameEn: "M.V. Unnikrishnan",
    roleMl: "ഭരണസമിതി അംഗം",
    roleEn: "Committee Member",
    phone: "9447673806",
    placeMl: "കാര",
    placeEn: "Kara",
    isOfficer: false,
  },
  {
    id: 10,
    nameMl: "എം.യു. ബാബു",
    nameEn: "M.U. Babu",
    roleMl: "ഭരണസമിതി അംഗം",
    roleEn: "Committee Member",
    phone: "9895511002",
    placeMl: "കാര",
    placeEn: "Kara",
    isOfficer: false,
  },
  {
    id: 11,
    nameMl: "എം.ആർ. ശിവദാസൻ",
    nameEn: "M.R. Sivadasan",
    roleMl: "ഭരണസമിതി അംഗം",
    roleEn: "Committee Member",
    phone: "9980293350",
    placeMl: "എടവിലങ്ങ്",
    placeEn: "Edavilangu",
    isOfficer: false,
  },
];

interface CommitteeSectionProps {
  showTitle?: boolean;
}

export function CommitteeSection({ showTitle = true }: CommitteeSectionProps) {
  const officers = committeeMembers.filter((m) => m.isOfficer);
  const generalMembers = committeeMembers.filter((m) => !m.isOfficer);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Decorative Lamp Glow Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      {showTitle && (
        <div className="text-center mb-16 relative z-10">
          <span className="font-display text-sm tracking-[0.25em] text-gold uppercase mb-3 block">
            Temple Management
          </span>
          <h2 className="font-malayalam text-3xl md:text-5xl text-gradient-gold font-bold mb-4">
            ക്ഷേത്ര ഭരണസമിതി 2026
          </h2>
          <div className="ornate-divider w-48 mx-auto mb-6" />
          <p className="font-malayalam text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            “2026 ഏപ്രിൽ 06 തിങ്കളാഴ്ച രാവിലെ 10 മണിക്ക് ക്ഷേത്ര ഓഫീസിൽ വെച്ച് പ്രസിഡൻ്റ് എം.എസ് കൃഷ്ണൻ്റെ അധ്യക്ഷതയിൽ ചേർന്ന പൊതുയോഗത്തിൽ ഐക്യകണ്ഠേന തെരഞ്ഞെടുത്ത പുതിയ ക്ഷേത്ര ഭരണസമിതി അംഗങ്ങൾ”
          </p>
        </div>
      )}

      {/* Office Bearers Grid */}
      <div className="mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start border-b border-gold/10 pb-3">
          <Shield className="w-5 h-5 text-gold" />
          <h3 className="font-malayalam text-xl md:text-2xl text-gold font-semibold">
            ഭാരവാഹികൾ <span className="font-display text-sm font-normal tracking-wide text-muted-foreground ml-2">/ Office Bearers</span>
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
        >
          {/* President Card - Center or First */}
          {officers.slice(0, 1).map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="md:col-span-2 lg:col-span-3 flex justify-center mb-4"
            >
              <div className="w-full max-w-md glass-sacred p-5 sm:p-6 rounded-sm relative overflow-hidden border border-gold/30 hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] group">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-all duration-500" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gold/10 text-gold border border-gold/25 group-hover:scale-110 transition-transform duration-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-gold/15 text-gold border border-gold/30">
                      {member.roleMl} / {member.roleEn}
                    </span>
                    <h4 className="font-malayalam text-lg md:text-xl text-gradient-gold font-bold">
                      {member.nameMl}
                    </h4>
                    <p className="text-xs text-muted-foreground font-display tracking-widest uppercase">
                      {member.nameEn}
                    </p>
                    <div className="pt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold/60 shrink-0" />
                        <span className="font-malayalam">{member.placeMl}</span>
                        <span className="text-xs text-gold/40">| {member.placeEn}</span>
                      </div>
                      <a
                        href={`tel:+91${member.phone}`}
                        className="flex items-center gap-2 hover:text-gold transition-colors w-fit group/phone"
                      >
                        <Phone className="w-4 h-4 text-gold/60 shrink-0 group-hover/phone:animate-pulse" />
                        <span className="font-body text-sm font-medium tracking-wide">
                          +91 {member.phone}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Secretary & Treasurer Cards */}
          {officers.slice(1, 3).map((member) => (
            <motion.div key={member.id} variants={cardVariants} className="col-span-1">
              <div className="glass-sacred p-6 rounded-sm relative overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group h-full">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-all duration-500" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gold/10 text-gold border border-gold/20 group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-gold/10 text-gold border border-gold/20">
                      {member.roleMl} / {member.roleEn}
                    </span>
                    <h4 className="font-malayalam text-lg text-gradient-gold font-bold">
                      {member.nameMl}
                    </h4>
                    <p className="text-xs text-muted-foreground font-display tracking-widest uppercase">
                      {member.nameEn}
                    </p>
                    <div className="pt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold/60 shrink-0" />
                        <span className="font-malayalam">{member.placeMl}</span>
                        <span className="text-xs text-gold/40">| {member.placeEn}</span>
                      </div>
                      <a
                        href={`tel:+91${member.phone}`}
                        className="flex items-center gap-2 hover:text-gold transition-colors w-fit group/phone"
                      >
                        <Phone className="w-4 h-4 text-gold/60 shrink-0 group-hover/phone:animate-pulse" />
                        <span className="font-body text-sm font-medium tracking-wide">
                          +91 {member.phone}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Vice President & Joint Secretary Cards */}
          {officers.slice(3).map((member) => (
            <motion.div key={member.id} variants={cardVariants} className="col-span-1">
              <div className="glass-sacred p-6 rounded-sm relative overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group h-full">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-all duration-500" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-gold/10 text-gold border border-gold/20 group-hover:scale-110 transition-transform duration-500">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium bg-gold/10 text-gold border border-gold/20">
                      {member.roleMl} / {member.roleEn}
                    </span>
                    <h4 className="font-malayalam text-lg text-gradient-gold font-bold">
                      {member.nameMl}
                    </h4>
                    <p className="text-xs text-muted-foreground font-display tracking-widest uppercase">
                      {member.nameEn}
                    </p>
                    <div className="pt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gold/60 shrink-0" />
                        <span className="font-malayalam">{member.placeMl}</span>
                        <span className="text-xs text-gold/40">| {member.placeEn}</span>
                      </div>
                      <a
                        href={`tel:+91${member.phone}`}
                        className="flex items-center gap-2 hover:text-gold transition-colors w-fit group/phone"
                      >
                        <Phone className="w-4 h-4 text-gold/60 shrink-0 group-hover/phone:animate-pulse" />
                        <span className="font-body text-sm font-medium tracking-wide">
                          +91 {member.phone}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* General Committee Members */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start border-b border-gold/10 pb-3">
          <Users className="w-5 h-5 text-gold" />
          <h3 className="font-malayalam text-xl md:text-2xl text-gold font-semibold">
            ഭരണസമിതി അംഗങ്ങൾ <span className="font-display text-sm font-normal tracking-wide text-muted-foreground ml-2">/ Committee Members</span>
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {generalMembers.map((member) => (
            <motion.div key={member.id} variants={cardVariants} className="col-span-1">
              <div className="glass-sacred p-5 rounded-sm relative overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-500 hover:shadow-[0_0_15px_rgba(212,175,55,0.05)] group h-full">
                <div className="absolute -top-12 -right-12 w-20 h-20 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-all duration-500" />
                <div className="space-y-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-gold/5 text-gold/80 border border-gold/10">
                    {member.roleMl}
                  </span>
                  <h4 className="font-malayalam text-base text-foreground font-bold group-hover:text-gold transition-colors">
                    {member.nameMl}
                  </h4>
                  <p className="text-[10px] text-muted-foreground font-display tracking-widest uppercase">
                    {member.nameEn}
                  </p>
                  <div className="pt-2 flex flex-col gap-1.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gold/40 shrink-0" />
                      <span className="font-malayalam">{member.placeMl}</span>
                      <span className="text-[10px] text-gold/30">| {member.placeEn}</span>
                    </div>
                    <a
                      href={`tel:+91${member.phone}`}
                      className="flex items-center gap-2 hover:text-gold transition-colors w-fit group/phone"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold/40 shrink-0 group-hover/phone:animate-pulse" />
                      <span className="font-body tracking-wide font-medium">+91 {member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Ornate Bottom Seal */}
      <div className="flex flex-col items-center justify-center mt-20 relative z-10">
        <div className="ornate-divider w-32 mb-4" />
        <p className="font-malayalam text-xs text-gold/50 tracking-wider">
          മണ്ടത്ര ശ്രീ മുത്തപ്പൻ ഭഗവതി ക്ഷേത്ര കമ്മിറ്റി
        </p>
        <p className="text-[10px] text-muted-foreground font-body tracking-widest uppercase mt-1">
          Reg No: 603/99 · Koolimuttam, Thrissur
        </p>
      </div>
    </div>
  );
}
