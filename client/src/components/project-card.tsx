import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }} className="h-full">
      <Card
        className={`h-full overflow-hidden backdrop-blur-sm border shadow-lg transition-shadow duration-300 flex flex-col ${
          featured
            ? "bg-card/60 border-primary/40 shadow-primary/20 hover:shadow-primary/30"
            : "bg-card/40 border-primary/15 shadow-primary/5"
        }`}
      >
        {featured && (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
            <div className="relative flex items-center justify-between px-4 py-2 border-b border-primary/20">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  {featuredLabel || "Featured Project"}
                </span>
              </div>
              {period && (
                <span className="text-xs text-muted-foreground">{period}</span>
              )}
            </div>
          </div>
        )}

        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}

        <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1 flex-1">
              <CardTitle className="text-xl leading-snug text-primary">{title}</CardTitle>
              {institution && (
                <p className="text-xs text-muted-foreground font-medium">{institution}</p>
              )}
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 mt-1"
            >
              <ChevronDown className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
          <CardDescription className="text-foreground/70 text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        <motion.div
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <CardContent className="pt-0 pb-4 space-y-4">
            {details && (
              <p className="text-foreground/80 text-sm leading-relaxed">{details}</p>
            )}

            {modules && modules.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Temel Modüller
                </h4>
                <div className="space-y-2">
                  {modules.map((mod, i) => {
                    const Icon = mod.icon ? iconMap[mod.icon] : Brain;
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-2 rounded-lg bg-primary/5 border border-primary/10"
                      >
                        <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="text-sm font-semibold text-foreground/90">{mod.name}: </span>
                          <span className="text-sm text-foreground/70">{mod.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {innovations && innovations.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Yenilikçi Yaklaşımlar
                </h4>
                <ul className="space-y-1">
                  {innovations.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/75">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {note && (
              <div className="text-xs text-muted-foreground border border-primary/10 rounded-lg p-3 bg-primary/5 italic">
                {note}
              </div>
            )}
          </CardContent>
        </motion.div>

        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className={`text-xs ${
                  featured
                    ? "bg-primary/15 text-primary border border-primary/20"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-primary/20 hover:border-primary"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {liveUrl && (
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-primary/20 hover:border-primary"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
