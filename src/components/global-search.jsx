import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, FileText, User, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GlobalSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  // Sample search data (in a real app, this would come from an API)
  const searchData = [
    {
      id: 1,
      title: "Sustainable Energy Solutions for Rural Communities",
      type: "blog",
      url: "/blog/1",
      excerpt: "Exploring practical renewable energy implementations that can transform rural communities in Ghana.",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Research Areas",
      type: "page",
      url: "/research",
      excerpt: "Explore my current research focus areas including sustainable energy and innovation.",
      icon: FileText
    },
    {
      id: 3,
      title: "Publications",
      type: "page",
      url: "/publications",
      excerpt: "Browse through my academic publications and research papers.",
      icon: FileText
    },
    {
      id: 4,
      title: "About Prof. Sarpong",
      type: "page",
      url: "/#about",
      excerpt: "Learn more about my background, experience, and academic journey.",
      icon: User
    },
    {
      id: 5,
      title: "IRID - Institute of Research, Innovation and Development",
      type: "page",
      url: "/irid",
      excerpt: "Discover the work and mission of IRID at Kumasi Technical University.",
      icon: Briefcase
    },
    {
      id: 6,
      title: "Innovation in Technical Education",
      type: "blog",
      url: "/blog/2",
      excerpt: "Discussing the future of technical education and curriculum development.",
      icon: BookOpen
    },
    {
      id: 7,
      title: "Resources and Tools",
      type: "page",
      url: "/resources",
      excerpt: "Free resources, tools, and datasets to support your research and academic work.",
      icon: FileText
    },
    {
      id: 8,
      title: "News and Updates",
      type: "page",
      url: "/news",
      excerpt: "Latest news, achievements, and updates from my research and academic activities.",
      icon: FileText
    }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      const filteredResults = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6); // Limit to 6 results
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-2xl mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-card rounded-xl shadow-2xl ring-1 ring-border/20 overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-border/20">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for content, pages, or topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button
                onClick={onClose}
                className="p-1 hover:bg-accent rounded-md transition-colors"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading && (
                <div className="p-4 text-center">
                  <div className="inline-flex items-center gap-2 text-muted-foreground">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <span>Searching...</span>
                  </div>
                </div>
              )}

              {!isLoading && query && results.length === 0 && (
                <div className="p-4 text-center text-muted-foreground">
                  No results found for "{query}"
                </div>
              )}

              {!isLoading && results.length > 0 && (
                <div className="py-2">
                  {results.map((result, index) => {
                    const Icon = result.icon;
                    return (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                      >
                        <Link
                          to={result.url}
                          onClick={handleResultClick}
                          className="flex items-start gap-3 p-3 mx-2 rounded-lg hover:bg-accent transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg mt-1">
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-foreground mb-1 truncate">
                              {result.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {result.excerpt}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs px-2 py-1 bg-accent/50 text-foreground rounded-full capitalize">
                                {result.type}
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {!query && (
                <div className="p-4 text-center text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>Start typing to search for content...</p>
                </div>
              )}
            </div>

            {/* Search Tips */}
            {!query && (
              <div className="border-t border-border/20 p-3 bg-accent/5">
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Tips:</span> Search for research topics, publications, blog posts, or use keywords like "energy", "innovation", "education"
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}