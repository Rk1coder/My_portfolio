import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/Rk1coder",
    username: "@Rk1coder",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/rabia-kiratli",
    username: "Rabia Kıratlı",
  },
  {
    icon: Mail,
    label: "E-posta",
    href: "mailto:kiratli.rabiaa@gmail.com",
    username: "kiratli.rabiaa@gmail.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(124,58,237,0.10),transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <p className="text-sm font-mono text-violet-500 dark:text-violet-400 mb-3 tracking-widest uppercase">
              — İletişim
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              Bana <span className="text-violet-500">Ulaşın</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Proje fikirleri, iş birliği teklifleri veya herhangi bir soru için mesaj bırakabilirsiniz.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Social links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-semibold text-foreground mb-6">Bağlantı Kanalları</h3>
              {socials.map(({ icon: Icon, label, href, username }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
                    <Icon className="h-5 w-5 text-violet-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{username}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact form */}
            <motion.div variants={itemVariants}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                  <div className="p-4 rounded-full bg-violet-500/15 border border-violet-500/30">
                    <Send className="h-8 w-8 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Mesajınız iletildi!</h3>
                  <p className="text-muted-foreground text-sm">En kısa sürede geri dönüş yapacağım.</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="border-violet-500/30 text-violet-500 hover:bg-violet-500/10"
                  >
                    Yeni Mesaj
                  </Button>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">Ad Soyad</label>
                      <Input
                        placeholder="Ad Soyad"
                        required
                        className="bg-background border-border focus:border-violet-500/60 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-muted-foreground">E-posta</label>
                      <Input
                        type="email"
                        placeholder="ornek@mail.com"
                        required
                        className="bg-background border-border focus:border-violet-500/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Konu</label>
                    <Input
                      placeholder="İş birliği / Proje fikri / Soru"
                      className="bg-background border-border focus:border-violet-500/60 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground">Mesaj</label>
                    <Textarea
                      placeholder="Mesajınızı buraya yazın..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-violet-500/60 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold shadow-lg shadow-violet-900/20 transition-all"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Gönder
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20 pt-8 border-t border-border"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-mono">
            <span className="text-violet-500">RK</span> · Rabia Kıratlı
          </p>
          <p>© {new Date().getFullYear()} · Tüm hakları saklıdır.</p>
        </div>
      </motion.div>
    </section>
  );
}
