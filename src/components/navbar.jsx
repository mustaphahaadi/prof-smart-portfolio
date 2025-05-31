import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSelector } from "./language-selector"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
        scrolled ? "bg-white dark:bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <span className="text-xl font-heading font-bold text-primary dark:text-white">Prof. S. A. Sarpong</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-secondary ${
                    isActive ? "text-secondary dark:text-blue-300" : "text-primary dark:text-white"
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
                className="ml-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
                download
              >
                Download CV
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button className="text-primary dark:text-white" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 font-medium transition-colors ${
                      isActive ? "text-secondary dark:text-blue-300" : "text-primary dark:text-white"
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
                className="mx-4 px-4 py-2 bg-primary text-white rounded-md text-center hover:bg-opacity-90 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
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
