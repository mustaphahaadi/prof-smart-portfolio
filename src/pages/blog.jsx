import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'research', name: 'Research' },
    { id: 'education', name: 'Education' },
    { id: 'innovation', name: 'Innovation' },
    { id: 'sustainability', name: 'Sustainability' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Energy Solutions for Rural Communities in Ghana",
      excerpt: "Exploring practical renewable energy implementations that can transform rural communities in Ghana and address energy poverty challenges.",
      date: "October 15, 2023",
      author: "Prof. S. A. Sarpong",
      category: "sustainability",
      image: "/blog/sustainable-energy.jpg",
      tags: ["Renewable Energy", "Rural Development", "Sustainability"]
    },
    {
      id: 2,
      title: "Transforming Technical Education in West Africa",
      excerpt: "Discussing the challenges and opportunities in modernizing technical education curricula to meet industry demands and global standards.",
      date: "August 22, 2023",
      author: "Prof. S. A. Sarpong",
      category: "education",
      image: "/blog/technical-education.jpg",
      tags: ["Education", "Curriculum Development", "Technical Skills"]
    },
    {
      id: 3,
      title: "Building Innovation Ecosystems in Ghanaian Universities",
      excerpt: "Analyzing the key components needed to foster innovation and entrepreneurship in Ghanaian higher education institutions.",
      date: "July 5, 2023",
      author: "Prof. S. A. Sarpong",
      category: "innovation",
      image: "/blog/innovation-ecosystem.jpg",
      tags: ["Innovation", "Entrepreneurship", "Higher Education"]
    },
    {
      id: 4,
      title: "Research Collaboration Opportunities Between Academia and Industry",
      excerpt: "Exploring effective models for knowledge transfer and research collaboration between universities and industry partners in Ghana.",
      date: "May 18, 2023",
      author: "Prof. S. A. Sarpong",
      category: "research",
      image: "/blog/research-collaboration.jpg",
      tags: ["Research", "Industry Partnerships", "Knowledge Transfer"]
    },
    {
      id: 5,
      title: "Sustainable Manufacturing Practices for Ghanaian Industries",
      excerpt: "Examining how Ghanaian manufacturing companies can adopt sustainable practices to reduce environmental impact while remaining competitive.",
      date: "March 10, 2023",
      author: "Prof. S. A. Sarpong",
      category: "sustainability",
      image: "/blog/sustainable-manufacturing.jpg",
      tags: ["Manufacturing", "Sustainability", "Industry"]
    },
    {
      id: 6,
      title: "Digital Transformation in Technical Universities",
      excerpt: "Strategies for implementing digital technologies in teaching, research, and administrative processes in technical universities.",
      date: "January 25, 2023",
      author: "Prof. S. A. Sarpong",
      category: "education",
      image: "/blog/digital-transformation.jpg",
      tags: ["Digital Transformation", "Education Technology", "Technical Education"]
    }
  ];
  
  // Filter blog posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">Blog</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Insights, opinions, and updates on research, innovation, and education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
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
            
            {/* Blog Posts */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-12">
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-5 gap-6"
                  >
                    <div className="md:col-span-2">
                      <Link to={`/blog/${post.id}`} className="block">
                        <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 ring-1 ring-border/20">
                          <img 
                            src={post.image || "/placeholder.jpg"} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      </Link>
                    </div>
                    
                    <div className="md:col-span-3 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-foreground mb-3 font-heading">
                        <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <div 
                            key={tag} 
                            className="flex items-center gap-1 px-3 py-1 bg-accent/30 text-foreground rounded-full text-xs"
                          >
                            <Tag className="h-3 w-3" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mt-auto"
                      >
                        <span>Read More</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No blog posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-xl p-8 shadow-card ring-1 ring-border/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3 font-heading">Subscribe to My Newsletter</h2>
              <p className="text-muted-foreground">
                Stay updated with my latest research, publications, and insights
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-3">
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
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              By subscribing, you agree to receive email communications from me.
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}