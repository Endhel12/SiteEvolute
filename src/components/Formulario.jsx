import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone } from 'lucide-react'; // Adicionei ícones novos
import { Button } from './ui/button';
import { useToast } from './ui/use-toaster';
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = React.useState(false);

  const [formData, setFormData] = React.useState({
    nome: '',
    sobrenome: '',
    email: '',    // Novo campo
    whatsapp: '', // Novo campo
    nomeEmpresa: '',
    nicho: '',
    jaInvestiu: '',
    valorInvestimento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação atualizada com novos campos
    if (!formData.nome || !formData.sobrenome || !formData.email || !formData.whatsapp || !formData.nomeEmpresa || !formData.nicho || !formData.jaInvestiu || !formData.valorInvestimento) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos para que possamos entrar em contato.",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);

    const templateParams = {
      to_email: 'evoluteads@outlook.com',
      nome: formData.nome,
      sobrenome: formData.sobrenome,
      email: formData.email,       // Novo campo no envio
      whatsapp: formData.whatsapp, // Novo campo no envio
      nomeEmpresa: formData.nomeEmpresa,
      nicho: formData.nicho,
      jaInvestiu: formData.jaInvestiu,
      valorInvestimento: formData.valorInvestimento
    };

    // Lembre-se de substituir pelos seus IDs do EmailJS
    emailjs.send(
      'service_l13dt1a',      // Ex: service_x9d8s7
      'template_43duae5',     // Ex: template_a1b2c3
      templateParams,
      'gJIF4p6-K9Eq9HtuF'       // Ex: user_XyZ123abc (encontrada em Account > API Keys)
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast({
        title: "Sucesso!",
        description: "Formulário enviado! Entraremos em contato pelo WhatsApp ou E-mail.",
      });
      
      setFormData({
        nome: '',
        sobrenome: '',
        email: '',
        whatsapp: '',
        nomeEmpresa: '',
        nicho: '',
        jaInvestiu: '',
        valorInvestimento: ''
      });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      toast({
        title: "Erro no envio",
        description: "Houve um problema. Tente novamente ou nos chame no direct.",
        variant: "destructive"
      });
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section className="pt-32 pb-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-[#f5f5dc]">
            Entre em Contato
          </h2>
          <p className="text-center text-[#f5f5dc]/70 mb-12">
            Preencha o formulário abaixo e nossa equipe entrará em contato para discutir como podemos ajudar seu negócio a crescer.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6"
          >
            {/* Linha 1: Nome e Sobrenome */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-[#f5f5dc] mb-2">Nome *</label>
                <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Seu nome" required />
              </div>
              <div>
                <label htmlFor="sobrenome" className="block text-sm font-medium text-[#f5f5dc] mb-2">Sobrenome *</label>
                <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Seu sobrenome" required />
              </div>
            </div>

            {/* Linha 2 (NOVA): Email e WhatsApp */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#f5f5dc] mb-2 flex items-center gap-2">
                  <Mail size={16} /> E-mail Comercial *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-[#f5f5dc] mb-2 flex items-center gap-2">
                  <Phone size={16} /> WhatsApp / Telefone *
                </label>
                <input 
                  type="tel" 
                  id="whatsapp" 
                  name="whatsapp" 
                  value={formData.whatsapp} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
                  placeholder="(XX) 99999-9999" 
                  required 
                />
              </div>
            </div>

            {/* Resto do formulário */}
            <div>
              <label htmlFor="nomeEmpresa" className="block text-sm font-medium text-[#f5f5dc] mb-2">Nome da Empresa *</label>
              <input type="text" id="nomeEmpresa" name="nomeEmpresa" value={formData.nomeEmpresa} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Nome da sua empresa" required />
            </div>

            <div>
              <label htmlFor="nicho" className="block text-sm font-medium text-[#f5f5dc] mb-2">Nicho da Empresa *</label>
              <input type="text" id="nicho" name="nicho" value={formData.nicho} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Ex: E-commerce, Serviços, Educação..." required />
            </div>

            <div>
              <label htmlFor="jaInvestiu" className="block text-sm font-medium text-[#f5f5dc] mb-2">Já investiu em tráfego pago? *</label>
              <select id="jaInvestiu" name="jaInvestiu" value={formData.jaInvestiu} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required>
                <option value="" className="bg-[#001f3f]">Selecione uma opção</option>
                <option value="sim" className="bg-[#001f3f]">Sim</option>
                <option value="nao" className="bg-[#001f3f]">Não</option>
              </select>
            </div>

            <div>
              <label htmlFor="valorInvestimento" className="block text-sm font-medium text-[#f5f5dc] mb-2">Pretensão de valor de investimento mensal *</label>
              <select id="valorInvestimento" name="valorInvestimento" value={formData.valorInvestimento} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" required>
                <option value="" className="bg-[#001f3f]">Selecione uma faixa</option>
                <option value="ate-1000" className="bg-[#001f3f]">Até R$ 1.000</option>
                <option value="1000-3000" className="bg-[#001f3f]">R$ 1.000 - R$ 3.000</option>
                <option value="3000-5000" className="bg-[#001f3f]">R$ 3.000 - R$ 5.000</option>
                <option value="5000-10000" className="bg-[#001f3f]">R$ 5.000 - R$ 10.000</option>
                <option value="acima-10000" className="bg-[#001f3f]">Acima de R$ 10.000</option>
              </select>
            </div>

            <Button
              type="submit"
              disabled={isSending}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSending ? 'Enviando...' : 'Enviar Formulário'}
            </Button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Formulario;