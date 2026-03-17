import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const featuredProject = {
  title: "NefesAI — OnkoNixAI",
  description:
    "Akciğer Kanserinde Yapay Zeka Destekli Kişiselleştirilmiş Tedavi Optimizasyonu. Bronkoskopi görüntüleri, kanser test sonuçları ve kan değerlerinin entegrasyonuyla tanı ve tedavi süreçlerini optimize eder.",
  details:
    "TEKNOFEST Onkolojide 3T Yarışması kapsamında geliştirilen OnkoNixAI, akciğer kanseri tedavisinde yapay zeka destekli kişiselleştirilmiş optimizasyon platformudur. Mevcut tümör heterojenitesi, ilaç direnci ve suboptimal dozaj gibi sorunlara çözüm sunmak amacıyla tasarlanmıştır.",
  technologies: [
    "Multimodal Deep Learning",
    "Transformer Architecture",
    "Federated Learning",
    "Explainable AI (SHAP/LIME)",
    "PK/PD Modelling",
    "Reinforcement Learning",
    "RadioGenomics",
    "ctDNA Analysis",
    "Bronchoscopy AI",
    "Computer Vision",
  ],
  githubUrl: "https://github.com/kendi-github-linkin/nefes-ai",
  featured: true,
  featuredLabel: "TEKNOFEST — Aktif Proje",
  institution: "Necmettin Erbakan University",
  period: "Şub 2025 – Halen",
  modules: [
    {
      name: "BronkoVision Modülü",
      description:
        "Yüksek çözünürlüklü bronkoskopi görüntülerinden tümör doku karakterizasyonu ve mikroçevre analizi.",
      icon: "brain" as const,
    },
    {
      name: "BiyoAnaliz Modülü",
      description:
        "Dolaşımdaki tümör hücreleri (CTCs), DNA'sı (ctDNA) ve biyobelirteç panelinin (CEA, CYFRA 21-1, ProGRP) derinlemesine analizi.",
      icon: "flask" as const,
    },
    {
      name: "DozOptimize Modülü",
      description:
        "Farmakokinetik/farmakodinamik (PK/PD) modelleme ve takviyeli öğrenme algoritmalarıyla optimal doz ayarlaması.",
      icon: "shield" as const,
    },
  ],
  innovations: [
    "Multimodal Derin Öğrenme (OnkoFusion): Farklı veri türlerini semantik düzeyde entegre eden transformer tabanlı mimari.",
    "Zamansal Tümör Evrimi Modelleme (OnkoEvolve): ctDNA dinamikleriyle tedavi yanıtı ve direncinin öngörülmesi.",
    "Moleküler-Görüntüleme Köprüsü (RadioGenomics): Görüntü ve genomik verilerin entegrasyonuyla gen mutasyonu tahmini.",
    "Federe Öğrenme: Hasta mahremiyetini koruyarak model performans artışı.",
    "Açıklanabilir Yapay Zeka: Klinik karar destek için SHAP/LIME kombinasyonu.",
  ],
  note: "Bu projenin tüm yasal hakları korunmaktadır. TEKNOFEST Yarışması bünyesinde özgün olarak geliştirilmekte olup proje patenti bulunmaktadır.",
};

const projects = [
  {
    title: "İnovasyon Çalışmalarım",
    image: "/innovation.png",
    description: "Sağlık teknolojileri ve Doğal Afet Odaklı yapay zeka tabanlı sistemler",
    details:
      "Hastalık teşhisi için derin öğrenme modelleri, tıbbi görüntü analizi ve afet durumlarında hızlı müdahale sağlayan otonom sistemler üzerine çalışmalar yaptım. AI destekli teşhis sistemleri ve veri analitiği projeleri geliştirdim.",
    technologies: [
      "Deep Learning",
      "Medical Image Processing",
      "Computer Vision",
      "Edge AI",
      "Embedded Systems",
      "IoT",
      "Federated Learning",
    ],
    githubUrl: "https://github.com/kendi-github-linkin/innovation-projects",
    liveUrl: "https://innovation.seninwebsiten.dev",
  },
  {
    title: "Göktürk Ekibi Çalışmalarım",
    image: "/pars.jpg",
    description: "Savunma sanayii ve otonom İHA sistemleri",
    details:
      "Göktürk ekibi ile hava savunma sistemlerinden kaçınma algoritmaları, QR kod tabanlı hassas iniş sistemi ve otonom hedef tespit sistemleri geliştirdim. Jetson Orin Nano üzerinde çalışan, gerçek zamanlı nesne tespiti ve hedef takibi gerçekleştiren algoritmalar yazdım.",
    technologies: [
      "Embedded AI",
      "Edge Computing",
      "Sensor Fusion",
      "Real-Time Object Detection",
      "Gstreamer",
      "MAVLink",
      "NVIDIA TensorRT",
      "PX4/ArduPilot",
    ],
    githubUrl: "https://github.com/kendi-github-linkin/gokturk-projects",
    liveUrl: "https://gokturk-team.seninwebsiten.dev",
  },
  {
    title: "AI Tabanlı Robotik Çalışmalarım",
    image: "/robots.png",
    description: "Otonom robotik sistemler ve görüntü işleme çözümleri",
    details:
      "Otonom navigasyon, SLAM tabanlı haritalama ve robotik görüntü işleme üzerine çalışmalar yaptım. Endüstriyel otomasyon ve arama-kurtarma görevleri için robotik sistemler geliştirdim. ROS tabanlı simülasyonlarla test edilen projelerde nesne tanıma, engelden kaçınma ve yol planlama algoritmaları kullandım.",
    technologies: [
      "SLAM",
      "Reinforcement Learning",
      "ROS2",
      "Gazebo",
      "Point Cloud Processing",
      "Lidar-based Perception",
      "Kalman Filter",
      "Path Planning",
    ],
    githubUrl: "https://github.com/kendi-github-linkin/ai-robotics",
    liveUrl: "https://robotics-ai.seninwebsiten.dev",
  },
  {
    title: "NLP Çalışmalarım",
    image: "/nlp.jpg",
    description: "Doğal Dil İşleme (NLP) ve metin analizi projeleri",
    details:
      "Duygu analizi, metin sınıflandırma ve chatbot projeleri geliştirdim. Transformer tabanlı modellerle dil işleme çözümleri ürettim.",
    technologies: [
      "NLP",
      "Transformers",
      "spaCy",
      "Hugging Face",
      "BERT",
      "GPT",
      "Text Classification",
    ],
    githubUrl: "https://github.com/kendi-github-linkin/nlp-projects",
    liveUrl: "https://nlp-ai.seninwebsiten.dev",
  },
  {
    title: "Frontend Geliştirme Çalışmalarım",
    image: "/frontend.png",
    description: "Modern web uygulamaları ve UI/UX geliştirme",
    details:
      "React, Next.js ve Tailwind CSS ile kullanıcı dostu, performanslı ve ölçeklenebilir web uygulamaları geliştirdim.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "API Integration",
      "UI/UX",
    ],
    githubUrl: "https://github.com/kendi-github-linkin/frontend-projects",
    liveUrl: "https://frontend.seninwebsiten.dev",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/98" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_0%_100%,rgba(124,58,237,0.08),transparent)]" />

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
              — Projeler
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Çalışmalarım &{" "}
              <span className="text-violet-500">Projelerim</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
              Yapay zeka, gömülü sistemler ve savunma teknolojileri alanlarındaki öne çıkan çalışmalarım
            </p>
          </motion.div>

          {/* Featured Project — full width */}
          <motion.div variants={itemVariants} className="mb-10">
            <ProjectCard {...featuredProject} />
          </motion.div>

          {/* Other Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
