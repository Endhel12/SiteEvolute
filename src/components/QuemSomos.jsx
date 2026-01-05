import React from 'react';
import { motion } from 'framer-motion';
const QuemSomos = () => {
  return <section className="py-20 px-4 bg-white/5 backdrop-blur-sm" id="quem-somos">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#f5f5dc]">
            Quem Somos
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="space-y-6">
              <p className="text-lg text-[#f5f5dc]/90 leading-relaxed">
                A <span className="font-semibold text-blue-300">Evolute Ads</span> é uma agência especializada em tráfego pago e marketing digital, dedicada a ajudar empresas a crescerem de forma consistente e escalável.
              </p>
              
              <p className="text-lg text-[#f5f5dc]/90 leading-relaxed">
                Nossa missão é transformar cada investimento em publicidade digital em resultados mensuráveis e significativos para nossos clientes. Utilizamos estratégias comprovadas e análise de dados aprofundada para maximizar o retorno sobre o investimento.
              </p>

              <p className="text-lg text-[#f5f5dc]/90 leading-relaxed">
                Com expertise em plataformas como Google Ads, Facebook Ads, Instagram Ads e outras ferramentas de mídia paga, criamos campanhas personalizadas que alcançam o público certo no momento ideal.
              </p>

              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6 mt-8">
                <p className="text-blue-200 font-medium">
                  💡 Não importa o tamanho do seu negócio, temos soluções sob medida para escalar seus resultados através do tráfego pago.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-2xl">
                <img className="w-full h-full object-cover" alt="Equipe Evolute Ads trabalhando em estratégias de tráfego pago" src="https://horizons-cdn.hostinger.com/b93c8e0f-2103-4c39-b823-115a42c19fc1/logo-evolute-pyOMB.jpg" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 shadow-xl border border-blue-400/30">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-sm text-blue-100">Clientes Satisfeitos</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default QuemSomos;