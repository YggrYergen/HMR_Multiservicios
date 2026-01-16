import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const cities = [
  { name: 'Arica', x: 48, y: 3 },
  { name: 'Iquique', x: 47, y: 8 },
  { name: 'Antofagasta', x: 48, y: 14 },
  { name: 'Copiapó', x: 46, y: 20 },
  { name: 'La Serena', x: 45, y: 26 },
  { name: 'Valparaíso', x: 42, y: 34 },
  { name: 'Santiago', x: 48, y: 37 },
  { name: 'Rancagua', x: 50, y: 41 },
  { name: 'Talca', x: 47, y: 48 },
  { name: 'Concepción', x: 44, y: 56 },
  { name: 'Temuco', x: 45, y: 64 },
  { name: 'Valdivia', x: 43, y: 70 },
  { name: 'Puerto Montt', x: 44, y: 76 },
  { name: 'Chiloé', x: 40, y: 82 },
];

const CoverageSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [typedText, setTypedText] = useState('');
  const fullText = 'Llegamos donde tú estás';

  useEffect(() => {
    if (isInView) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 80);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full max-w-md mx-auto"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.1))' }}
            >
              {/* Chile simplified outline - Arica to Chiloé */}
              <motion.path
                d="M48 2 Q50 8 48 15 Q46 25 48 35 Q45 45 48 55 Q46 65 48 75 Q45 82 42 88"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, delay: 0.3 }}
              />

              {/* Route line - Norte */}
              <motion.path
                d="M48 37 Q47 25 48 3"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="4 2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.5 }}
              />
              {/* Route line - Sur */}
              <motion.path
                d="M48 37 Q46 55 44 76 Q42 80 40 82"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="4 2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 1.5 }}
              />

              {/* City pins */}
              {cities.map((city, index) => (
                <motion.g
                  key={city.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 2 + index * 0.15 }}
                >
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="2.5"
                    fill="hsl(var(--primary))"
                  />
                  <circle
                    cx={city.x}
                    cy={city.y}
                    r="4"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                  <text
                    x={city.x + 5}
                    y={city.y + 1}
                    className="text-[3px] font-heading fill-foreground uppercase"
                  >
                    {city.name}
                  </text>
                </motion.g>
              ))}
            </svg>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.h2
              className="text-display text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Cobertura Nacional
            </motion.h2>

            <motion.div
              className="mt-6 h-16"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p className="text-2xl md:text-3xl font-heading text-primary uppercase">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>

            <motion.p
              className="mt-6 text-muted-foreground font-body text-lg max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Desde Arica hasta Puerto Montt y Chiloé, cubrimos prácticamente 
              todo Chile. Nuestra flota está lista para transportar tus 
              pertenencias con seguridad y puntualidad.
            </motion.p>

            <motion.a
              href="#cotizar"
              className="btn-primary inline-flex mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Cotiza tu traslado
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
