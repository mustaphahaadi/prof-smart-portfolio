import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-background to-gray-50 dark:from-blue-950 dark:via-background dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left flex-1"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Prof. Smart Asomaning Sarpong
                <span className="block text-blue-600 dark:text-blue-400 mt-2">Senior Researcher Fellow & IRID Director</span>
              </h1>
              
              {/* Static Description */}
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Leading research in sustainable development and innovation. 
                Exploring the intersection of technology, society, and environmental impact.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  to="/research"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-lg hover:shadow-xl"
                >
                  Explore Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
                  download
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Link>
              </div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 h-48 md:w-64 md:h-64 order-first md:order-last"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-primary/5 animate-pulse" />
              <img
                src="/profile-photo.jpg"
                alt="Prof. Smart Asomaning Sarpong"
                className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-xl"
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: 'Publications', value: '50+', color: 'from-blue-600 to-blue-700' },
              { label: 'Research Projects', value: '20+', color: 'from-gray-600 to-gray-700' },
              { label: 'Years Experience', value: '15+', color: 'from-blue-500 to-blue-600' },
              { label: 'Citations', value: '1000+', color: 'from-gray-500 to-gray-600' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': stat.color.split(' ')[1],
                  '--tw-gradient-to': stat.color.split(' ')[3],
                }}
              >
                <div className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white drop-shadow-md">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-blue-200 dark:border-blue-800 rounded-full flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-blue-400 dark:bg-blue-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
