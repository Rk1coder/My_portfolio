import { motion } from "framer-motion";
import ProfileCard from "@/components/ui/profile-card";
import SpotlightCard from "@/components/ui/spotlight-card";
import ScrollReveal from "@/components/text-animations/ScrollReveal";
import CountUp from "@/components/text-animations/CountUp";
import AnimatedContent from "@/components/animations/AnimatedContent";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Shield, Wrench, Trophy, BookOpen, Plane } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    label: "Frontend & Mobil",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Flutter", "Redux"],
  },
  {
    icon: Cpu,
    label: "Backend & Gömülü",
    skills: ["C++", "Python", "C", "C#", "Django", "Node.js", "RESTful APIs", "Dart"],
  },
  {
    icon: Wrench,
    label: "Araçlar & DevOps",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Agile/Scrum"],
  },
  {
    icon: Shield,
    label: "Savunma & Gömülü Sistem",
    skills: ["Embedded Systems", "Signal Processing", "Real-time Systems", "Sensor Fusion", "Cyber Security"],
  },
];

const highlights = [
  { icon: Trophy, label: "Ödül", value: "2", sub: "TEKNOFEST & ODTÜ" },
  { icon: BookOpen, label: "Yayın", value: "5", sub: "IEEE, Springer, ASREL" },
  { icon: Plane, label: "İHA Sistemi", value: "3+", sub: "Otonom & Savunma" },
];

const milestones = [
  { year: "2025", text: "TEKNOFEST Onkolojide 3T — NefesAI (OnkoNixAI) projesi devam ediyor" },
  { year: "2025", text: "Springer JRTIP'de YOLOv11-EFAC makalesi yayımlandı" },
  { year: "2024", text: "IEEE IDAP'ta İHA destekli arama-kurtarma araştırması sunuldu" },
  { year: "2023", text: "TEKNOFEST Birincilik Ödülü — Uzay, Havacılık ve Savunma" },
  { year: "2023", text: "ODTÜ VTOL Aircraft Competition Birincilik Ödülü" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  const reducedMotion = usePrefersReducedMotion();
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(124,58,237,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_30%,rgba(124,58,237,0.04),transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-mono text-violet-500 dark:text-violet-400 mb-3 tracking-widest uppercase">
              — Hakkımda
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Ben Kimim<span className="text-violet-500">?</span>
            </h2>
          </motion.div>

          {/* Top: Photo + Bio */}
          <div className="grid lg:grid-cols-5 gap-10 items-start mb-14">
            {/* Photo — 2 cols */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <ProfileCard
                avatarUrl="/WhatsApp Görsel 2024-09-20 saat 11.35.23_6a0fc72f.jpg"
                name="Rabia Kıratlı"
                title="Yazılım Geliştirici & Araştırmacı"
                handle="Rk1coder"
                status="AI Researcher"
                statusColor="#a78bfa"
                contactText="İletişim"
                onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" })}
                theme="dark"
                backdropColor="#24143e"
                holo={0.35}
                glare={0.18}
                tiltStrength={7}
                parallax={8}
                enableMobileTilt={false}
                intro={false}
                className="mx-auto"
              />
              <p className="mt-4 text-center text-xs text-violet-300">Necmettin Erbakan Üniversitesi</p>

              {/* Stats below photo */}
              <div className="mt-10 grid grid-cols-3 gap-3">
                {highlights.map(({ icon: Icon, label, value, sub }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center p-3 rounded-xl border border-border bg-card hover:border-violet-500/40 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-violet-500 mb-1" />
                    <p className="text-xl font-black text-foreground"><CountUp to={parseInt(value, 10)} suffix={value.endsWith("+") ? "+" : ""} duration={1.1} /></p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bio + Timeline — 3 cols */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
              {/* Bio text */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="h-1 w-6 rounded bg-violet-500 inline-block" />
                  Hakkımda
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <ScrollReveal mode="enter" baseRotation={0} baseOpacity={0.35} blurStrength={2} duration={0.5} stagger={0.006}>
                    Yapay zeka destekli sistemler, gerçek zamanlı İHA teknolojileri ve savunma sanayi uygulamaları konusunda uzmanlaşmış bir yazılım geliştirici ve araştırmacıyım.
                  </ScrollReveal>
                  <ScrollReveal mode="enter" baseRotation={0} baseOpacity={0.35} blurStrength={2} duration={0.5} stagger={0.006}>
                    Hem yazılım geliştirme hem de gömülü sistemler konusundaki güçlü altyapım, projelerime özgün bir bakış açısı katıyor. Yapay zeka, gerçek zamanlı işleme ve İHA teknolojilerine odaklanarak; ticari ve savunma sektörlerine yönelik güvenli, verimli ve yenilikçi çözümler üretiyorum.
                  </ScrollReveal>
                  <ScrollReveal mode="enter" baseRotation={0} baseOpacity={0.35} blurStrength={2} duration={0.5} stagger={0.006}>
                    TEKNOFEST bünyesinde ödüllü projelere imza atmış, Springer ve IEEE'de yayın yapmış, TEKNOFEST Onkolojide 3T kapsamında NefesAI projesiyle akciğer kanseri tedavisinde yapay zeka uygulamaları geliştiriyorum.
                  </ScrollReveal>
                </div>
              </div>

              {/* Timeline */}
              <div className="p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-bold text-foreground mb-5 flex items-center gap-2">
                  <span className="h-1 w-6 rounded bg-violet-500 inline-block" />
                  Öne Çıkan Kilometre Taşları
                </h3>
                <AnimatedContent distance={16} duration={0.5} stagger={0.08} className="space-y-4">
                  {milestones.map((m, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start group"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-mono text-violet-500 font-bold w-10 text-right shrink-0">
                          {m.year}
                        </span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-violet-500 mt-0.5 shrink-0 group-hover:scale-125 transition-transform" />
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-border min-h-[20px]" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors pb-2">
                        {m.text}
                      </p>
                    </div>
                  ))}
                </AnimatedContent>
              </div>
            </motion.div>
          </div>

          {/* Skills grid */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <span className="h-1 w-6 rounded bg-violet-500 inline-block" />
              Teknik Yetkinlikler
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillGroups.map(({ icon: Icon, label, skills }) => (
                <SpotlightCard
                  key={label}
                  spotlightColor="#8b5cf6"
                  intensity={0.14}
                  borderGlow={0.55}
                  proximity={40}
                  className="p-5 rounded-xl border border-border bg-card hover:border-violet-500/40 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/15 group-hover:bg-violet-500/20 transition-colors">
                      <Icon className="h-4 w-4 text-violet-500" />
                    </div>
                    <h4 className="font-semibold text-foreground text-xs">{label}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-violet-500/8 text-violet-600 dark:text-violet-300 border border-violet-500/20 hover:bg-violet-500/15 transition-colors text-xs px-2 py-0.5"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
