import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import TiltedCard from "@/components/ui/tilted-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ChevronDown,
  Shield,
  FlaskConical,
  Brain,
  Building2,
} from "lucide-react";
import { useState, useId } from "react";

interface Module {
  name: string;
  description: string;
  icon?: "brain" | "flask" | "shield";
}

interface ProjectCardProps {
  index?: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  details?: string;
  image?: string;
  fullWidth?: boolean;
  institution?: string;
  period?: string;
  modules?: Module[];
  innovations?: string[];
  note?: string;
  featured?: boolean;
  featuredLabel?: string;
}

const iconMap = {
  brain: Brain,
  flask: FlaskConical,
  shield: Shield,
};

export function ProjectCard({
  index = 1,
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  details,
  image,
  institution,
  period,
  modules,
  innovations,
  note,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reducedMotion = useReducedMotion();
  const detailsId = useId();
  const hasExpandable = !!(details || modules?.length || innovations?.length || note);

  return (
    <article className="group flex h-full min-w-0 flex-col">
      <div className="aspect-square w-full">
        <TiltedCard
          imageSrc={image ? `/${image}` : undefined}
          altText={image ? title : ""}
          captionText={title}
          containerWidth="100%"
          containerHeight="100%"
          imageWidth="100%"
          imageHeight="100%"
          rotateAmplitude={reducedMotion ? 0 : 10}
          scaleOnHover={reducedMotion ? 1 : 1.035}
          radius={20}
          glare={reducedMotion ? 0 : 0.35}
          glareColor="#ddd6fe"
          shadow={0.6}
          parallax={reducedMotion ? 0 : 1}
          gyroscope={false}
          intro={false}
          showTooltip={false}
          flipOnClick={false}
          displayOverlayContent
          overlayDepth={24}
          overlayContent={
            <div className="flex h-full flex-col justify-between p-5">
              <span aria-hidden="true" className="self-end rounded-full border border-white/20 bg-black/30 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-md">
                {String(index).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold leading-snug text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
                  {title}
                </h3>
                {period && <p className="mt-2 text-xs font-medium text-violet-200">{period}</p>}
              </div>
            </div>
          }
        >
          {!image && (
            <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_70%_20%,rgba(139,92,246,0.38),transparent_65%),linear-gradient(145deg,#1b1434,#080a17)] pb-12">
              <Brain className="mb-5 h-16 w-16 text-violet-300" strokeWidth={1} />
              <span className="text-4xl font-black tracking-tight text-white">NEFES<span className="text-violet-400">AI</span></span>
              <span className="mt-2 font-mono text-xs tracking-[0.3em] text-violet-200/65">OnkoNixAI</span>
            </div>
          )}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06060f]/95 via-[#06060f]/10 to-transparent" />
        </TiltedCard>
      </div>

      <div className="pb-3 pt-5">
        {institution && (
          <p className="mb-2 flex items-center gap-1.5 text-xs text-violet-300">
            <Building2 className="h-3.5 w-3.5 shrink-0" />
            {institution}
          </p>
        )}
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
        {hasExpandable && (
          <button
            type="button"
            onClick={() => setIsExpanded(value => !value)}
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            aria-label={`${title}: ${isExpanded ? "detayları gizle" : "detayları göster"}`}
            className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium text-violet-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#06060f]"
          >
            {isExpanded ? "Detayları gizle" : "Projeyi keşfet"}
            <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="expand"
            id={detailsId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-4 border-t border-white/10 pt-4">
              {details && (
                <p className="text-sm text-white/50 leading-relaxed">{details}</p>
              )}

              {modules && modules.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-violet-400 uppercase tracking-widest">
                    Temel Modüller
                  </h4>
                  <div className="space-y-2">
                    {modules.map((mod, i) => {
                      const Icon = mod.icon ? iconMap[mod.icon] : Brain;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-violet-500/5 border border-violet-500/12"
                        >
                          <Icon className="h-3.5 w-3.5 text-violet-400 mt-0.5 shrink-0" />
                          <div>
                            <span className="text-xs font-bold text-white/80">{mod.name}: </span>
                            <span className="text-xs text-white/45">{mod.description}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {innovations && innovations.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-violet-400 uppercase tracking-widest">
                    Yenilikçi Yaklaşımlar
                  </h4>
                  <ul className="space-y-1.5">
                    {innovations.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.28 }}
                        className="flex items-start gap-2 text-xs text-white/45"
                      >
                        <span className="h-1 w-1 rounded-full bg-violet-500 mt-1.5 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {note && (
                <div className="text-xs text-white/35 border border-violet-500/12 rounded-lg p-3 bg-violet-500/4 italic">
                  {note}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="mt-auto border-t border-white/10 pt-4">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.15 }}
            >
              <Badge
                variant="secondary"
                className="text-xs bg-violet-500/8 text-violet-300 border border-violet-500/15 hover:bg-violet-500/18 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="border-white/10 hover:border-violet-500/50 hover:text-violet-400 transition-all duration-200 text-xs text-[#ffffff] bg-transparent hover:bg-violet-500/8"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-3.5 w-3.5" />
              GitHub
            </a>
          </Button>
          {liveUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-white/10 hover:border-violet-500/50 hover:text-violet-400 transition-all duration-200 text-xs text-[#ffffff] bg-transparent hover:bg-violet-500/8"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
