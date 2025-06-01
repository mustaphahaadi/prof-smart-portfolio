import { NavLink } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Twitter, Book, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Prof. Smart Asomaning Sarpong</h3>
            <p className="mb-4 text-gray-300">
              Academic researcher and IRID leader specializing in innovative research methodologies and
              interdisciplinary studies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Book size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/research" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Research
                </NavLink>
              </li>
              <li>
                <NavLink to="/publications" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Publications
                </NavLink>
              </li>
              <li>
                <NavLink to="/irid" className="text-gray-300 hover:text-blue-400 transition-colors">
                  IRID Leadership
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Blog & Insights
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-300" />
                <a
                  href="mailto:professor@university.edu"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  professor@university.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-gray-300" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-gray-300" />
                <span className="text-gray-300">Department of Research, University Campus, Academic Building, Room 123</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2 text-white">Subscribe to Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Prof. Smart Asomaning Sarpong. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a
                href="/privacy-policy"
                className="text-sm text-gray-300 hover:text-blue-400 transition-colors mr-4"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
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
