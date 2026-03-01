import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    role: "Web Application Development Intern",
    company: "Test Yantra Software Solutions",
    period: "Feb 2025 – Apr 2025",
    points: [
      "Hands-on experience with HTML, CSS, JavaScript, React.js, and Firebase",
      "Built and deployed responsive web applications using modern practices",
    ],
  },
  {
    role: "Frontend Web Development Intern",
    company: "Codtech IT Solutions",
    period: "May 2025 – Jun 2025",
    points: [
      "Implemented modern UI components and improved user experience",
      "Participated in real-time development and deployment tasks",
    ],
  },
];

const certifications = [
  "Oracle Cloud Infrastructure 2024",
  "Generative AI Certified Professional",
  "FutureSkills Prime (NASSCOM) – Acquiring Data",
  "AWS Educate – Introduction to Cloud 101",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">04 / Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Where I've Worked</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Internships */}
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="glass rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary rounded-full" />
                <div className="pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-primary" />
                    <p className="text-xs font-mono text-primary">{exp.period}</p>
                  </div>
                  <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-primary" />
              <h3 className="text-lg font-bold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-primary shrink-0" />
                  <p className="text-sm text-secondary-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
