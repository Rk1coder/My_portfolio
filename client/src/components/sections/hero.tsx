import { motion } from "framer-motion";
import { ArrowDown, Cpu, Brain, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CountUp from "@/components/text-animations/CountUp";
import ScrambledText from "@/components/text-animations/ScrambledText";

const roles = [
  "Embedded Software Engineer",
  "Computer Vision Researcher",
  "Deep Learning Developer",
  "UAV Systems Specialist",
  "AI Healthcare Innovator",
];

function useTypewriter(words: string[], speed = 65, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const stats = [
  { icon: Brain, label: "AI Projesi", value: "10+" },
  { icon: Plane, label: "İHA Sistemi", value: "3+" },
  { icon: Cpu, label: "Yayın", value: "5" },
];

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-20">
          {/* Left: text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Mühendis & Araştırmacı · Engineer & Researcher
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
            >
              <ScrambledText
                radius={120}
                duration={1.1}
                speed={0.5}
                scrambleChars=".:"
                scrambleColor="#c4b5fd"
              >
                <span className="text-white">Rabia</span>{" "}
                <span data-scramble-gradient className="bg-gradient-to-r from-violet-400 via-primary to-violet-600 bg-clip-text text-transparent">
                  Kıratlı
                </span>
              </ScrambledText>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="h-9 mb-10"
            >
              <p className="text-lg md:text-xl font-mono text-slate-400">
                <span className="text-violet-400 select-none">&gt;&nbsp;</span>
                <span>{role}</span>
                <span className="text-violet-400 animate-pulse select-none">_</span>
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 mb-12"
            >
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <Icon className="h-4 w-4 text-violet-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-white leading-none"><CountUp to={parseInt(value, 10)} suffix={value.endsWith("+") ? "+" : ""} duration={1.2} delay={0.55} /></p>
                    <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                size="lg"
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 shadow-lg shadow-violet-900/30 transition-all"
              >
                Projeleri Gör
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                Hakkımda
                <motion.span
                  className="inline-block ml-2"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                >
                  <ArrowDown className="h-4 w-4" />
                </motion.span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-violet-500/60 to-transparent mx-auto"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  );
}
