import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Twitter, Linkedin, Github, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  const footerLinks = {
    Research: [
      { name: 'Current Projects', href: '/research#current' },
      { name: 'Publications', href: '/publications' },
      { name: 'Research Map', href: '/research#map' },
    ],
    Resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Events', href: '/events' },
      { name: 'Newsletter', href: '/newsletter' },
    ],
    Connect: [
      { name: 'Contact', href: '/contact' },
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Leading research in sustainable development and innovation.
              Exploring the intersection of technology, society, and environmental impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates on research and events.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-3 py-2 text-sm bg-background border border-input rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-green-600">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prof. S. A. Sarpong. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
