import { motion } from 'framer-motion';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo-hmr.png';
import { Link } from 'react-router-dom';

const marqueeText = '• MECÁNICA DE MOTOS • TORNERÍA DE PRECISIÓN • SOLDADURA TIG/MIG • HMR MULTISERVICIOS • REPUESTOS • GARANTÍA • ';

const Footer = () => {
  return (
    <footer className="bg-primary overflow-hidden">
      {/* Marquee */}
      <div className="marquee-container py-6 border-b border-white/20">
        <motion.div
          className="marquee-content font-heading text-4xl md:text-6xl font-bold text-white/90 uppercase"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {marqueeText}
          {marqueeText}
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img src={logo} alt="HMR Multiservicios" className="h-12 brightness-0 invert" />
            <p className="mt-6 text-white/80 font-body max-w-md">
              Servicio técnico especializado en motocicletas y tornería profesional.
              Años de experiencia recuperando y potenciando máquinas.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/hmrmultiservicios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/hmrmultiservicios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider mb-6">
              Servicios
            </h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors font-body">
                Inicio
              </Link>
              <Link to="/mecanica" className="block text-white/80 hover:text-white transition-colors font-body">
                Mecánica
              </Link>
              <Link to="/torneria" className="block text-white/80 hover:text-white transition-colors font-body">
                Tornería
              </Link>
              <Link to="/nosotros" className="block text-white/80 hover:text-white transition-colors font-body">
                Nosotros
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+56975598794"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-body"
              >
                <Phone className="w-5 h-5" />
                +56 9 7559 8794
              </a>
              <a
                href="https://maps.app.goo.gl/C4xzQ3sbhmNwULkKA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-body"
              >
                <MapPin className="w-5 h-5" />
                Ver Ubicación
              </a>
              <a
                href="mailto:contacto@hmrmultiservicios.cl"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-body"
              >
                <Mail className="w-5 h-5" />
                contacto@hmrmultiservicios.cl
              </a>
            </div>

            <a
              href="#cotizar"
              className="btn-white mt-8 text-sm py-3 px-6"
            >
              Agendar Hora
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm font-body">
            © 2024 HMR Multiservicios. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-sm font-body">
            Potenciado por HMR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
