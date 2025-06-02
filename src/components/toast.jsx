import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const TOAST_DURATION = 5000;

const variants = {
  success: {
    icon: CheckCircle,
    className: 'bg-green-500 text-white',
  },
  error: {
    icon: AlertCircle,
    className: 'bg-red-500 text-white',
  },
  info: {
    icon: Info,
    className: 'bg-blue-500 text-white',
  },
  warning: {
    icon: AlertTriangle,
    className: 'bg-yellow-500 text-white',
  },
};

const Toast = ({ message, type = 'info', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { icon: Icon, className } = variants[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, TOAST_DURATION);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={`fixed bottom-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${className}`}
        >
          <Icon className="h-5 w-5" />
          <p className="text-sm font-medium">{message}</p>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 hover:opacity-80 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast; 