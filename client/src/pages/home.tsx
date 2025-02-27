import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Achievements } from "@/components/sections/achievements";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Contact />
    </main>
  );
}