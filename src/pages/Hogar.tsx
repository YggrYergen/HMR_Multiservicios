import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock, Shield, CheckCircle, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AgendaModal from '@/components/AgendaModal';
import coupleImage from '@/assets/couple-moving.jpg';

const services = [
  {
    icon: Package,
    title: 'Embalaje',
    description: 'Servicio profesional de embalaje con materiales de primera calidad.',
    price: 'Desde $30.000',
  },
  {
    icon: Truck,
    title: 'Carga y Descarga',
    description: 'Equipo capacitado para mover muebles y objetos pesados.',
    price: 'Desde $50.000',
  },
  {
    icon: Clock,
    title: 'Flete Express',
    description: 'Transporte rápido el mismo día para urgencias.',
    price: 'Desde $25.000',
  },
];

const benefits = [
  'Personal capacitado y uniformado',
  'Vehículos limpios y seguros',
  'Seguro de carga incluido',
  'Puntualidad garantizada',
  'Precios transparentes',
  'Atención 24/7',
];

const HogarPage = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/90 via-accent/70 to-accent/50 z-10" />
            <img
              src={coupleImage}
              alt="Pareja feliz mudándose"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="container relative z-20 pt-32 pb-16">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-hero text-white">
                Nuevo mes,
                <br />
                <span className="tag-red">nuevo hogar</span>
              </h1>
              <p className="mt-6 text-xl text-white/80 font-body">
                Cámbiate con MMovi. Hacemos que tu mudanza sea una experiencia
                sin estrés.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary mt-8"
              >
                <Calendar className="w-5 h-5" />
                Agenda tu fecha
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-background">
          <div className="container">
            <motion.h2
              className="text-display text-foreground text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Servicios para tu Hogar
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="relative h-80 cursor-pointer perspective-1000"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                >
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front */}
                    <div
                      className="absolute inset-0 card-industrial p-8 flex flex-col items-center justify-center text-center"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <service.icon className="w-16 h-16 text-primary mb-6" />
                      <h3 className="font-heading font-bold text-2xl uppercase">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-muted-foreground font-body">
                        {service.description}
                      </p>
                      <p className="mt-4 text-xs text-muted-foreground font-body">
                        Toca para ver precio
                      </p>
                    </div>

                    {/* Back */}
                    <div
                      className="absolute inset-0 bg-primary p-8 flex flex-col items-center justify-center text-center"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <p className="font-heading font-bold text-4xl text-white uppercase">
                        {service.price}
                      </p>
                      <p className="mt-4 text-white/80 font-body">
                        Precio referencial. Cotización personalizada gratis.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Banner */}
        <section className="py-24 bg-muted relative">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h2
                  className="text-display text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Tu fin de semana libre
                  <br />
                  <span className="text-primary">empieza aquí</span>
                </motion.h2>

                <motion.ul
                  className="mt-8 space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      className="flex items-center gap-3 font-body"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {benefit}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Agenda tu fecha
                </motion.button>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-primary/10 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <AgendaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HogarPage;
