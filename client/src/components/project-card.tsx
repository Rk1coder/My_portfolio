import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown, Shield, FlaskConical, Brain } from "lucide-react";
import { useState } from "react";

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
  featured?: boolean;
  featuredLabel?: string;
  institution?: string;
  period?: string;
  modules?: Module[];
  innovations?: string[];
  note?: string;
}

const iconMap = {
  brain: Brain,
  flask: FlaskConical,
  shield: Shield,
};

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  details,
  image,
  featured,
  featuredLabel,
  institution,
  period,
  modules,
  innovations,
  note,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="h-full">
      <div
        className={`h-full flex flex-col rounded-xl border overflow-hidden backdrop-blur-sm transition-all duration-300 ${
          featured
            ? "bg-card/60 border-violet-500/35 shadow-xl shadow-violet-900/20 hover:border-violet-500/55 hover:shadow-violet-900/30"
            : "bg-card/50 border-border/60 shadow-md hover:border-violet-500/30 hover:shadow-lg"
        }`}
      >
        {/* Featured header bar */}
        {featured && (
          <div className="relative bg-gradient-to-r from-violet-600/20 via-violet-500/10 to-transparent border-b border-violet-500/25 px-5 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-widest uppercase">
                {featuredLabel || "Featured Project"}
              </span>
            </div>
            {period && (
              <span className="text-xs text-violet-400/70 font-mono">{period}</span>
            )}
          </div>
        )}

        {/* Image */}
        {image && (
          <div className="w-full h-44 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Header */}
        <div
          className="cursor-pointer px-5 pt-5 pb-3"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 space-y-1">
              <h3 className={`font-bold leading-snug ${featured ? "text-lg text-violet-300" : "text-base text-foreground"}`}>
                {title}
              </h3>
              {institution && (
                <p className="text-xs text-violet-400/70 font-medium">{institution}</p>
              )}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 mt-0.5"
            >
              <ChevronDown className="h-4 w-4 text-violet-400/70" />
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
        </div>

        {/* Expandable content */}
        <motion.div
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.32, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-4 space-y-4">
            {details && (
              <p className="text-sm text-foreground/70 leading-relaxed border-t border-border/40 pt-4">
                {details}
              </p>
            )}

            {modules && modules.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
                  Temel Modüller
                </h4>
                <div className="space-y-2">
                  {modules.map((mod, i) => {
                    const Icon = mod.icon ? iconMap[mod.icon] : Brain;
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-violet-500/6 border border-violet-500/15"
                      >
                        <Icon className="h-3.5 w-3.5 text-violet-400 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-foreground/90">{mod.name}: </span>
                          <span className="text-xs text-foreground/65">{mod.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {innovations && innovations.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-violet-400 uppercase tracking-widest">
                  Yenilikçi Yaklaşımlar
                </h4>
                <ul className="space-y-1.5">
                  {innovations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/65">
                      <span className="h-1 w-1 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {note && (
              <div className="text-xs text-muted-foreground border border-violet-500/15 rounded-lg p-3 bg-violet-500/5 italic">
                {note}
              </div>
            )}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-auto px-5 pb-5 pt-2">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-violet-500/8 text-violet-300 border border-violet-500/20 hover:bg-violet-500/15 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border/60 text-muted-foreground hover:border-violet-500/50 hover:text-violet-300 transition-all text-xs"
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
                className="border-border/60 text-muted-foreground hover:border-violet-500/50 hover:text-violet-300 transition-all text-xs"
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
