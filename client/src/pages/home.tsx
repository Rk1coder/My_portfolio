import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { PortfolioBackground } from "@/components/backgrounds/portfolio-background";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen">
      <PortfolioBackground />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
