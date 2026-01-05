import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuemSomos from './components/QuemSomos';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import SocialButtons from './components/SocialButtons';
import { Toaster } from './components/ui/toaster';

function App() {
  const [currentSection, setCurrentSection] = React.useState('home');

  return (
    <>
      <Helmet>
        <title>Evolute Ads - Agência de Tráfego Pago</title>
        <meta name="description" content="Evolute Ads - Especialistas em tráfego pago e marketing digital. Transforme seus investimentos em resultados reais." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001a33] text-white">
        <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentSection === 'home' ? (
            <>
              <Hero />
              <QuemSomos />
            </>
          ) : (
            <Formulario />
          )}
        </motion.main>

        <SocialButtons />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;