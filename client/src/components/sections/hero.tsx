import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black/90">
        {/* Programlama ikonları */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/30 text-2xl backdrop-blur-sm"
            initial={{ 
              top: -100,
              left: `${Math.random() * 100}%`,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              top: "100vh",
              opacity: [0, 1, 1, 0],
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          >
            {[
              "⚛️", // React
              "python", // Python
              "C++",
              "🤖", // AI
              "✈️", // UAV
              "🎯", // Target
              "⚙️", // Embedded
              "🛠️", // Engineering
              "🔐"  // Security
            ][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
        
        {/* Parçacık efekti */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/70 to-background" />
      </div>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <div className="space-y-2">
            {["Rabia", "Kıratlı"].map((word, wordIndex) => (
              <motion.div 
                key={wordIndex}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: wordIndex * 0.3 }}
              >
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05 + wordIndex * 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    className="inline-block hover:text-primary/80 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Embedded Software & Hardware Engineer | Computer Vision & Deep Learning Researcher
            </p>
            <p className="text-lg text-muted-foreground/80">
            Specialized in AI-powered systems and advanced UAV technologies.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="group bg-primary/10 text-primary-foreground hover:bg-primary/20 dark:bg-white/90 dark:text-background dark:hover:bg-white transition-all duration-300"
            >
              İNCELE
              <motion.span
                className="inline-block ml-2"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}