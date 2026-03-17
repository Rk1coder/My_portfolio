import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ChevronDown,
  Shield,
  FlaskConical,
  Brain,
  Calendar,
  Building2,
} from "lucide-react";
import { useState, useRef } from "react";

interface Module {
  name: string;
  description: string;
  icon?: "brain" | "flask" | "shield";
}

interface ProjectCardProps {
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

const spring = { type: "spring", stiffness: 300, damping: 28 };
const smoothSpring = { type: "spring", stiffness: 200, damping: 30 };

export function ProjectCard({
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
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const hasExpandable = !!(details || modules?.length || innovations?.length || note);

  /* Tilt on mouse move */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), smoothSpring);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), smoothSpring);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={spring}
      className="h-full"
    >
      <div className="h-full flex flex-col rounded-xl border border-white/8 bg-[#0d0d1a] hover:border-violet-500/35 shadow-md hover:shadow-violet-900/20 hover:shadow-xl transition-colors duration-300 overflow-hidden group">

        {/* Image */}
        {image && (
          <div className="relative w-full h-44 overflow-hidden bg-[#0a0a14]">
            <motion.img
              src={image}
              alt={title}
              onLoad={() => setImgLoaded(true)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            />
            {/* Gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d1a] to-transparent" />
            {/* Shimmer on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            />
          </div>
        )}

        {/* Header */}
        <div
          className={`px-5 pt-5 pb-3 ${hasExpandable ? "cursor-pointer select-none" : ""}`}
          onClick={() => hasExpandable && setIsExpanded((v) => !v)}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="font-bold text-white leading-snug text-base">{title}</h3>
              <div className="flex flex-wrap gap-3 text-xs text-white/40">
                {institution && (
                  <span className="flex items-center gap-1">
                    <Building2 className="h-3 w-3 text-violet-500" />
                    {institution}
                  </span>
                )}
                {period && (
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-violet-500" />
                    {period}
                  </span>
                )}
              </div>
            </div>
            {hasExpandable && (
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                className="shrink-0 mt-0.5 text-white/30 group-hover:text-white/60 transition-colors"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            )}
          </div>
          <p className="text-sm text-white/55 mt-2 leading-relaxed">{description}</p>
        </div>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="expand"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-4 space-y-4 border-t border-white/6 pt-4">
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
        <div className="mt-auto px-5 pb-5 pt-3">
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
      </div>
    </motion.div>
  );
}
