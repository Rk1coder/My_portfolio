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

/* ── Canvas-based Neural Network Particle Animation ── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const COUNT = 55;
    const MAX_DIST = 110;

    /* Init particles */
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1.2,
      opacity: Math.random() * 0.5 + 0.3,
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      const particles = particlesRef.current;

      /* Move */
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      /* Draw edges */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      /* Draw nodes */
      for (const p of particles) {
        const pulse = Math.sin(t * 2 + p.pulsePhase) * 0.3 + 0.7;
        const r = p.radius * pulse;

        /* Glow */
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        grad.addColorStop(0, `rgba(167, 139, 250, ${p.opacity * pulse})`);
        grad.addColorStop(1, "rgba(139, 92, 246, 0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        /* Core dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 181, 253, ${p.opacity * pulse})`;
        ctx.fill();
      }

      /* Central hub — glowing sphere in centre */
      const cx = W * 0.5;
      const cy = H * 0.5;
      const hubR = 14 + Math.sin(t * 1.5) * 2;

      const hubGrad = ctx.createRadialGradient(cx - hubR * 0.3, cy - hubR * 0.3, 0, cx, cy, hubR * 3);
      hubGrad.addColorStop(0, "rgba(196, 181, 253, 0.4)");
      hubGrad.addColorStop(0.5, "rgba(124, 58, 237, 0.2)");
      hubGrad.addColorStop(1, "rgba(124, 58, 237, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, hubR * 3, 0, Math.PI * 2);
      ctx.fillStyle = hubGrad;
      ctx.fill();

      const coreGrad = ctx.createRadialGradient(cx - hubR * 0.35, cy - hubR * 0.35, 0, cx, cy, hubR);
      coreGrad.addColorStop(0, "#e9d5ff");
      coreGrad.addColorStop(0.6, "#7c3aed");
      coreGrad.addColorStop(1, "#4c1d95");
      ctx.beginPath();
      ctx.arc(cx, cy, hubR, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.shadowColor = "rgba(139, 92, 246, 0.8)";
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      /* Rotating orbital rings */
      for (let ring = 0; ring < 3; ring++) {
        const angle = t * (0.4 + ring * 0.15) + (ring * Math.PI * 2) / 3;
        const orbitR = 55 + ring * 30;
        const dotX = cx + Math.cos(angle) * orbitR;
        const dotY = cy + Math.sin(angle) * orbitR * 0.38;

        /* Ring ellipse */
        ctx.beginPath();
        ctx.ellipse(cx, cy, orbitR, orbitR * 0.38, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 - ring * 0.03})`;
        ctx.lineWidth = 0.7;
        ctx.setLineDash([3, 7]);
        ctx.stroke();
        ctx.setLineDash([]);

        /* Orbiting dot */
        const dGrad = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, 5);
        dGrad.addColorStop(0, "rgba(196,181,253,0.9)");
        dGrad.addColorStop(1, "rgba(124,58,237,0)");
        ctx.beginPath();
        ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
        ctx.fillStyle = dGrad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(221, 214, 254, 0.95)";
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}

export function Hero() {
  const role = useTypewriter(roles);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#06060f]"
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
              <span className="text-white">Rabia </span>
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
                    <p className="text-2xl font-bold text-white leading-none">{value}</p>
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

          {/* Right: Canvas animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            className="hidden sm:block flex-shrink-0 w-72 h-72 md:w-96 md:h-96"
          >
            <NeuralCanvas />
          </motion.div>
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
