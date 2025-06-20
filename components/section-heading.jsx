import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle, alignment = 'center' }) {
  const alignmentClasses = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignmentClasses[alignment]}`}
    >
      <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">{title}</h2>
      <div className={`h-1 w-20 bg-primary rounded-full mb-6 ${
        alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''
      }`}></div>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}