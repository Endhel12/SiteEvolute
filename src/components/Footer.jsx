import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001a33] border-t border-white/10 py-12 px-4 mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold">
                EA
              </div>
              <span className="text-lg font-bold text-[#f5f5dc]">Evolute Ads</span>
            </div>
            <p className="text-[#f5f5dc]/70 text-sm">
              Especialistas em tráfego pago e marketing digital, transformando investimentos em resultados reais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-lg font-semibold text-[#f5f5dc] block mb-4">Contato</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#f5f5dc]/70 text-sm">
                <Mail size={16} className="text-blue-400" />
                <span>contato@evoluteads.com</span>
              </div>
              <div className="flex items-center gap-2 text-[#f5f5dc]/70 text-sm">
                <Phone size={16} className="text-blue-400" />
                <span>Entre em contato pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2 text-[#f5f5dc]/70 text-sm">
                <MapPin size={16} className="text-blue-400" />
                <span>Atendimento Online</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-lg font-semibold text-[#f5f5dc] block mb-4">Horário de Atendimento</span>
            <div className="space-y-2 text-[#f5f5dc]/70 text-sm">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-white/10 pt-8 text-center"
        >
          <p className="text-[#f5f5dc]/60 text-sm">
            © {new Date().getFullYear()} Evolute Ads. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;