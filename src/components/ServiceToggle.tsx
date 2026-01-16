import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Truck, Package, Clock, Handshake, MapPin, Calendar } from 'lucide-react';
import coupleImage from '@/assets/couple-moving.jpg';
import warehouseImage from '@/assets/warehouse-logistics.jpg';

const hogarServices = [
  {
    icon: Home,
    title: 'Mudanzas Casas',
    description: 'Trasladamos todo tu hogar con cuidado profesional.',
  },
  {
    icon: Package,
    title: 'Transporte Mobiliario',
    description: 'Muebles y electrodomésticos seguros.',
  },
  {
    icon: Clock,
    title: 'Flete Express',
    description: 'Envíos rápidos el mismo día.',
  },
];

const empresaServices = [
  {
    icon: Building2,
    title: 'Logística',
    description: 'Soluciones de distribución para tu negocio.',
  },
  {
    icon: MapPin,
    title: 'Retail Punto a Punto',
    description: 'Entrega directa a tus clientes.',
  },
  {
    icon: Handshake,
    title: 'Convenios',
    description: 'Planes especiales para empresas.',
  },
];

const ServiceToggle = () => {
  const [activeTab, setActiveTab] = useState<'hogar' | 'empresas'>('hogar');

  const currentServices = activeTab === 'hogar' ? hogarServices : empresaServices;
  const currentImage = activeTab === 'hogar' ? coupleImage : warehouseImage;

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display text-foreground">Nuestros Servicios</h2>
          <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
            Soluciones de transporte adaptadas a tus necesidades
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="toggle-switch">
            <motion.div
              className="toggle-indicator"
              animate={{
                x: activeTab === 'hogar' ? 0 : '100%',
                width: activeTab === 'hogar' ? '50%' : '50%',
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <button
              className={`toggle-option ${activeTab === 'hogar' ? 'active' : ''}`}
              onClick={() => setActiveTab('hogar')}
            >
              <Home className="inline-block w-5 h-5 mr-2" />
              Hogar
            </button>
            <button
              className={`toggle-option ${activeTab === 'empresas' ? 'active' : ''}`}
              onClick={() => setActiveTab('empresas')}
            >
              <Building2 className="inline-block w-5 h-5 mr-2" />
              Empresas
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
                alt={activeTab === 'hogar' ? 'Mudanzas residenciales' : 'Logística empresarial'}
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
                href={activeTab === 'hogar' ? '/hogar' : '/empresas'}
                className="btn-outline inline-flex mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Ver más detalles
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServiceToggle;
