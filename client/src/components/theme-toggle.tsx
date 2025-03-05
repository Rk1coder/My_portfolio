
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("Current theme:", theme);
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("Switching to:", newTheme);
    setTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-background border-2 border-primary hover:bg-accent hover:border-accent transition-all duration-300 shadow-lg shadow-primary/20"
      title={`${theme === "light" ? "Karanlık" : "Aydınlık"} temaya geç`}
    >
      <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-primary" />
      <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-accent" />
      <span className="sr-only">Tema değiştir</span>
    </Button>
  );
}
