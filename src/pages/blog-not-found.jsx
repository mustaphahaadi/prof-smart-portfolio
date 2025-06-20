import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Search, Calendar } from 'lucide-react';

export default function BlogNotFound() {
  const recentPosts = [
    {
      id: 1,
      title: "Sustainable Energy Solutions for Rural Communities in Ghana",
      excerpt: "Exploring practical renewable energy implementations that can transform rural communities.",
      date: "October 15, 2023"
    },
    {
      id: 2,
      title: "Transforming Technical Education in West Africa",
      excerpt: "Discussing the challenges and opportunities in modernizing technical education curricula.",
      date: "August 22, 2023"
    },
    {
      id: 3,
      title: "Building Innovation Ecosystems in Ghanaian Universities",
      excerpt: "Analyzing the key components needed to foster innovation and entrepreneurship.",
      date: "July 5, 2023"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <BookOpen className="h-24 w-24 text-primary mx-auto mb-4" />
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4 font-heading">404</h1>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4 font-heading">Blog Post Not Found</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              The blog post you're looking for might have been moved, deleted, or never existed.
              But don't worry, there's plenty of other great content to explore!
            </p>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Recent Blog Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  className="bg-card rounded-lg p-4 border border-border hover:border-primary hover:shadow-md transition-all duration-300 text-left"
                >
                  <Link to={`/blog/${post.id}`} className="block">
                    <h4 className="font-medium text-foreground mb-2 hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Browse All Posts</span>
            </Link>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-foreground rounded-lg hover:bg-accent/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}