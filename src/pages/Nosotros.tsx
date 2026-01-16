import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import heroTruck from '@/assets/hero-truck.jpg';

const tips = [
  {
    id: 1,
    title: 'Consejos para embalar',
    preview: 'Aprende a proteger tus pertenencias correctamente.',
    content: `
      <h3>1. Usa cajas del tamaño correcto</h3>
      <p>Las cajas pequeñas son para objetos pesados como libros. Las grandes para ropa y objetos ligeros.</p>
      
      <h3>2. No dejes espacios vacíos</h3>
      <p>Rellena con papel o ropa los huecos para evitar que las cosas se muevan.</p>
      
      <h3>3. Etiqueta todo</h3>
      <p>Escribe el contenido y la habitación de destino en cada caja. Te lo agradecerás después.</p>
      
      <h3>4. Embala por habitación</h3>
      <p>Mantén juntas las cosas de cada habitación para facilitar el desempaque.</p>
    `,
  },
  {
    id: 2,
    title: 'Cuida tus objetos frágiles',
    preview: 'Tips para que lleguen intactos a tu nuevo hogar.',
    content: `
      <h3>1. Envuelve individualmente</h3>
      <p>Cada objeto frágil debe ir envuelto en papel o plástico de burbujas.</p>
      
      <h3>2. Usa divisores</h3>
      <p>Para vasos y copas, usa divisores de cartón o envuelve cada uno en papel periódico.</p>
      
      <h3>3. Marca las cajas</h3>
      <p>Escribe "FRÁGIL" en todos los lados de la caja con letra grande y clara.</p>
      
      <h3>4. Refuerza el fondo</h3>
      <p>Pon una capa de papel arrugado o ropa en el fondo de la caja como amortiguador.</p>
    `,
  },
  {
    id: 3,
    title: 'Qué hacer el día de la mudanza',
    preview: 'Checklist para que todo salga perfecto.',
    content: `
      <h3>1. Desayuna bien</h3>
      <p>Vas a necesitar energía. Come algo sustancioso antes de empezar.</p>
      
      <h3>2. Ten todo empacado</h3>
      <p>Idealmente, todo debe estar en cajas antes de que llegue el equipo de mudanza.</p>
      
      <h3>3. Deja un kit de primera noche</h3>
      <p>Ropa de cama, toallas, artículos de aseo y algo para comer. Lo necesitarás.</p>
      
      <h3>4. Haz una última revisión</h3>
      <p>Revisa closets, cajones y bajo las camas antes de irte.</p>
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
                No solo transportamos cosas.
              </p>
              <h1 className="text-hero text-foreground mt-6">
                Cuidamos
                <br />
                historias
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-body text-muted-foreground leading-relaxed mt-8">
                Porque nosotros{' '}
                <motion.span
                  className="text-primary font-heading font-bold uppercase"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  SÍ
                </motion.span>
                {' '}cuidamos lo tuyo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* La Flota */}
        <section className="py-24 bg-accent overflow-hidden">
          <div className="container mb-12">
            <motion.h2
              className="text-display text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Nuestra Flota
            </motion.h2>
          </div>

          {/* Slider */}
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: [0, -300] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div
                key={index}
                className="min-w-[400px] aspect-video overflow-hidden"
              >
                <img
                  src={heroTruck}
                  alt={`Camión MMovi ${index + 1}`}
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
              viewport={{ once: true }}
            >
              Tips para tu Mudanza
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {tips.map((tip, index) => (
                <motion.div
                  key={tip.id}
                  className="card-industrial p-6 cursor-pointer group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
