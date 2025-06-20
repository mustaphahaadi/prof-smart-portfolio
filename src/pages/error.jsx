import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Search, BookOpen, User, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Error() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simple search logic - redirect to relevant pages based on keywords
      const query = searchQuery.toLowerCase();
      if (query.includes('research') || query.includes('project')) {
        navigate('/research');
      } else if (query.includes('publication') || query.includes('paper')) {
        navigate('/publications');
      } else if (query.includes('irid') || query.includes('institute')) {
        navigate('/irid');
      } else if (query.includes('contact') || query.includes('email')) {
        navigate('/contact');
      } else if (query.includes('blog') || query.includes('article')) {
        navigate('/blog');
      } else {
        navigate('/');
      }
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/', icon: Home, description: 'Return to homepage' },
    { name: 'Research', path: '/research', icon: Search, description: 'Explore research areas' },
    { name: 'Publications', path: '/publications', icon: BookOpen, description: 'Browse publications' },
    { name: 'About', path: '/#about', icon: User, description: 'Learn more about Prof. Sarpong' },
    { name: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4 font-heading">404</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              The page you are looking for might have been removed, had its name changed,
              or is temporarily unavailable.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search for content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Search
              </button>
            </form>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="block p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-medium text-foreground">{link.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground text-left">{link.description}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}