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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.whatsapp || formData.servicos.length === 0) {
      setSubmitMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // URL da função serverless - substitua pela URL do seu projeto
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setSubmitMessage(result.message);
        
        // Reset form após 3 segundos
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
      } else {
        setSubmitMessage(result.message || 'Erro ao enviar formulário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitMessage('Erro de conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-black" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-900/20 text-red-400 px-4 py-2 rounded-full text-sm mb-6">
              ⚡ As vagas para novos clientes este mês são limitadas!
            </div>
            
            <div className="inline-flex items-center gap-2 bg-green-900/20 text-green-400 px-4 py-2 rounded-full text-sm mb-8">
              ✨ Tenha criativos com IA e campanhas de tráfego que realmente convertem.
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para <span className="text-orange-500">Impulsionar</span><br />
              sua Marca?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Preencha o formulário abaixo e descubra como podemos transformar seu negócio 
              com estratégias de marketing digital e IA.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Formulário Enviado!</h3>
                <p className="text-green-400">{submitMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nome */}
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-white flex items-center gap-2">
                      <User className="w-4 h-4 text-orange-500" />
                      Nome *
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-orange-500" />
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500"
                      required
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-white flex items-center gap-2">
                      <Phone className="w-4 h-4 text-orange-500" />
                      WhatsApp *
                    </Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500"
                      required
                    />
                  </div>

                  {/* Empresa */}
                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="text-white flex items-center gap-2">
                      <Building className="w-4 h-4 text-orange-500" />
                      Nome da empresa
                    </Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Nome da sua empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Serviços */}
                <div className="space-y-4">
                  <Label className="text-white text-lg">Quais serviços você deseja? *</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {servicos.map((servico) => (
                      <div key={servico} className="flex items-center space-x-3">
                        <Checkbox
                          id={servico}
                          checked={formData.servicos.includes(servico)}
                          onCheckedChange={(checked) => handleServiceChange(servico, checked)}
                          className="border-gray-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                        />
                        <Label 
                          htmlFor={servico} 
                          className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                        >
                          {servico}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Quero impulsionar minha marca com a IVEK!
                      </div>
                    )}
                  </Button>
                </div>

                {/* Message */}
                {submitMessage && (
                  <div className={`text-center p-4 rounded-lg ${
                    submitMessage.includes('sucesso') || submitMessage.includes('Recebemos') 
                      ? 'bg-green-900/20 text-green-400' 
                      : 'bg-red-900/20 text-red-400'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-center text-gray-400 text-sm">
                Seus dados estão seguros conosco. Não compartilhamos informações com terceiros.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="font-semibold text-white">Resposta Rápida</h4>
                  <p className="text-gray-400 text-sm">Retornamos seu contato em até 2 horas úteis</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <User className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="font-semibold text-white">Consultoria Gratuita</h4>
                  <p className="text-gray-400 text-sm">Primeira análise do seu negócio sem custo</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Building className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="font-semibold text-white">Atendimento Nacional</h4>
                  <p className="text-gray-400 text-sm">Atendemos todo o Brasil com excelência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

