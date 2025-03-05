import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = {
  frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Material UI", "Redux","Flutter"],
  backend: ["C++", "Python", "Dart", "C#", "Django", ,"C","RESTful APIs", "Node.js"],
  tools: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Agile/Scrum"],
  defense: ["Embedded Systems", "Signal Processing", "Real-time Systems", "System Integration", "Cyber Security"]
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

export function About() {
  return (
    <section id="about" className="py-20 bg-background border-y border-border relative overflow-hidden">
      {/* Enhanced ambient lighting */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 w-[40rem] h-[20rem] bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="mb-8 md:mb-0">
              <img 
                src="WhatsApp Görsel 2024-09-20 saat 11.35.23_6a0fc72f.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-xl w-full max-w-md mx-auto object-contain bg-background/90 border border-primary/10"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card 
                className="p-8 backdrop-blur-sm bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.05) 0%, transparent 70%)"
                }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-primary">Background</h3>
                <div className="space-y-4">
                  <p className="text-lg text-foreground/80">
I am a passionate developer with expertise in AI-driven systems, real-time UAV technologies, and defense industry applications. With a strong background in both software development and embedded systems, I bring a unique perspective to my projects.

My experience spans across AI, real-time processing, and embedded systems, with a particular focus on UAV-related technologies. I am committed to creating secure, efficient, and innovative solutions tailored to both commercial and defense sector needs.
                  </p>
                  <p className="text-lg text-foreground/80">
                  Yapay zeka destekli sistemler, gerçek zamanlı İHA teknolojileri ve savunma sanayi uygulamaları konusunda uzmanlaşmış tutkulu bir geliştiriciyim. Hem yazılım geliştirme hem de gömülü sistemler konusundaki sağlam temelim, projelerime benzersiz bir bakış açısı kazandırıyor.

Deneyimim, yapay zeka, gerçek zamanlı işleme ve gömülü sistemler gibi çeşitli teknolojilerde yer almakta olup, özellikle İHA teknolojilerine odaklanıyorum. Hem ticari hem de savunma sektörlerine yönelik güvenli, verimli ve yenilikçi çözümler üretmeye kararlıyım.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category} className="p-8 backdrop-blur-sm bg-card/80">
                  <h3 className="text-2xl font-semibold mb-6 text-primary capitalize">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {items.map((skill) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-3"
                        whileHover={{ x: 10, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-foreground/80">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}