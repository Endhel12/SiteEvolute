import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentSection, setCurrentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    setCurrentSection(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001f3f]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-xl">
              EA
            </div>
            <span className="text-xl font-bold text-[#f5f5dc]">Evolute Ads</span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-6"
          >
            <button
              onClick={() => handleNavigation('home')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentSection === 'home'
                  ? 'bg-blue-500 text-white'
                  : 'text-[#f5f5dc] hover:bg-white/10'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavigation('contato')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentSection === 'contato'
                  ? 'bg-blue-500 text-white'
                  : 'text-[#f5f5dc] hover:bg-white/10'
              }`}
            >
              Contato
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
          >
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavigation('home')}
                className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                  currentSection === 'home'
                    ? 'bg-blue-500 text-white'
                    : 'text-[#f5f5dc] hover:bg-white/10'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => handleNavigation('contato')}
                className={`px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                  currentSection === 'contato'
                    ? 'bg-blue-500 text-white'
                    : 'text-[#f5f5dc] hover:bg-white/10'
                }`}
              >
                Contato
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;