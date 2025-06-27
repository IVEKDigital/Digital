import React from 'react';
import { Instagram, Shield, FileText } from 'lucide-react';
import logoIvek from '../assets/logo_ivek_digital.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-orange-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo e informações */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src={logoIvek} 
                alt="IVEK Digital" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              IVEK Digital – Desde 2019 criando resultados com inovação e estratégia
            </p>
          </div>

          {/* Instagram */}
          <div className="text-center">
            <a 
              href="https://www.instagram.com/agenciaivekdigital/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover-lift group"
            >
              <Instagram className="w-5 h-5" />
              <span>Siga no Instagram</span>
              <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Links legais */}
          <div className="text-center md:text-right">
            <div className="flex flex-col space-y-2">
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center justify-center md:justify-end space-x-2"
              >
                <Shield className="w-4 h-4" />
                <span>Política de Privacidade</span>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center justify-center md:justify-end space-x-2"
              >
                <FileText className="w-4 h-4" />
                <span>Termos de Uso</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} IVEK Digital. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Desenvolvido com 🧡 para impulsionar seu negócio
            </p>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-4 text-xs text-gray-600">
            <span>🏆 Mais de 100 clientes atendidos</span>
            <span>•</span>
            <span>🚀 Especialistas em IA</span>
            <span>•</span>
            <span>📈 Resultados comprovados</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

