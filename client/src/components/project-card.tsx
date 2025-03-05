import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  details?: string;
  image?: string; // Added image prop
}

export function ProjectCard({ title, description, technologies, githubUrl, liveUrl, details, image }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full overflow-hidden backdrop-blur-sm bg-card/40 border-primary/15 shadow-lg shadow-primary/5">
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-primary">{title}</CardTitle>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
          <CardDescription className="text-foreground/70">{description}</CardDescription>
        </CardHeader>
        <motion.div
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {details && (
            <CardContent className="pt-0 pb-4">
              <p className="text-foreground/80 text-sm">{details}</p>
            </CardContent>
          )}
        </motion.div>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild className="border-primary/20 hover:border-primary">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {liveUrl && (
              <Button variant="outline" size="sm" asChild className="border-primary/20 hover:border-primary">
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