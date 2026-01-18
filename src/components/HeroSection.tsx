import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-truck.jpg';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented by browser policy:", error);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Grayscale */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/70 via-accent/50 to-accent/80 z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover in-view"
        >
          <source src="/fondo_hero_inicio.mp4" type="video/mp4" />
          {/* Fallback image if video fails or is missing */}
          <img src={heroImage} alt="HMR Taller" className="w-full h-full object-cover" />
        </video>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture" />
      </div>

      {/* Content */}
      <div className="container relative z-20 pt-20">
        <div className="max-w-5xl">
          <motion.h1
            className="text-hero text-white"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">Nosotros</span>
            <span className="block">lo arreglamos</span>
          </motion.h1>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag-red text-4xl md:text-6xl lg:text-7xl">
              ...por ti
            </span>
          </motion.div>

          <motion.p
            className="mt-8 text-lg md:text-xl text-white/80 max-w-xl font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Servicio técnico especializado en motocicletas y tornería de precisión.
            Calidad, rapidez y garantía en cada trabajo.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#servicios" className="btn-primary">
              Ver Servicios
            </a>
            <a href="#cotizar" className="btn-white">
              Agendar Hora
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: [0, 10, 0] }}
        viewport={{ once: false }}
        transition={{ opacity: { delay: 1.5 }, y: { repeat: Infinity, duration: 1.5 } }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
