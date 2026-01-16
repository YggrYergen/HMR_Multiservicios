import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-accent"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
        >
          <div className="relative w-24 h-24">
            {/* Box outline */}
            <motion.div
              className="absolute inset-0 border-4 border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Box flap (top) */}
            <motion.div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-accent border-4 border-white border-b-0"
              initial={{ rotateX: -90 }}
              animate={{ rotateX: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              style={{ transformOrigin: 'bottom' }}
            />
            
            {/* Red tape */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-3 bg-primary"
              initial={{ x: '-200%', rotate: -45, opacity: 0 }}
              animate={{ x: '-50%', rotate: -45, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1, ease: 'easeOut' }}
              style={{ transformOrigin: 'center' }}
            />
            
            {/* Loading text */}
            <motion.p
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white font-heading text-sm uppercase tracking-widest whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Cargando...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
