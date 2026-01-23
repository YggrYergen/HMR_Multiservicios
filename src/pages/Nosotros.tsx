import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import exterior1 from '@/assets/exterior-1.jpg';
import exterior2 from '@/assets/exterior-2.jpg';
import taller1 from '@/assets/taller-1.jpg';
import torno1 from '@/assets/torno-1.jpg';
import enderezadora from '@/assets/rim-repair-3.jpg';

const sliderImages = [exterior1, exterior2, taller1, torno1, enderezadora, exterior1]; // Placeholder

const tips = [
  {
    id: 1,
    title: 'Mantenimiento Preventivo',
    preview: 'Claves para alargar la vida útil de tu moto.',
    content: `
      <h3>1. Revisa el aceite regularmente</h3>
      <p>El aceite es la sangre del motor. Revisa el nivel cada 500km y cámbialo según el manual.</p>
      
      <h3>2. Cadena lubricada y tensada</h3>
      <p>Una cadena seca o suelta desgasta la transmisión prematuramente. Límpiala y lúbricala cada 500-1000km.</p>
      
      <h3>3. Presión de neumáticos</h3>
      <p>Neumáticos con baja presión afectan la estabilidad y el consumo. Revísalos en frío semanalmente.</p>
      
      <h3>4. Filtro de aire limpio</h3>
      <p>Un filtro sucio ahoga el motor. Límpialo o cámbialo periódicamente para mantener la potencia.</p>
    `,
  },
  {
    id: 2,
    title: 'Rodaje de Motor Nuevo',
    preview: 'Cómo asentar correctamente un motor reparado.',
    content: `
      <h3>1. Varía las revoluciones</h3>
      <p>No mantengas una velocidad constante por mucho tiempo. Alterna las RPM sin forzar el motor.</p>
      
      <h3>2. Calienta el motor</h3>
      <p>Deja que el motor tome temperatura antes de exigirle. El aceite frío no lubrica igual.</p>
      
      <h3>3. Evita la zona roja</h3>
      <p>Durante los primeros 1000km, no lleves el motor al límite de revoluciones.</p>
      
      <h3>4. Primer cambio de aceite</h3>
      <p>Es vital cambiar el aceite tras el rodaje para eliminar partículas metálicas del asentamiento.</p>
    `,
  },
  {
    id: 3,
    title: 'Tornería: Precisión es clave',
    preview: 'Por qué elegir piezas a medida.',
    content: `
      <h3>1. Ajuste perfecto</h3>
      <p>Las piezas fabricadas en torno se ajustan a la milésima, mejorando el rendimiento mecánico.</p>
      
      <h3>2. Materiales superiores</h3>
      <p>Podemos fabricar piezas en aceros de mayor dureza que los originales para mayor durabilidad.</p>
      
      <h3>3. Recuperación de piezas</h3>
      <p>Muchas veces es más económico y rápido rectificar una pieza original que importar una nueva.</p>
      
      <h3>4. Soluciones personalizadas</h3>
      <p>Fabricamos bujes, ejes y soportes adaptados a modificaciones específicas de tu moto.</p>
    `,
  },
];

const NosotrosPage = () => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main>
        {/* Manifesto */}
        <section className="min-h-screen flex items-center justify-center bg-background pt-20">
          <div className="container">
            <motion.div
              className="max-w-4xl mx-auto text-center py-24"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-body text-muted-foreground leading-relaxed">
                No solo reparamos máquinas.
              </p>
              <h1 className="text-hero text-foreground mt-6">
                Recuperamos
                <br />
                potencia
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-body text-muted-foreground leading-relaxed mt-8">
                Porque nosotros{' '}
                <motion.span
                  className="text-primary font-heading font-bold uppercase"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  VIVIMOS
                </motion.span>
                {' '}la mecánica igual que tú.
              </p>
            </motion.div>
          </div>
        </section>

        {/* La Flota (Now El Taller) */}
        <section className="py-24 bg-accent overflow-hidden">
          <div className="container mb-12">
            <motion.h2
              className="text-display text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              Nuestro Taller
            </motion.h2>
          </div>

          {/* Slider */}
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: [0, -300] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            {sliderImages.map((img, index) => (
              <div
                key={index}
                className="min-w-[400px] aspect-video overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Taller HMR ${index + 1}`}
                  className="w-full h-full object-cover img-grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </section>

        {/* Tips / Blog Grid */}
        <section className="py-24 bg-background">
          <div className="container">
            <motion.h2
              className="text-display text-foreground text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
            >
              Tips HMR
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.id}
                  className="card-industrial p-6 cursor-pointer group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setExpandedTip(tip.id)}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-6 font-heading font-bold text-xl">
                    {String(tip.id).padStart(2, '0')}
                  </div>
                  <h3 className="font-heading font-bold text-xl uppercase">
                    {tip.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground font-body">
                    {tip.preview}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary font-heading font-semibold uppercase text-sm group-hover:gap-4 transition-all">
                    Leer más
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tip Modal */}
        <AnimatePresence>
          {expandedTip && (
            <motion.div
              className="fixed inset-0 z-50 bg-accent/95 backdrop-blur-sm flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedTip(null)}
            >
              <motion.div
                className="bg-background max-w-2xl w-full max-h-[80vh] overflow-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
                  <h3 className="font-heading font-bold text-2xl uppercase">
                    {tips.find((t) => t.id === expandedTip)?.title}
                  </h3>
                  <button
                    onClick={() => setExpandedTip(null)}
                    className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div
                  className="p-6 prose prose-lg max-w-none font-body
                    prose-headings:font-heading prose-headings:uppercase prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: tips.find((t) => t.id === expandedTip)?.content || '',
                  }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default NosotrosPage;
