import { motion } from "framer-motion";
import { ExternalLink, Server, Brain, Gamepad2 } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Dynamic IT Support & Triage Agent",
    tags: ["Backend", "GenAI", "Cloud"],
    description:
      "Backend system for automated IT ticket triage using RESTful microservices and GenAI-powered categorization. Integrated Hybrid RAG with LLMs for solution retrieval and diagnostic summarization.",
    tech: "FastAPI · LangChain · OpenAI · Pinecone · AWS · Docker · Kubernetes",
  },
  {
    icon: Gamepad2,
    title: "MindHero – Gamified Behavioral Analytics",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    description:
      "Scalable RESTful APIs powering a gamified behavioral analytics engine with transactional XP computation and streak validation backed by ACID-compliant PostgreSQL.",
    tech: "Node.js · Express.js · PostgreSQL · JWT · RBAC · Docker",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2 tracking-widest uppercase">03 / Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Things I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="glass rounded-2xl p-8 hover:shadow-glow hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon size={32} className="text-primary" />
                <ExternalLink size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

              <p className="text-xs font-mono text-muted-foreground/70">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
