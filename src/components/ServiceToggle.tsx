import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Settings, Zap, Disc, Gauge, Hammer, ChevronRight } from 'lucide-react';
import mecanicaImg1 from '@/assets/taller-1.jpg';
import mecanicaImg2 from '@/assets/workshop-general-1.jpg';
import mecanicaImg3 from '@/assets/workshop-tools-1.jpg';
import mecanicaImg4 from '@/assets/workshop-tools-2.jpg';
import torneriaImg1 from '@/assets/torno-1.jpg';
import torneriaImg2 from '@/assets/rim-repair-3.jpg';
import torneriaImg3 from '@/assets/fork-repair-1.jpg';
import torneriaImg4 from '@/assets/welding-machine.jpg';
import torneriaImg5 from '@/assets/rim-repair-1.jpg';
import torneriaImg6 from '@/assets/rim-repair-2.jpg';
import torneriaImg7 from '@/assets/fork-repair-2.jpg';
import torneriaImg8 from '@/assets/fork-repair-3.jpg';
import torneriaImg9 from '@/assets/fork-repair-4.jpg';

const mecanicaImages = [mecanicaImg1, mecanicaImg2, mecanicaImg3, mecanicaImg4];
const torneriaImages = [torneriaImg1, torneriaImg2, torneriaImg3, torneriaImg4, torneriaImg5, torneriaImg6, torneriaImg7, torneriaImg8, torneriaImg9];

const mecanicaServices = [
  {
    icon: Wrench,
    title: 'Mantención General',
    description: 'Cambio de aceite, filtros, frenos y transmisión.',
  },
  {
    icon: Gauge,
    title: 'Ajuste de Motor',
    description: 'Reparación completa y rectificado de motores.',
  },
  {
    icon: Zap,
    title: 'Sistema Eléctrico',
    description: 'Diagnóstico y reparación de fallas eléctricas.',
  },
];

const torneriaServices = [
  {
    icon: Disc,
    title: 'Rectificado Llantas',
    description: 'Enderezado y reparación de llantas de aleación.',
  },
  {
    icon: Settings,
    title: 'Piezas a Medida',
    description: 'Fabricación y torneado de piezas especiales.',
  },
  {
    icon: Hammer,
    title: 'Soldadura TIG/MIG',
    description: 'Soldadura de aluminio, acero inox y fierro.',
  },
];

const ServiceToggle = () => {
  const [activeTab, setActiveTab] = useState<'mecanica' | 'torneria'>('mecanica');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentServices = activeTab === 'mecanica' ? mecanicaServices : torneriaServices;
  const currentImages = activeTab === 'mecanica' ? mecanicaImages : torneriaImages;

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentImages]);

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-display text-foreground">Nuestros Servicios</h2>
          <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
            Soluciones integrales para tu motocicleta y proyectos metalmecánicos
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="toggle-switch">
            <motion.div
              className="toggle-indicator"
              animate={{
                x: activeTab === 'mecanica' ? 0 : '100%',
                width: activeTab === 'mecanica' ? '50%' : '50%',
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <button
              className={`toggle-option ${activeTab === 'mecanica' ? 'active' : ''}`}
              onClick={() => setActiveTab('mecanica')}
            >
              <Wrench className="inline-block w-5 h-5 mr-2" />
              Mecánica
            </button>
            <button
              className={`toggle-option ${activeTab === 'torneria' ? 'active' : ''}`}
              onClick={() => setActiveTab('torneria')}
            >
              <Settings className="inline-block w-5 h-5 mr-2" />
              Tornería
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          {/* Image Slideshow */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-black">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={`${activeTab}-${currentImageIndex}`}
                src={currentImages[currentImageIndex]}
                alt={activeTab === 'mecanica' ? 'Taller de motos' : 'Taller de torno'}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {currentImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white'
                    }`}
                  aria-label={`Ver imagen ${idx + 1}`}
                />
              ))}
            </div>

            <div className="absolute inset-0 border-4 border-primary pointer-events-none z-20" />
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {currentServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="card-industrial p-6 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl uppercase text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground font-body">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.a
                href={activeTab === 'mecanica' ? '/mecanica' : '/torneria'}
                className="btn-outline inline-flex mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Ver más detalles
                <ChevronRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceToggle;
