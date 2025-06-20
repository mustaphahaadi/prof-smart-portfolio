import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Tag, ExternalLink, Award, Users, BookOpen, Briefcase } from 'lucide-react';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'awards', name: 'Awards' },
    { id: 'publications', name: 'Publications' },
    { id: 'events', name: 'Events' },
    { id: 'collaborations', name: 'Collaborations' },
    { id: 'media', name: 'Media' }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Awarded Best Research Paper at ICSET 2024",
      excerpt: "Our paper on 'Sustainable Energy Solutions for Rural Ghana' received the Best Research Paper Award at the International Conference on Sustainable Energy Technologies.",
      date: "2024-01-15",
      category: "awards",
      image: "/news/award-ceremony.jpg",
      tags: ["Award", "Research", "Sustainable Energy"],
      link: "/publications#recent"
    },
    {
      id: 2,
      title: "New Collaboration with MIT Energy Initiative",
      excerpt: "Excited to announce a new research collaboration with MIT's Energy Initiative focusing on renewable energy solutions for developing countries.",
      date: "2024-01-10",
      category: "collaborations",
      image: "/news/mit-collaboration.jpg",
      tags: ["Collaboration", "MIT", "International"],
      link: "/research#collaborations"
    },
    {
      id: 3,
      title: "Featured in Ghana Tech Magazine",
      excerpt: "Interview published in Ghana Tech Magazine discussing the future of technical education and innovation in Ghana's universities.",
      date: "2024-01-05",
      category: "media",
      image: "/news/magazine-feature.jpg",
      tags: ["Media", "Interview", "Education"],
      externalLink: "https://ghanatechmagazine.com/prof-sarpong-interview"
    },
    {
      id: 4,
      title: "IRID Launches New Innovation Hub",
      excerpt: "The Institute of Research, Innovation and Development officially opened its new Innovation Hub, providing state-of-the-art facilities for student entrepreneurs.",
      date: "2023-12-20",
      category: "events",
      image: "/news/innovation-hub.jpg",
      tags: ["IRID", "Innovation", "Students"],
      link: "/irid#innovation-hub"
    },
    {
      id: 5,
      title: "Published in Nature Energy",
      excerpt: "Our latest research on 'Decentralized Energy Systems in Sub-Saharan Africa' has been published in Nature Energy journal.",
      date: "2023-12-15",
      category: "publications",
      image: "/news/nature-publication.jpg",
      tags: ["Publication", "Nature", "Energy Systems"],
      externalLink: "https://nature.com/articles/energy-systems-africa"
    },
    {
      id: 6,
      title: "Keynote Speaker at African Energy Summit",
      excerpt: "Delivered keynote address on 'Innovation in Renewable Energy: The African Perspective' at the 2023 African Energy Summit in Lagos.",
      date: "2023-11-28",
      category: "events",
      image: "/news/keynote-speech.jpg",
      tags: ["Keynote", "Conference", "Africa"],
      link: "/research#presentations"
    },
    {
      id: 7,
      title: "UNESCO Chair in Technical Education",
      excerpt: "Appointed as UNESCO Chair in Technical Education and Sustainable Development, focusing on capacity building in African technical universities.",
      date: "2023-11-15",
      category: "awards",
      image: "/news/unesco-chair.jpg",
      tags: ["UNESCO", "Chair", "Education"],
      link: "/about#achievements"
    },
    {
      id: 8,
      title: "New Research Grant from World Bank",
      excerpt: "Secured $2.5M research grant from the World Bank to study sustainable manufacturing practices in West African industries.",
      date: "2023-10-30",
      category: "collaborations",
      image: "/news/world-bank-grant.jpg",
      tags: ["Grant", "World Bank", "Manufacturing"],
      link: "/research#funding"
    }
  ];

  const filteredNews = newsItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  const getIcon = (category) => {
    switch (category) {
      case 'awards': return Award;
      case 'publications': return BookOpen;
      case 'events': return Calendar;
      case 'collaborations': return Users;
      case 'media': return ExternalLink;
      default: return Calendar;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">News & Updates</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Latest news, achievements, and updates from my research and academic activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Category Filter */}
            <div className="mb-12">
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
            
            {/* News Items */}
            <div className="space-y-8">
              {filteredNews.map((item, index) => {
                const Icon = getIcon(item.category);
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="aspect-[4/3] md:aspect-square overflow-hidden">
                          <img 
                            src={item.image || "/placeholder.jpg"} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-1.5 bg-primary/10 rounded-lg">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(item.date)}</span>
                          </div>
                        </div>
                        
                        <h2 className="text-xl font-bold text-foreground mb-3 font-heading">
                          {item.title}
                        </h2>
                        
                        <p className="text-muted-foreground mb-4">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.tags.map(tag => (
                            <div 
                              key={tag} 
                              className="flex items-center gap-1 px-2 py-1 bg-accent/30 text-foreground rounded text-xs"
                            >
                              <Tag className="h-3 w-3" />
                              <span>{tag}</span>
                            </div>
                          ))}
                        </div>
                        
                        {(item.link || item.externalLink) && (
                          <div className="flex gap-3">
                            {item.link && (
                              <a
                                href={item.link}
                                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                              >
                                <span>Read More</span>
                                <ExternalLink className="ml-1 h-4 w-4" />
                              </a>
                            )}
                            {item.externalLink && (
                              <a
                                href={item.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                              >
                                <span>External Link</span>
                                <ExternalLink className="ml-1 h-4 w-4" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-card ring-1 ring-border/20 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive the latest news and updates about my research, publications, and academic activities.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to receive email communications. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}