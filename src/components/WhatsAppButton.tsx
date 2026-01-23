import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [shouldVibrate, setShouldVibrate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldVibrate(true);
      setTimeout(() => setShouldVibrate(false), 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.a
      href="https://wa.me/56975598794?text=Hola,%20quiero%20cotizar"
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${shouldVibrate ? 'animate-vibrate' : ''}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
};

export default WhatsAppButton;
