import React from 'react';
import { TrendingUp, Video, MessageSquare, ArrowRight, Sparkles, Target, Brain } from 'lucide-react';
// O componente Button foi importado, mas será substituído por <a> para o link do PDF
import { Button } from './ui/button'; 

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ***** LINK PÚBLICO DIRETO DO PDF ATUALIZADO *****
  const pdfExternalUrl = "https://drive.google.com/uc?export=download&id=1tBKw-wK7mmZraxHhJQCzr44tJ7jfpQIU"; 

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient tech-grid overflow-hidden">
      {/* Elementos decorativos flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 floating-animation">
          <div className="w-16 h-16 border border-orange-500/30 rounded-full flex items-center justify-center">
            <Target className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
          <div className="w-20 h-20 border border-orange-500/30 rounded-lg flex items-center justify-center">
            <Brain className="w-10 h-10 text-orange-500" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 floating-animation" style={{ animationDelay: '4s' }}>
          <div className="w-12 h-12 border border-orange-500/30 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge de autoridade */}
        <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span className="text-orange-500 font-medium">Com experiência desde 2019 no mercado digital</span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Transforme o seu Negócio com a</span>
          <br />
          <span className="text-gradient">Força do Marketing Digital</span>
          <br />
          <span className="text-white">e da</span>
          <span className="text-gradient"> Inteligência Artificial</span>
        </h1>

        {/* Subtítulo com prova social */}
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
          Desde 2019, ajudando empresas a crescer com performance, estratégia e inovação.
        </p>

        {/* Prova social adicional */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-orange-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full pulse-orange"></div>
            <span className="font-medium">Mais de 100 marcas atendidas</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full pulse-orange" style={{ animationDelay: '1s' }}></div>
            <span className="font-medium">Em todo o Brasil</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full pulse-orange" style={{ animationDelay: '2s' }}></div>
            <span className="font-medium">Criativos com IA que convertem</span>
          </div>
        </div>

        {/* CTAs principais */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="https://wa.me/6283056300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-lg text-lg hover-lift neon-glow group"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Orçamento Gratuito – Gestão de Tráfego
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          
          {/* BOTÃO ALTERADO PARA IR PARA O PDF EXTERNO */}
          <a
            href={pdfExternalUrl} // Usando o link externo do Google Drive
            target="_blank" // Abre numa nova aba
            rel="noopener noreferrer" // Boa prática de segurança
            className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 rounded-lg text-lg hover-lift group inline-flex items-center justify-center"
          >
            <Video className="w-5 h-5 mr-2" />
            Criativos com IA – Conheça os Planos
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* CTA secundário */}
        <Button 
          onClick={scrollToContact}
          variant="outline"
          className="border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500 px-6 py-3 rounded-lg hover-lift group"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          Solicite um Contacto Personalizado
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Urgência */}
        <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-lg max-w-md mx-auto">
          <p className="text-red-400 font-medium">
            ⚡ As vagas para novos clientes este mês são limitadas!
          </p>
        </div>

        {/* Benefício direto */}
        <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg max-w-2xl mx-auto">
          <p className="text-green-400 font-medium">
            ✨ Tenha criativos com IA e campanhas de tráfego que realmente convertem.
          </p>
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
