import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, Users, ExternalLink } from 'lucide-react';
import ApiService from '../services/api';

export default function Research() {
  const [researchAreas, setResearchAreas] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [collaborations, setCollaborations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [areasData, ongoingData, completedData] = await Promise.all([
          ApiService.getResearchAreas(),
          ApiService.getOngoingProjects(),
          ApiService.getCompletedProjects()
        ]);
        
        setResearchAreas(areasData.results || []);
        setOngoingProjects(ongoingData.results || []);
        setCompletedProjects(completedData.results || []);
      } catch (error) {
        console.error('Error fetching research data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">Research</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Exploring innovative solutions for sustainable development, technology integration, and educational advancement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="areas" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Research Areas</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My research spans multiple disciplines, focusing on practical solutions for real-world challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary text-2xl">
                    {area.icon === 'leaf' && '🌱'}
                    {area.icon === 'cpu' && '💻'}
                    {area.icon === 'lightbulb' && '💡'}
                    {area.icon === 'book' && '📚'}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section id="projects" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Current Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Active research projects making a difference in communities and institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
              >
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">
                      Ongoing
                    </span>
                    <span className="text-sm text-muted-foreground">{project.progress}% Complete</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.location && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                    )}
                    {project.funding_source && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Funded by {project.funding_source}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Completed Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Successfully completed research initiatives with measurable impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                    Completed
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(project.start_date).getFullYear()} - {project.end_date ? new Date(project.end_date).getFullYear() : 'Present'}</span>
                  </div>
                  {project.location && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Map */}
      <section id="map" className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Global Research Collaborations</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Research partnerships and collaborations across the globe
            </p>
          </motion.div>

          <div className="bg-card rounded-xl p-8 shadow-card ring-1 ring-border/20">
            <div className="aspect-[16/9] bg-accent/20 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Research Collaboration Map</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}