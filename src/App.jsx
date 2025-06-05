import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './styles/globals.css'
import Home from './pages/home'
import Blog from './pages/blog'
import BlogPost from './pages/blog-post'
import Contact from "./pages/contact";
import Research from "./pages/research";
import Publications from "./pages/publications";
import IRID from "./pages/irid";
import Error from "./pages/error";
import { Navbar } from "./components/navbar";
// import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { ContactSection } from "./components/contact-section";
import Footer from "./components/footer";
import ScrollToTopButton from "./components/scroll-to-top-button";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Professional Portfolio</title>
        <meta name="description" content="Professional portfolio website" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-blue-600 focus:p-3 focus:border-b focus:border-blue-600">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16 pb-8">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                {/* <AboutSection /> */}
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/irid" element={<IRID />} />
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
