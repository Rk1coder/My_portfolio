import { lazy, Suspense, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GhostFibers = lazy(() => import("./GhostFibers"));

export function PortfolioBackground() {
  const reducedMotion = useReducedMotion();
  const [compact, setCompact] = useState(() =>
    window.matchMedia("(max-width: 767px), (pointer: coarse)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const update = () => setCompact(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#06060f] bg-[radial-gradient(ellipse_at_75%_45%,rgba(139,92,246,0.12),transparent_65%)]"
    >
      <Suspense fallback={null}>
        <GhostFibers
          key={`${compact}-${Boolean(reducedMotion)}`}
          glowColor="#8b5cf6"
          lineColor="#dfd1fc"
          secondaryColor="#6f4ac5"
          layers={compact ? 2 : 3}
          threads={compact ? 40 : 72}
          density={compact ? 0.65 : 1}
          dpr={compact ? 1 : 1.5}
          speed={compact ? 0.35 : 0.5}
          particles={compact ? 0.2 : 0.5}
          mouseInteraction={!compact && !reducedMotion}
          mouseStrength={0.6}
          pulseOnClick={!compact && !reducedMotion}
          intro={!reducedMotion}
          paused={Boolean(reducedMotion)}
          className="opacity-[0.85]"
        />
      </Suspense>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,15,0.68)_0%,rgba(6,6,15,0.3)_45%,rgba(6,6,15,0.1)_100%)] max-md:bg-[linear-gradient(180deg,rgba(6,6,15,0.38),rgba(6,6,15,0.6))]" />
    </div>
  );
}
