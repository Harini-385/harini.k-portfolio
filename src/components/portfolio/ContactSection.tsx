import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">05 / Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-12 text-lg">
            I'm currently looking for placement opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:harinigkram@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Say Hello
          </a>
          <a
            href="tel:+916374347247"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:shadow-glow hover:border-primary/40 transition-all duration-300 text-foreground"
          >
            <Phone size={18} />
            6374347247
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a href="https://linkedin.com/in/harini-k-8246a5295" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:shadow-glow hover:border-primary/40 transition-all">
            <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com/Harini-385" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl glass hover:shadow-glow hover:border-primary/40 transition-all">
            <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </motion.div>

        <p className="mt-16 text-sm text-muted-foreground/50 font-mono">
          Designed & Built by Harini K · 2025
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
