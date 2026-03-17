import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Shield, Wrench } from "lucide-react";

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
    skills: [
      "Embedded Systems",
      "Signal Processing",
      "Real-time Systems",
      "Sensor Fusion",
      "Cyber Security",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(124,58,237,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_30%,rgba(124,58,237,0.05),transparent)]" />

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
            <p className="text-sm font-mono text-violet-400 mb-3 tracking-widest uppercase">
              — Hakkımda
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Ben Kimim<span className="text-violet-500">?</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio + photo */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Profile photo */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/30 to-primary/20 blur-sm" />
                <img
                  src="WhatsApp Görsel 2024-09-20 saat 11.35.23_6a0fc72f.jpg"
                  alt="Rabia Kıratlı"
                  className="relative rounded-2xl w-full max-w-sm mx-auto object-cover border border-violet-500/20 shadow-xl shadow-violet-900/20"
                />
              </div>

              {/* Bio text */}
              <div className="space-y-4 text-foreground/75 leading-relaxed">
                <p>
                  Yapay zeka destekli sistemler, gerçek zamanlı İHA teknolojileri ve savunma sanayi
                  uygulamaları konusunda uzmanlaşmış bir yazılım geliştirici ve araştırmacıyım.
                </p>
                <p>
                  Hem yazılım geliştirme hem de gömülü sistemler konusundaki güçlü altyapım,
                  projelerime özgün bir bakış açısı katıyor. Yapay zeka, gerçek zamanlı işleme ve
                  İHA teknolojilerine odaklanarak; ticari ve savunma sektörlerine yönelik güvenli,
                  verimli ve yenilikçi çözümler üretiyorum.
                </p>
                <p>
                  TEKNOFEST bünyesinde ödüllü projelere imza atmış, IEEE'de yayın yapmış ve
                  Necmettin Erbakan Üniversitesi'nde araştırmalarımı sürdürüyorum.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              {skillGroups.map(({ icon: Icon, label, skills }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="p-5 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-violet-500/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                      <Icon className="h-4 w-4 text-violet-400" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">{label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-violet-500/8 text-violet-300 border border-violet-500/20 hover:bg-violet-500/15 transition-colors text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
