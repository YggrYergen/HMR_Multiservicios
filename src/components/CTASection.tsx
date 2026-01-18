import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import AgendaModal from './AgendaModal';

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="cotizar" className="py-24 bg-accent relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 42px)',
          }} />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-display text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              ¿Tienes algún problema?
            </motion.h2>

            <motion.p
              className="mt-6 text-white/70 font-body text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
            >
              Agenda tu visita al taller o consulta por repuestos y trabajos de torno.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary inline-flex"
              >
                <Calendar className="w-5 h-5" />
                Agendar Visita
              </button>
              <a href="tel:+56963506070" className="btn-white inline-flex">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </motion.div>

            <motion.p
              className="mt-8 text-white/50 text-sm font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
            >
              Diagnóstico profesional · Tornería de precisión · Repuestos garantizados
            </motion.p>
          </div>
        </div>
      </section>

      <AgendaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTASection;
