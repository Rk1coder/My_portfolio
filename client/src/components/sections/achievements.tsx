import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const achievements = {
  awards: [
    {
      title: "TEKNOFEST En İyi Girişim/Birincilik Ödülü",
      organization: "TEKNOFEST",
      year: "2023",
      description: "Uzay, Havacılık ve Savunma Teknolojileri Ön Kuluçka"
    },
    {
      title: "ODTÜ/METU VTOL Aircraft Competition Birincilik Ödülü",
      organization: "ODTÜ/METU",
      year: "2023",
      description: "VTOL Aircraft systems"
    }
  ],
  publications: [
    {
      title: "IEEE 8th International Artificial Intelligence and Data Processing Symposium",
      journal: "Monitoring Post-Earthquake Search and Rescue Operations through UAVs Vision: Teams, Equipment and Structural Damage Detection",
      year: "2024",
      doi: "10.1109/IDAP64064.2024.10710749"
    },
    {
      title: "2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı",
      journal: "Gerçekçi Simülasyon Ortamında İHA İle Nesne Tanıma: Gpu Hızlandırmalı Bir Yolo Keşfi",
      year: "2024",
      doi: "10.1234/ieee.2022.002"
    },
    {
      title: "Yapay Zeka Akademik Tez Programı (ATP)",
      journal: "SAYZEK - Savunma Sanayii Yapay Zeka Yetenek Kümelenmesi Araştırmaları",
      year: "2024",
      doi: "10.1234/ieee.2024.003" // Add doi here
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Achievements() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="absolute inset-0 bg-background/95" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Achievements & Publications
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <Card className="p-8 backdrop-blur-sm bg-card/60 border-primary/10 shadow-xl shadow-primary/5 h-full">
                <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <h3 className="text-2xl font-semibold text-primary">Awards</h3>
            </div>
                <div className="space-y-6">
                  {achievements.awards.map((award, index) => (
                    <motion.div
                      key={index}
                      className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <h4 className="text-lg font-semibold">{award.title}</h4>
                      <p className="text-sm text-muted-foreground">{award.organization} • {award.year}</p>
                      <p className="mt-2 text-foreground/80">{award.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 backdrop-blur-sm bg-card/60 border-primary/10 shadow-xl shadow-primary/5 h-full">
                <div className="flex items-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 className="text-2xl font-semibold text-primary">Publications</h3>
            </div>
                <div className="space-y-6">
                  {achievements.publications.map((pub, index) => (
                    <motion.div
                      key={index}
                      className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors"
                      whileHover={{ x: 10 }}
                    >
                      <h4 className="text-lg font-semibold">{pub.title}</h4>
                      <p className="text-sm text-muted-foreground">{pub.journal} • {pub.year}</p>
                      <p className="mt-2 text-foreground/80">DOI: {pub.doi}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}