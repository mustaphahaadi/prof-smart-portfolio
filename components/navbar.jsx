import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';
import { LanguageSelector } from './language-selector';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-tertiary/95 backdrop-blur-sm shadow-subtle' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-primary font-semibold text-xl hover:text-secondary transition-colors">
            Portfolio
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-primary hover:text-secondary transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-primary hover:text-secondary transition-colors">
              Projects
            </Link>
            <Link to="/skills" className="text-primary hover:text-secondary transition-colors">
              Skills
            </Link>
            <Link to="/contact" className="text-primary hover:text-secondary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
