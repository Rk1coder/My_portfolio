import { motion } from "framer-motion";
import { Trophy, BookOpen, ExternalLink } from "lucide-react";

const awards = [
  {
    title: "TEKNOFEST En İyi Girişim / Birincilik Ödülü",
    organization: "TEKNOFEST",
    year: "2023",
    description: "Uzay, Havacılık ve Savunma Teknolojileri Ön Kuluçka kategorisinde birincilik.",
  },
  {
    title: "ODTÜ / METU VTOL Aircraft Competition Birincilik",
    organization: "ODTÜ · METU",
    year: "2023",
    description: "VTOL hava araçları sistemleri yarışmasında birincilik ödülü.",
  },
];

const publications = [
  {
    venue: "IEEE IDAP 2024",
    title:
      "Monitoring Post-Earthquake Search and Rescue Operations through UAVs Vision: Teams, Equipment and Structural Damage Detection",
    journal: "IEEE 8th Int. AI and Data Processing Symposium",
    year: "2024",
    doi: "10.1109/IDAP64064.2024.10710749",
    doiUrl: "https://doi.org/10.1109/IDAP64064.2024.10710749",
  },
  {
    venue: "TÜBİTAK 2209-A",
    title:
      "Gerçekçi Simülasyon Ortamında İHA İle Nesne Tanıma: GPU Hızlandırmalı Bir YOLO Keşfi",
    journal: "Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı",
    year: "2024",
    doi: "10.1234/ieee.2022.002",
  },
  {
    venue: "SAYZEK · ATP",
    title: "SAYZEK — Savunma Sanayii Yapay Zeka Yetenek Kümelenmesi Araştırmaları",
    journal: "Yapay Zeka Akademik Tez Programı",
    year: "2024",
    doi: "10.1234/ieee.2024.003",
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

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/98" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_0%,rgba(124,58,237,0.08),transparent)]" />

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
              — Başarılar & Yayınlar
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Akademik <span className="text-violet-500">Çalışmalar</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Awards */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
                  <Trophy className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Ödüller</h3>
              </div>
              <div className="space-y-4">
                {awards.map((award, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="p-5 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-semibold text-foreground text-sm leading-snug group-hover:text-amber-400 transition-colors">
                        {award.title}
                      </h4>
                      <span className="shrink-0 text-xs font-mono text-amber-400/70 bg-amber-400/10 px-2 py-0.5 rounded">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-xs text-violet-400 font-medium mb-1">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Publications */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/25">
                  <BookOpen className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Yayınlar</h3>
              </div>
              <div className="space-y-4">
                {publications.map((pub, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className="p-5 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="shrink-0 text-xs font-mono text-violet-400/80 bg-violet-400/10 px-2 py-0.5 rounded">
                        {pub.venue}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{pub.year}</span>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm leading-snug mb-1 group-hover:text-violet-400 transition-colors">
                      {pub.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">{pub.journal}</p>
                    {pub.doiUrl ? (
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-mono transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" />
                        DOI: {pub.doi}
                      </a>
                    ) : (
                      <p className="text-xs text-muted-foreground font-mono">DOI: {pub.doi}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
