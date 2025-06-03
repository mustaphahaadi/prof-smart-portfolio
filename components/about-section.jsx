import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-hover">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary rounded-lg -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">About Me</h2>
            <p className="text-primary/80 leading-relaxed">
              I'm a passionate developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies, I create
              seamless user experiences and robust solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-subtle">
                <h3 className="font-semibold text-primary">Experience</h3>
                <p className="text-secondary">5+ Years</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-subtle">
                <h3 className="font-semibold text-primary">Projects</h3>
                <p className="text-secondary">20+ Completed</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors">
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 