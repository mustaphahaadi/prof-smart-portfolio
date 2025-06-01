import { NavLink } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Twitter, Book, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-gray-900 dark:text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white dark:text-white">Prof. Smart Asomaning Sarpong</h3>
            <p className="mb-4 text-gray-300 dark:text-gray-400">
              Academic researcher and IRID leader specializing in innovative research methodologies and
              interdisciplinary studies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300"
              >
                <Book size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/research" className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300">
                  Research
                </NavLink>
              </li>
              <li>
                <NavLink to="/publications" className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300">
                  Publications
                </NavLink>
              </li>
              <li>
                <NavLink to="/irid" className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300">
                  IRID Leadership
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300">
                  Blog & Insights
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white dark:text-white">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400 dark:text-gray-400" />
                <a
                  href="mailto:professor@university.edu"
                  className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300"
                >
                  professor@university.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-400 dark:text-gray-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-400 dark:text-gray-400" />
                <span className="text-gray-400 dark:text-gray-400">Department of Research, University Campus, Academic Building, Room 123</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2 text-white dark:text-white">Subscribe to Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 dark:bg-blue-600 text-white rounded-r-md hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-400">&copy; {new Date().getFullYear()} Prof. Smart Asomaning Sarpong. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors mr-4 dark:text-gray-400 dark:hover:text-blue-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors dark:text-gray-400 dark:hover:text-blue-300"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
