import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: "AI-Driven Climate Change Analysis",
    description: "Leading a multi-institutional research project on climate pattern prediction using advanced machine learning models",
    image: "/projects/climate-research.jpg",
    tags: ["Machine Learning", "Climate Science", "Data Analysis"],
    link: "#"
  },
  {
    title: "Quantum Computing Applications",
    description: "Pioneering research on quantum algorithms for optimization problems in computational biology",
    image: "/projects/quantum-research.jpg",
    tags: ["Quantum Computing", "Computational Biology", "Algorithm Design"],
    link: "#"
  },
  {
    title: "Neural Network Architecture",
    description: "Development of novel neural network architectures for complex pattern recognition in medical imaging",
    image: "/projects/neural-research.jpg",
    tags: ["Deep Learning", "Medical Imaging", "Neural Networks"],
    link: "#"
  },
  {
    title: "Sustainable Energy Systems",
    description: "Research on optimization of renewable energy systems using advanced control algorithms",
    image: "/projects/energy-research.jpg",
    tags: ["Energy Systems", "Control Theory", "Optimization"],
    link: "#"
  }
];

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Featured Research Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of significant research initiatives and their impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden shadow-subtle hover:shadow-hover transition-all bg-card"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 p-6 text-card-foreground">
                    <h3 className="text-xl font-semibold mb-2 font-heading">{project.title}</h3>
                    <p className="text-sm mb-4 text-card-foreground/90">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-accent/20 rounded text-sm text-accent-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-block px-4 py-2 bg-accent text-accent-foreground rounded hover:bg-accent/90 transition-colors"
                    >
                      View Research
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 