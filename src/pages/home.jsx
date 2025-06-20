import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, FileText } from 'lucide-react';

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-accent/10 pt-20 pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading leading-tight">
                  Prof. S. A. Sarpong
                </h1>
                <div className="h-1 w-24 bg-primary rounded-full my-6"></div>
                <h2 className="text-xl md:text-2xl text-muted-foreground">
                  Senior Research Fellow & Director of IRID
                </h2>
                <p className="text-lg text-muted-foreground mt-2">
                  Kumasi Technical University (KsTU)
                </p>
              </motion.div>

              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Leading research in sustainable development, innovation, and technology integration. 
                Exploring the intersection of academic research and practical applications to address 
                global challenges.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link 
                  to="/research" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <span>View Research</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-accent text-foreground rounded-lg hover:bg-accent/80 transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-card-hover ring-1 ring-border/20">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Professor S. A. Sarpong" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/10 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary/10 rounded-2xl -z-10"></div>
                
                {/* Stats badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute -right-4 top-1/4 bg-card rounded-xl p-3 shadow-lg ring-1 ring-border/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">50+ Publications</span>
                  </div>
                </motion.div>
                
                {/* Experience badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -left-4 bottom-1/4 bg-card rounded-xl p-3 shadow-lg ring-1 ring-border/20"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">20+ Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="h-6 w-6" />, value: "50+", label: "Publications" },
              { icon: <FileText className="h-6 w-6" />, value: "25+", label: "Research Projects" },
              { icon: <Users className="h-6 w-6" />, value: "30+", label: "Collaborations" },
              { icon: <Award className="h-6 w-6" />, value: "15+", label: "Awards" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Focus Areas */}
      <div className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Research Focus Areas</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Exploring innovative solutions to global challenges through interdisciplinary research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Development",
                description: "Research on sustainable practices, renewable energy, and environmental conservation strategies for developing regions.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Technology Integration",
                description: "Investigating effective methods for integrating modern technology into educational systems and industrial processes in Ghana.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Innovation & Entrepreneurship",
                description: "Developing frameworks for fostering innovation and entrepreneurship in academic and industrial settings in West Africa.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary">{area.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
                <Link 
                  to="/research" 
                  className="mt-4 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}