import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardList, FileText, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Diagnóstico',
    description: 'Evaluación técnica detallada para identificar la falla real.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Presupuesto',
    description: 'Te enviamos los costos y tiempos de forma transparente.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Reparación',
    description: 'Manos expertas y repuestos de calidad en tu motocicleta.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Entrega',
    description: 'Pruebas finales y tu máquina lista para volver a rodar.',
  },
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 bg-accent overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display text-white">Servicio Técnico en 4 Pasos</h2>
          <p className="mt-4 text-white/60 font-body">
            Un proceso ordenado para garantizar los mejores resultados
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 hidden md:block">
            <motion.div
              className="h-full bg-primary"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              style={{ transformOrigin: 'left', borderStyle: 'dashed' }}
            />
          </div>

          <div className="flex overflow-x-auto scroll-snap-x hide-scrollbar pb-8 px-6 md:px-12 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="process-card snap-start flex-shrink-0"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <div className="process-number">{step.number}</div>

                <div className="mt-4">
                  <step.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-2xl uppercase text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll hint for mobile */}
          <div className="flex justify-center mt-6 md:hidden">
            <motion.div
              className="flex items-center gap-2 text-white/50 text-sm font-body"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <span>Desliza</span>
              <span>→</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
