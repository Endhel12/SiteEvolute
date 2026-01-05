import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6 border border-blue-400/30">
            <Zap size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Especialistas em Tráfego Pago</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-blue-100 to-[#f5f5dc] bg-clip-text text-transparent">
            Evolute Ads
          </h1>
          
          <p className="text-xl md:text-2xl text-[#f5f5dc]/80 mb-8 max-w-3xl mx-auto">
            Transformamos investimentos em tráfego pago em resultados reais para o seu negócio
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-xs"
            >
              <TrendingUp className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-[#f5f5dc]">Crescimento Escalável</h3>
              <p className="text-sm text-white/70">Estratégias comprovadas para aumentar seus resultados</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-xs"
            >
              <Target className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-[#f5f5dc]">Audiência Qualificada</h3>
              <p className="text-sm text-white/70">Alcance as pessoas certas no momento certo</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-xs"
            >
              <Zap className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-lg font-semibold mb-2 text-[#f5f5dc]">Resultados Rápidos</h3>
              <p className="text-sm text-white/70">Otimização constante para máximo ROI</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;