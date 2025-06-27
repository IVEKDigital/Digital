import React, { useState } from 'react';
import { Send, User, Mail, Phone, Building, CheckSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    empresa: '',
    servicos: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicos = [
    'Social Media',
    'Tráfego Pago',
    'Gerenciamento de Redes Sociais',
    'Criativos e Vídeos com IA'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (servico, checked) => {
    setFormData(prev => ({
      ...prev,
      servicos: checked 
        ? [...prev.servicos, servico]
        : prev.servicos.filter(s => s !== servico)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    setIsSubmitted(true);
    
    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        empresa: '',
        servicos: []
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8">
              <CheckSquare className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-500 mb-2">
                Formulário Enviado com Sucesso!
              </h3>
              <p className="text-green-400">
                Obrigado pelo seu interesse! Nossa equipe entrará em contato em breve.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Pronto para</span>
              <span className="text-gradient"> Impulsionar</span>
              <span className="text-white"> sua Marca?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Preencha o formulário abaixo e descubra como podemos transformar seu negócio com estratégias de marketing digital e IA.
            </p>
          </div>

          {/* Formulário */}
          <div className="bg-gray-900/50 border border-orange-500/20 rounded-2xl p-8 hover-lift">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nome */}
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white flex items-center space-x-2">
                    <User className="w-4 h-4 text-orange-500" />
                    <span>Nome *</span>
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-orange-500" />
                    <span>E-mail *</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-white flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    <span>WhatsApp *</span>
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Nome da empresa */}
                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-white flex items-center space-x-2">
                    <Building className="w-4 h-4 text-orange-500" />
                    <span>Nome da empresa</span>
                  </Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    type="text"
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              {/* Serviços */}
              <div className="space-y-4">
                <Label className="text-white text-lg font-medium">
                  Quais serviços você deseja? *
                </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicos.map((servico) => (
                    <div key={servico} className="flex items-center space-x-3">
                      <Checkbox
                        id={servico}
                        checked={formData.servicos.includes(servico)}
                        onCheckedChange={(checked) => handleServiceChange(servico, checked)}
                        className="border-orange-500 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                      />
                      <Label 
                        htmlFor={servico} 
                        className="text-gray-300 hover:text-white cursor-pointer"
                      >
                        {servico}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botão de envio */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-12 py-4 rounded-lg text-lg hover-lift neon-glow group"
                  disabled={!formData.nome || !formData.email || !formData.whatsapp || formData.servicos.length === 0}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Quero impulsionar minha marca com a IVEK!
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Nota de privacidade */}
              <p className="text-sm text-gray-500 text-center mt-4">
                Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
              </p>
            </form>
          </div>

          {/* Informações adicionais */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-orange-500/10">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-bold mb-2">Resposta Rápida</h3>
              <p className="text-gray-400 text-sm">Retornamos seu contato em até 2 horas úteis</p>
            </div>

            <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-orange-500/10">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-bold mb-2">Consultoria Gratuita</h3>
              <p className="text-gray-400 text-sm">Primeira análise do seu negócio sem custo</p>
            </div>

            <div className="text-center p-6 bg-gray-900/30 rounded-lg border border-orange-500/10">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-bold mb-2">Atendimento Nacional</h3>
              <p className="text-gray-400 text-sm">Atendemos todo o Brasil com excelência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

