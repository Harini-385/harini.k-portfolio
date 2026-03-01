import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">Python Backend Developer</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-gradient">Harini K</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Aspiring backend developer passionate about building efficient, scalable server-side systems with Python, Django & FastAPI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          <a href="https://github.com/Harini-385" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:shadow-glow hover:border-primary/40 transition-all duration-300">
            <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="https://linkedin.com/in/harini-k-8246a5295" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:shadow-glow hover:border-primary/40 transition-all duration-300">
            <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="mailto:harinigkram@gmail.com" className="p-3 rounded-xl glass hover:shadow-glow hover:border-primary/40 transition-all duration-300">
            <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="inline-block animate-bounce"
        >
          <ArrowDown size={24} className="text-muted-foreground" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
