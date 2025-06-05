import { motion } from 'framer-motion';

const skills = [
  {
    category: "Research Methods",
    items: [
      { name: "Experimental Design", level: 95 },
      { name: "Data Analysis", level: 90 },
      { name: "Statistical Modeling", level: 92 },
    ]
  },
  {
    category: "Technical Expertise",
    items: [
      { name: "Machine Learning", level: 90 },
      { name: "Computational Modeling", level: 88 },
      { name: "Scientific Computing", level: 85 },
    ]
  },
  {
    category: "Academic Skills",
    items: [
      { name: "Grant Writing", level: 92 },
      { name: "Research Leadership", level: 90 },
      { name: "Publication & Review", level: 95 },
    ]
  }
];

export function SkillsSection() {
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
          <h2 className="text-3xl font-bold text-primary mb-4 font-heading">Research Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of research methodologies and academic capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-subtle hover:shadow-hover transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-6 font-heading">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-card-foreground">{skill.name}</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 