
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Dark theme background */}
      <div className="absolute inset-0 bg-background/95" />
      
      {/* Subtle particle effects */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.2
            }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Get In Touch</h2>
          
          <Card className="p-6 bg-black/90 border border-primary/30 shadow-lg shadow-primary/20 mx-auto max-w-md w-full">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input 
                  placeholder="İsim" 
                  className="bg-black/60 border-primary/30 text-white placeholder:text-gray-300" 
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="E-posta" 
                  className="bg-black/60 border-primary/30 text-white placeholder:text-gray-300" 
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Mesajınız" 
                  rows={4} 
                  className="bg-black/60 border-primary/30 text-white placeholder:text-gray-300" 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium text-lg"
              >
                Gönder
              </Button>
            </form>
          </Card>
          
          <div className="mt-8 flex justify-center space-x-6">
            <Button variant="ghost" size="icon" asChild className="text-white hover:text-primary">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                <SiGithub className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-white hover:text-primary">
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
