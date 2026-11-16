import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import GooeyNav from "@/components/ui/gooey-nav";

const navColors = ["#7c3aed", "#8b5cf6", "#a78bfa"];

const navItems = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımda" },
  { href: "#achievements", label: "Başarılar" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

export function Navigation() {
  const reducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: reducedMotion ? 0 : -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollTo("#home")}
              className="text-lg font-bold font-mono text-primary tracking-wider"
            >
              RK<span className="text-foreground/40">.</span>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
              <GooeyNav
                items={navItems}
                activeIndex={navItems.findIndex((item) => item.href === active)}
                color="#7c3aed"
                activeTextColor="#ffffff"
                colors={navColors}
                frame={false}
                animationTime={600}
                particleCount={10}
                spread={32}
                gooeyness={0.6}
                wobble={0.35}
                hoverEffect={!reducedMotion}
              />
            </div>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobil gezinme"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  aria-current={active === item.href ? "location" : undefined}
                  className={cn(
                    "text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    active === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
