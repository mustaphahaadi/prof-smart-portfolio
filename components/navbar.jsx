import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';
import { LanguageSelector } from './language-selector';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navItems = [
    { name: 'Research', path: '/research', hasDropdown: true, dropdownItems: [
      { name: 'Areas', path: '/research#areas' },
      { name: 'Projects', path: '/research#projects' },
      { name: 'Map', path: '/research#map' }
    ]},
    { name: 'Publications', path: '/publications', hasDropdown: false },
    { name: 'IRID', path: '/irid', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md border-b border-border/40' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="relative group"
            aria-label="Home"
          >
            <span className="text-primary font-semibold text-xl transition-colors group-hover:text-primary/80 font-heading">
              Prof. S. A. Sarpong
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="dropdown-container">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="relative py-1 text-foreground hover:text-primary transition-colors group flex items-center"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div 
                        className="absolute left-0 mt-2 w-40 rounded-lg bg-card border border-border/20 shadow-lg py-1 z-50"
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className="relative py-1 text-foreground hover:text-primary transition-colors group"
                  >
                    <span>{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-md border-b border-border/40 shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between px-3 py-2 text-foreground hover:text-primary hover:bg-accent/30 rounded-md transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block py-2 px-3 text-foreground hover:text-primary hover:bg-accent/30 rounded-md transition-colors"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  to={item.path} 
                  className="block py-2 px-3 text-foreground hover:text-primary hover:bg-accent/30 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
