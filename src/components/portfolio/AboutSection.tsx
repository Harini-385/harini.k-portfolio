import { motion } from "framer-motion";
import { GraduationCap, Target, Code2 } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech IT", value: "CGPA 8.6" },
  { icon: Target, label: "Focus", value: "Backend Dev" },
  { icon: Code2, label: "Stack", value: "Python / Django" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">01 / About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group"
            >
              <item.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-xl font-semibold text-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted-foreground leading-relaxed max-w-3xl text-lg"
        >
          I am an aspiring Python Backend Developer passionate about building efficient and scalable server-side systems. 
          With a strong foundation in Python, Django, and FastAPI, I aim to develop robust APIs and manage complex databases 
          using PostgreSQL and MongoDB. Currently pursuing B.Tech in Information Technology at Panimalar Engineering College 
          with a CGPA of 8.6.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
