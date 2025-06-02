import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchHighlights = () => {
  const highlights = [
    {
      title: 'Sustainable Development',
      description: 'Research on sustainable development practices and their impact on economic growth.',
      icon: <BookOpen className="h-6 w-6" />,
      link: '/research#sustainable-development',
      stats: {
        publications: 15,
        citations: 300,
      },
    },
    {
      title: 'Innovation Management',
      description: 'Exploring strategies for managing innovation in organizations and their effect on performance.',
      icon: <Users className="h-6 w-6" />,
      link: '/research#innovation-management',
      stats: {
        publications: 12,
        citations: 250,
      },
    },
    {
      title: 'Technology Adoption',
      description: 'Studying the factors influencing technology adoption in developing economies.',
      icon: <Award className="h-6 w-6" />,
      link: '/research#technology-adoption',
      stats: {
        publications: 10,
        citations: 200,
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our key research areas and their impact on sustainable development
            and innovation.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={itemVariants}
              className="group relative bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                {highlight.icon}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {highlight.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {highlight.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <div className="text-sm">
                    <span className="block font-semibold text-primary">
                      {highlight.stats.publications}
                    </span>
                    <span className="text-muted-foreground">Publications</span>
                  </div>
                  <div className="text-sm">
                    <span className="block font-semibold text-primary">
                      {highlight.stats.citations}
                    </span>
                    <span className="text-muted-foreground">Citations</span>
                  </div>
                </div>

                <Link
                  to={highlight.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="absolute inset-0 rounded-xl border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/research"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View All Research
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights; 