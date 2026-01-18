import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Settings, Zap, Disc, Gauge, Hammer, ChevronRight } from 'lucide-react';
import mecanicaImage from '@/assets/taller-1.jpg';
import torneriaImage from '@/assets/torno-1.jpg';

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

  const currentServices = activeTab === 'mecanica' ? mecanicaServices : torneriaServices;
  const currentImage = activeTab === 'mecanica' ? mecanicaImage : torneriaImage;

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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="relative aspect-[4/3] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={currentImage}
                alt={activeTab === 'mecanica' ? 'Taller de motos' : 'Taller de torno'}
                className="w-full h-full object-cover img-grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 border-4 border-primary pointer-events-none" />
            </motion.div>
          </AnimatePresence>

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
