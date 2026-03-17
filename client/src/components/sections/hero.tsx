import { motion } from "framer-motion";
import { ArrowDown, Cpu, Brain, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#06060f]"
    >
      {/* Ambient radial gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,58,237,0.15),transparent)]" />
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(124,58,237,0.06),transparent_70%)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(150,100,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(150,100,255,1) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-violet-600/8 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-[10%] w-56 h-56 rounded-full bg-primary/8 blur-3xl pointer-events-none"
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
          Mühendis & Araştırmacı · Necmettin Erbakan Üniversitesi
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
            <span className="text-white">Rabia </span>
            <span className="bg-gradient-to-r from-violet-400 via-primary to-violet-600 bg-clip-text text-transparent">
              Kıratlı
            </span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="h-9 mb-10"
        >
          <p className="text-lg md:text-xl font-mono text-slate-400">
            <span className="text-violet-400 select-none">&gt;&nbsp;</span>
            <span className="text-slate-200">{role}</span>
            <span className="text-violet-400 animate-pulse select-none">_</span>
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12"
        >
          {stats.map(({ icon: Icon, label, value }, i) => (
            <div key={label} className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <Icon className="h-4 w-4 text-violet-400" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-white leading-none">{value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 shadow-lg shadow-violet-900/40 transition-all"
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

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-violet-500/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  );
}
