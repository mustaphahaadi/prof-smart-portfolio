import { useState, useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import LanguageSelector from "./language-selector"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const menuElement = mobileMenuRef.current;
    if (!menuElement) return;

    const focusableElements = menuElement.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (event) => {
      const isFirstElementFocused = document.activeElement === firstElement;
      const isLastElementFocused = document.activeElement === lastElement;

      if (event.shiftKey) { // Shift + Tab
        if (isFirstElementFocused) {
          lastElement.focus();
          event.preventDefault();
        }
      } else { // Tab
        if (isLastElementFocused) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    menuElement.addEventListener('keydown', handleTabKey);

    // Attempt to focus the first element when the menu opens
    firstElement?.focus();

    return () => {
      menuElement.removeEventListener('keydown', handleTabKey);
      // Optional: return focus to the menu toggle button when closing
      // const menuToggleButton = document.querySelector('[aria-label="Toggle menu"]');
      // menuToggleButton?.focus();
    };
  }, [isMenuOpen]); // Rerun effect when menu opens/closes

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "Publications", path: "/publications" },
    { name: "IRID Leadership", path: "/irid" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white dark:bg-gray-900 shadow-md" 
          : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="text-xl font-bold text-foreground dark:text-foreground hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              Prof. S. A. Sarpong
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors ${
                    isActive 
                      ? "text-blue-700 dark:text-blue-300 font-semibold" 
                      : "text-foreground dark:text-foreground hover:text-blue-700 dark:hover:text-blue-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex items-center space-x-2 ml-4">
              <ThemeToggle />
              <LanguageSelector />

              <a
                href="/cv.pdf"
                className="ml-2 px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white rounded-md hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors font-medium"
                download
              >
                Download CV
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button 
              className="text-foreground dark:text-foreground hover:text-blue-700 dark:hover:text-blue-300 transition-colors" 
              onClick={toggleMenu} 
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav ref={mobileMenuRef} className="mobile-menu md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 font-medium transition-colors ${
                      isActive 
                        ? "text-blue-700 dark:text-blue-300 font-semibold" 
                        : "text-foreground dark:text-foreground hover:text-blue-700 dark:hover:text-blue-300"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="flex items-center px-4 py-2">
                <LanguageSelector />
              </div>

              <a
                href="/cv.pdf"
                className="mx-4 px-4 py-2 bg-blue-700 dark:bg-blue-600 text-white rounded-md text-center hover:bg-blue-800 dark:hover:bg-blue-500 transition-colors font-medium"
                download
              >
                Download CV
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
