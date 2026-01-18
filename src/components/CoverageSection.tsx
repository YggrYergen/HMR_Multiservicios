import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const cities = [
  { name: 'Valparaíso', x: 42, y: 34 },
  { name: 'Viña del Mar', x: 42, y: 32 },
  { name: 'Quilpué', x: 44, y: 33 },
  { name: 'Villa Alemana', x: 45, y: 33 },
  { name: 'Concón', x: 42, y: 30 },
  { name: 'Limache', x: 46, y: 31 },
  { name: 'Quillota', x: 46, y: 28 },
];

const CoverageSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });
  const [typedText, setTypedText] = useState('');
  const fullText = 'Región de Valparaíso';

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
    } else {
      setTypedText(''); // Reset on exit
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
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full max-w-md mx-auto"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.1))' }}
            >
              {/* Simplified Region Outline (Abstract) */}
              <motion.path
                d="M40 20 Q45 20 48 25 Q50 30 48 35 Q46 40 42 45 Q38 40 38 35 Z"
                transform="scale(2) translate(-10, -5)"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 0.3 }}
              />

              {/* City pins */}
              {cities.map((city, index) => (
                <motion.g
                  key={city.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.15 }}
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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Cobertura Regional
            </motion.h2>

            <motion.div
              className="mt-6 h-16"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Atendemos en las principales comunas de la V Región.
              Si necesitas retiro y entrega de trabajos de tornería o mecánica mayor, contáctanos.
            </motion.p>

            <motion.a
              href="#cotizar"
              className="btn-primary inline-flex mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Consultar retiro
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
