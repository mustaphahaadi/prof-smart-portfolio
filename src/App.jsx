import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useEffect, useState } from 'react'
import './styles/globals.css'
import Home from './pages/home'
import Research from "./pages/research";
import Publications from "./pages/publications";
import IRID from "./pages/irid";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog-post";
import Resources from "./pages/resources";
import News from "./pages/news";
import Error from "./pages/error";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { ScrollToTopButton } from "./components/scroll-to-top-button";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K to open search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Prof. S. A. Sarpong | Kumasi Technical University</title>
        <meta name="description" content="Official portfolio of Prof. S. A. Sarpong, Senior Research Fellow and Director of IRID at Kumasi Technical University" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@700;900&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:p-3 focus:border-b focus:border-primary">
          Skip to main content
        </a>
        <Navbar 
          isSearchOpen={isSearchOpen} 
          setIsSearchOpen={setIsSearchOpen} 
        />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/irid" element={<IRID />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  )
}

export default App