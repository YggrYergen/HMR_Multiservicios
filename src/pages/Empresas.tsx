import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, MapPin, Truck, FileText, Satellite, CheckCircle, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import warehouseImage from '@/assets/warehouse-logistics.jpg';

const benefits = [
  {
    icon: FileText,
    title: 'Facturación Mensual',
    description: 'Simplifica tu contabilidad con facturas consolidadas mensuales. Crédito disponible para empresas con convenio.',
  },
  {
    icon: Satellite,
    title: 'Monitoreo GPS',
    description: 'Seguimiento en tiempo real de tus envíos. Sabrás exactamente dónde están tus productos en todo momento.',
  },
  {
    icon: MapPin,
    title: 'Distribución Retail',
    description: 'Entrega punto a punto a tus tiendas o clientes finales. Cobertura nacional con tiempos garantizados.',
  },
];

const EmpresasPage = () => {
  const [expandedBenefit, setExpandedBenefit] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    empresa: '',
    rut: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/60 z-10" />
            <img
              src={warehouseImage}
              alt="Logística empresarial"
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
                Soluciones
                <br />
                <span className="tag-red">logísticas</span>
              </h1>
              <p className="mt-6 text-xl text-white/80 font-body">
                Potencia tu negocio con nuestra flota y experiencia. Distribución,
                almacenamiento y más.
              </p>
              <a href="#contacto" className="btn-primary mt-8 inline-flex">
                <Building2 className="w-5 h-5" />
                Solicitar Convenio
              </a>
            </motion.div>
          </div>
        </section>

        {/* Benefits Accordion */}
        <section className="py-24 bg-background">
          <div className="container max-w-4xl">
            <motion.h2
              className="text-display text-foreground text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Beneficios para Empresas
            </motion.h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="border-2 border-accent overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className="w-full flex items-center gap-4 p-6 text-left hover:bg-muted transition-colors"
                    onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
                  >
                    <benefit.icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <span className="font-heading font-bold text-xl uppercase flex-grow">
                      {benefit.title}
                    </span>
                    <motion.span
                      className="text-2xl text-primary"
                      animate={{ rotate: expandedBenefit === index ? 45 : 0 }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {expandedBenefit === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-border">
                          <p className="text-muted-foreground font-body leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Contact Form */}
        <section id="contacto" className="py-24 bg-muted">
          <div className="container max-w-2xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-foreground">Contáctanos</h2>
              <p className="mt-4 text-muted-foreground font-body">
                Completa el formulario y te contactaremos en menos de 24 horas
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-6">
                <div>
                  <label className="block font-heading text-sm uppercase tracking-wider mb-2">
                    Nombre Empresa
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-accent py-3 font-body focus:outline-none focus:border-primary transition-colors"
                    placeholder="Empresa Ejemplo S.A."
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block font-heading text-sm uppercase tracking-wider mb-2">
                    RUT Empresa
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-accent py-3 font-body focus:outline-none focus:border-primary transition-colors"
                    placeholder="76.123.456-7"
                    value={formData.rut}
                    onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-heading text-sm uppercase tracking-wider mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-transparent border-b-2 border-accent py-3 font-body focus:outline-none focus:border-primary transition-colors"
                      placeholder="+56 9 1234 5678"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-sm uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-transparent border-b-2 border-accent py-3 font-body focus:outline-none focus:border-primary transition-colors"
                      placeholder="contacto@empresa.cl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-sm uppercase tracking-wider mb-2">
                    Mensaje (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-accent py-3 font-body focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Cuéntanos sobre tus necesidades logísticas..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send className="w-5 h-5" />
                Enviar Solicitud
              </button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default EmpresasPage;
