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
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Professional Portfolio</title>
        <meta name="description" content="Professional portfolio website" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="pt-16 pb-8">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/research" element={<Research />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/irid" element={<IRID />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
