import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoIvek from '../assets/logo_ivek_digital.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-orange-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoIvek} 
              alt="IVEK Digital" 
              className="h-10 w-auto"
            />
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-white hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Menu Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-orange-500 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-orange-500/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-white hover:text-orange-500 transition-colors duration-300 font-medium text-left"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

