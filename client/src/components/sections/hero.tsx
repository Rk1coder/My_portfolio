import { motion } from "framer-motion";
import { ArrowDown, Cpu, Brain, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

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

/* ── 3D Orbital Sphere ── */
function OrbitalSphere() {
  const orbits = [
    { rx: 110, ry: 34, rotDeg: 0, color: "rgba(139,92,246,0.7)", dur: 6 },
    { rx: 110, ry: 34, rotDeg: 60, color: "rgba(167,139,250,0.5)", dur: 9 },
    { rx: 110, ry: 34, rotDeg: 120, color: "rgba(109,40,217,0.6)", dur: 7.5 },
  ];

  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80 select-none">
      {/* Glow behind */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 240 240"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Outer dashed circle (equator) */}
        <circle
          cx="120" cy="120" r="110"
          fill="none"
          stroke="rgba(139,92,246,0.12)"
          strokeWidth="1"
        />

        {/* Orbiting rings at different tilt angles */}
        {orbits.map((orb, i) => (
          <g key={i} transform={`rotate(${orb.rotDeg} 120 120)`}>
            {/* Ring ellipse */}
            <ellipse
              cx="120" cy="120"
              rx={orb.rx} ry={orb.ry}
              fill="none"
              stroke={orb.color}
              strokeWidth="1"
              strokeDasharray="3 6"
            />
            {/* Orbiting dot — use animated g translate instead of cx/cy */}
            <motion.g
              animate={{
                x: [orb.rx, 0, -orb.rx, 0, orb.rx],
                y: [0, orb.ry, 0, -orb.ry, 0],
              }}
              transition={{ duration: orb.dur, repeat: Infinity, ease: "linear" }}
            >
              <circle
                cx="120" cy="120"
                r="4"
                fill={orb.color}
                style={{ filter: "drop-shadow(0 0 4px rgba(139,92,246,0.8))" }}
              />
            </motion.g>
          </g>
        ))}

        {/* Node dots on sphere surface */}
        {[
          [120, 10], [230, 120], [120, 230], [10, 120],
          [195, 45], [195, 195], [45, 195], [45, 45],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={`node-${i}`}
            cx={cx} cy={cy} r="2.5"
            fill="rgba(139,92,246,0.6)"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Connecting lines */}
        {[
          [120, 10, 195, 45], [195, 45, 230, 120], [230, 120, 195, 195],
          [195, 195, 120, 230], [120, 230, 45, 195], [45, 195, 10, 120],
          [10, 120, 45, 45], [45, 45, 120, 10],
          [120, 10, 230, 120], [230, 120, 120, 230], [120, 230, 10, 120],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={`line-${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(139,92,246,0.2)"
            strokeWidth="1"
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}

        {/* Center sphere */}
        <motion.g
          style={{ transformOrigin: "120px 120px" }}
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle
            cx="120" cy="120" r="16"
            fill="url(#centerGrad)"
            style={{ filter: "drop-shadow(0 0 12px rgba(139,92,246,0.9))" }}
          />
        </motion.g>
        <defs>
          <radialGradient id="centerGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#7c3aed" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "var(--hero-bg, #06060f)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,58,237,0.14),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(150,100,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(150,100,255,1) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20">
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
              Mühendis & Araştırmacı · Necmettin Erbakan Üniversitesi
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
            >
              <span className="text-white dark:text-white text-gray-900">Rabia </span>
              <span className="bg-gradient-to-r from-violet-400 via-primary to-violet-600 bg-clip-text text-transparent">
                Kıratlı
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="h-9 mb-10"
            >
              <p className="text-lg md:text-xl font-mono text-slate-400 dark:text-slate-400">
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
                    <p className="text-2xl font-bold text-foreground leading-none">{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
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
                className="border-border hover:border-violet-500/50 hover:bg-violet-500/5 transition-all"
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

          {/* Right: 3D animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 hidden sm:flex items-center justify-center"
          >
            <OrbitalSphere />
          </motion.div>
        </div>
      </div>

      {/* Scroll line */}
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
