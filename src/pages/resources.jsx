import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download, ExternalLink, Search, Filter, BookOpen, FileText, Video, Link as LinkIcon } from 'lucide-react';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'tools', name: 'Research Tools' },
    { id: 'datasets', name: 'Datasets' },
    { id: 'templates', name: 'Templates' },
    { id: 'guides', name: 'Guides' },
    { id: 'software', name: 'Software' }
  ];

  const resources = [
    {
      id: 1,
      title: "Research Methodology Template",
      description: "Comprehensive template for structuring research methodology sections in academic papers.",
      category: "templates",
      type: "document",
      downloadUrl: "/resources/research-methodology-template.docx",
      size: "2.3 MB",
      downloads: 1250,
      tags: ["Research", "Methodology", "Academic Writing"]
    },
    {
      id: 2,
      title: "Ghana Energy Data Portal",
      description: "Comprehensive dataset on Ghana's energy consumption, production, and infrastructure.",
      category: "datasets",
      type: "external",
      externalUrl: "https://energydata.info/ghana",
      tags: ["Energy", "Ghana", "Statistics"]
    },
    {
      id: 3,
      title: "Statistical Analysis Toolkit",
      description: "Collection of R scripts and Python notebooks for common statistical analyses in engineering research.",
      category: "tools",
      type: "software",
      downloadUrl: "/resources/statistical-toolkit.zip",
      size: "15.7 MB",
      downloads: 890,
      tags: ["Statistics", "R", "Python", "Analysis"]
    },
    {
      id: 4,
      title: "Grant Writing Guide for African Researchers",
      description: "Step-by-step guide for writing successful research grant proposals in the African context.",
      category: "guides",
      type: "document",
      downloadUrl: "/resources/grant-writing-guide.pdf",
      size: "4.1 MB",
      downloads: 2100,
      tags: ["Grant Writing", "Research Funding", "Africa"]
    },
    {
      id: 5,
      title: "Sustainable Energy Assessment Tool",
      description: "Excel-based tool for assessing renewable energy potential in rural communities.",
      category: "tools",
      type: "software",
      downloadUrl: "/resources/energy-assessment-tool.xlsx",
      size: "8.9 MB",
      downloads: 567,
      tags: ["Renewable Energy", "Assessment", "Rural Development"]
    },
    {
      id: 6,
      title: "Technical Education Curriculum Framework",
      description: "Framework for developing modern technical education curricula aligned with industry needs.",
      category: "templates",
      type: "document",
      downloadUrl: "/resources/curriculum-framework.pdf",
      size: "3.2 MB",
      downloads: 780,
      tags: ["Education", "Curriculum", "Technical Skills"]
    },
    {
      id: 7,
      title: "Research Collaboration Platform",
      description: "Web-based platform for facilitating research collaborations between African universities.",
      category: "software",
      type: "external",
      externalUrl: "https://africanresearch.net",
      tags: ["Collaboration", "Platform", "Universities"]
    },
    {
      id: 8,
      title: "Innovation Metrics Dashboard",
      description: "Interactive dashboard for tracking innovation indicators in higher education institutions.",
      category: "tools",
      type: "external",
      externalUrl: "https://innovation-metrics.edu",
      tags: ["Innovation", "Metrics", "Dashboard"]
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getIcon = (type) => {
    switch (type) {
      case 'document': return FileText;
      case 'software': return Download;
      case 'external': return ExternalLink;
      default: return BookOpen;
    }
  };

  const handleDownload = (resource) => {
    // In a real application, this would track downloads
    console.log(`Downloading: ${resource.title}`);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">Resources & Tools</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Free resources, tools, and datasets to support your research and academic work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeCategory === category.id 
                        ? 'bg-primary text-primary-foreground shadow-sm' 
                        : 'bg-accent/30 text-foreground hover:bg-accent/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => {
                  const Icon = getIcon(resource.type);
                  return (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">
                            {resource.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {resource.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-accent/30 text-foreground rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Resource Info */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        {resource.size && (
                          <span>Size: {resource.size}</span>
                        )}
                        {resource.downloads && (
                          <span>{resource.downloads} downloads</span>
                        )}
                      </div>
                      
                      {/* Action Button */}
                      {resource.type === 'external' ? (
                        <a
                          href={resource.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Visit Resource</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => handleDownload(resource)}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No resources found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-card ring-1 ring-border/20 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">Contribute Resources</h2>
            <p className="text-muted-foreground mb-6">
              Have a useful resource to share with the research community? 
              I welcome contributions that can help fellow researchers and academics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:prof.sarpong@ktu.edu.gh?subject=Resource Contribution"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Submit Resource
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-accent text-foreground rounded-lg hover:bg-accent/80 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}