import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "FastAPI", "DRF"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Postman", "Railway"],
  },
  {
    title: "Testing",
    skills: ["Pytest", "Unittest"],
  },
  {
    title: "Other",
    skills: ["Django ORM", "REST APIs", "JWT Auth"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">02 / Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Tech Arsenal</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
