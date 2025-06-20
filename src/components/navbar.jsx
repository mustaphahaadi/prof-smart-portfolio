import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { LanguageSelector } from './language-selector';
import { GlobalSearch } from './global-search';

export function Navbar({ isSearchOpen, setIsSearchOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const handleNavigation = useCallback((path) => {
    setIsOpen(false);
    setActiveDropdown(null);
    navigate(path);
  }, [navigate]);

  const toggleDropdown = useCallback((name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  }, [activeDropdown]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Research',
      path: '/research',
      dropdown: [
        { name: 'Research Areas', path: '/research#areas' },
        { name: 'Projects', path: '/research#projects' },
        { name: 'Research Map', path: '/research#map' },
      ],
    },
    {
      name: 'Publications',
      path: '/publications',
      dropdown: [
        { name: 'All Publications', path: '/publications' },
        { name: 'Recent Papers', path: '/publications#recent' },
        { name: 'By Category', path: '/publications#categories' },
      ],
    },
    {
      name: 'IRID',
      path: '/irid',
      dropdown: [
        { name: 'About IRID', path: '/irid' },
        { name: 'Research Projects', path: '/irid#projects' },
        { name: 'Team', path: '/irid#team' },
      ],
    },
    { name: 'Blog', path: '/blog' },
    {
      name: 'More',
      path: '#',
      dropdown: [
        { name: 'Resources', path: '/resources' },
        { name: 'News & Updates', path: '/news' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md border-b border-border/40'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex-shrink-0 transition-transform hover:scale-105 relative group"
              onClick={() => {
                setIsOpen(false);
                setActiveDropdown(null);
              }}
            >
              <span className="text-primary font-semibold text-xl transition-colors group-hover:text-primary/80 font-heading">
                Prof. S. A. Sarpong
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <div key={link.name} className="relative dropdown-container">
                  {link.dropdown ? (
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                        location.pathname.startsWith(link.path)
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => toggleDropdown(link.name)}
                    >
                      {link.name}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-card ring-1 ring-border/20 z-50"
                        onMouseEnter={() => setActiveDropdown(link.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-1">
                          {link.dropdown.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleNavigation(item.path)}
                              className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors relative group"
              aria-label="Search"
              title="Search (Ctrl+K)"
            >
              <Search className="h-5 w-5" />
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card text-foreground text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Ctrl+K
              </span>
            </button>
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-md text-foreground hover:text-primary transition-colors"
              aria-label="Search"
              title="Search (Ctrl+K)"
            >
              <Search className="h-5 w-5" />
            </button>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-border/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-1"
                        >
                          {link.dropdown.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => handleNavigation(item.path)}
                              className="w-full text-left px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                            >
                              {item.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className={`w-full text-left px-3 py-2 text-base font-medium transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global Search */}
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </nav>
  );
}