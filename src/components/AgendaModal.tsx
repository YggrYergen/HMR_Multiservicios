import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2 } from 'lucide-react';
import logo from '@/assets/logo-mmovi.png';

interface AgendaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgendaModal = ({ isOpen, onClose }: AgendaModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-accent">
              <img src={logo} alt="MMovi" className="h-8 brightness-0 invert" />
              <button
                onClick={onClose}
                className="w-10 h-10 bg-primary text-white flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background z-10 mt-16">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
                  <p className="mt-4 font-heading text-sm uppercase tracking-widest text-muted-foreground">
                    Cargando calendario...
                  </p>
                </div>
              </div>
            )}

            {/* Iframe */}
            <iframe
              src="https://mmovi.site.agendapro.com/cl/sucursal/11884"
              className={`w-full h-full transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={handleIframeLoad}
              title="Agendar cita MMovi"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgendaModal;
