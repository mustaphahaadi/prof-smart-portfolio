import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentPublications = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const publications = [
    {
      title: 'Sustainable Development in Emerging Economies',
      authors: 'Sarpong, S.A., Johnson, M., & Williams, P.',
      journal: 'Journal of Sustainable Development',
      year: 2023,
      category: 'Sustainable Development',
      doi: '10.1234/jsd.2023.001',
      abstract: 'This study examines the impact of sustainable development practices on economic growth in emerging economies...',
    },
    {
      title: 'Innovation Management Strategies',
      authors: 'Sarpong, S.A., & Thompson, R.',
      journal: 'International Journal of Innovation Management',
      year: 2023,
      category: 'Innovation',
      doi: '10.1234/ijim.2023.002',
      abstract: 'An analysis of effective innovation management strategies in technology-driven organizations...',
    },
    {
      title: 'Technology Adoption in Developing Nations',
      authors: 'Sarpong, S.A., Chen, L., & Kumar, S.',
      journal: 'Technology in Society',
      year: 2022,
      category: 'Technology',
      doi: '10.1234/tis.2022.003',
      abstract: 'Investigating the factors that influence technology adoption in developing nations...',
    },
  ];

  const years = ['all', ...new Set(publications.map(pub => pub.year))];
  const categories = ['all', ...new Set(publications.map(pub => pub.category))];

  const filteredPublications = publications.filter(pub => {
    const yearMatch = selectedYear === 'all' || pub.year === parseInt(selectedYear);
    const categoryMatch = selectedCategory === 'all' || pub.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recent Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest research publications and academic contributions
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none bg-card border border-input rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-card border border-input rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.doi}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    {pub.year}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                  {pub.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {pub.authors}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {pub.journal}
                </p>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                  {pub.abstract}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    DOI: {pub.doi}
                  </span>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    View Paper
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/publications"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            View All Publications
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPublications; 