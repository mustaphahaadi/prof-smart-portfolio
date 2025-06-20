import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  {
    category: "Frontend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: "React", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
      { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-cyan-600" },
    ]
  },
  {
    category: "Backend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    items: [
      { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
      { name: "Python", level: 80, color: "from-yellow-500 to-yellow-600" },
      { name: "SQL", level: 75, color: "from-orange-500 to-orange-600" },
    ]
  },
  {
    category: "Tools",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      { name: "Git", level: 90, color: "from-red-500 to-red-600" },
      { name: "Docker", level: 75, color: "from-blue-500 to-blue-600" },
      { name: "AWS", level: 70, color: "from-yellow-500 to-yellow-600" },
    ]
  }
];

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </motion.div>

        {/* Skill tabs */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tab navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/4"
          >
            <div className="sticky top-24 space-y-2">
              {skills.map((skillGroup, index) => (
                <button
                  key={skillGroup.category}
                  onClick={() => setActiveTab(index)}
                  className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'bg-card hover:bg-accent/50 text-foreground'
                  }`}
                >
                  <div className={`${activeTab === index ? 'text-primary-foreground' : 'text-primary'}`}>
                    {skillGroup.icon}
                  </div>
                  <span className="font-medium">{skillGroup.category}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-3/4"
          >
            {skills.map((skillGroup, groupIndex) => (
              <div 
                key={skillGroup.category}
                className={`${activeTab === groupIndex ? 'block' : 'hidden'}`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                        <span className="text-lg font-bold text-primary">{skill.level}%</span>
                      </div>
                      
                      <div className="h-3 bg-accent/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                      
                      {/* Skill level indicators */}
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Expert</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Skill description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8 p-6 bg-card rounded-xl shadow-card ring-1 ring-border/20"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="text-primary">{skillGroup.icon}</div>
                    <span>{skillGroup.category} Experience</span>
                  </h3>
                  <p className="text-muted-foreground">
                    {skillGroup.category === "Frontend" && "Experienced in building responsive and interactive user interfaces using modern frontend frameworks and libraries. Proficient in component-based architecture and state management."}
                    {skillGroup.category === "Backend" && "Skilled in developing robust server-side applications, RESTful APIs, and database management. Experienced with various backend frameworks and cloud services."}
                    {skillGroup.category === "Tools" && "Proficient with industry-standard development tools, version control systems, and deployment workflows. Experienced in containerization and cloud infrastructure."}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}