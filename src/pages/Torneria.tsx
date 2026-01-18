import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Ruler, Disc, FileText, Send, CheckCircle, Hammer } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import tallerImage from '@/assets/warehouse-logistics.jpg'; // Placeholder

const benefits = [
    {
        icon: Ruler,
        title: 'Precisión Milimétrica',
        description: 'Trabajos de alta exactitud para asegurar el calce perfecto de cada pieza reparada o fabricada.',
    },
    {
        icon: Disc,
        title: 'Rectificado de Llantas',
        description: 'Recuperamos la forma y balance de tus llantas de aleación y fierro dañadas por golpes.',
    },
    {
        icon: Hammer,
        title: 'Soldadura Especializada',
        description: 'Procesos TIG y MIG para aluminio, acero inoxidable y fierro fundido con terminaciones prolijas.',
    },
];

const TorneriaPage = () => {
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
                            src={tallerImage}
                            alt="Taller de Tornería"
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
                                Soluciones en
                                <br />
                                <span className="tag-red">Metalmecánica</span>
                            </h1>
                            <p className="mt-6 text-xl text-white/80 font-body">
                                Tornería de precisión, soldaduras especiales y reparación de piezas
                                clave para tu vehículo o maquinaria.
                            </p>
                            <a href="#contacto" className="btn-primary mt-8 inline-flex">
                                <Settings className="w-5 h-5" />
                                Cotizar Trabajo
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
                            viewport={{ once: false }}
                        >
                            Servicios Especializados
                        </motion.h2>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    className="border-2 border-accent overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
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

                {/* Contact Form */}
                <section id="contacto" className="py-24 bg-muted">
                    <div className="container max-w-2xl">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                        >
                            <h2 className="text-display text-foreground">Contáctanos</h2>
                            <p className="mt-4 text-muted-foreground font-body">
                                Cuéntanos qué necesitas reparar o fabricar.
                            </p>
                        </motion.div>

                        <motion.form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block font-heading text-sm uppercase tracking-wider mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-transparent border-b-2 border-accent py-3 font-body focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Tu nombre"
                                        value={formData.empresa}
                                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
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
                                            placeholder="contacto@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-heading text-sm uppercase tracking-wider mb-2">
                                        Detalle del trabajo
                                    </label>
                                    <textarea
                                        rows={3}
                                        className="w-full bg-transparent border-b-2 border-accent py-3 font-body focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Describe la pieza, el daño o lo que necesitas fabricar..."
                                        value={formData.mensaje}
                                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn-primary w-full">
                                <Send className="w-5 h-5" />
                                Enviar Consulta
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

export default TorneriaPage;
