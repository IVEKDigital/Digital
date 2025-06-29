const sgMail = require('@sendgrid/mail');

// Configurar SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  // Permitir apenas métodos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { nome, email, whatsapp, empresa, servicos } = req.body;

    // Validação básica
    if (!nome || !email || !whatsapp || !servicos || servicos.length === 0) {
      return res.status(400).json({ 
        message: 'Campos obrigatórios: nome, email, whatsapp e pelo menos um serviço' 
      });
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Email inválido' });
    }

    // Preparar conteúdo do email
    const servicosTexto = servicos.join(', ');
    
    const emailContent = `
      <h2>Nova solicitação de contato - IVEK Digital</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Empresa:</strong> ${empresa || 'Não informado'}</p>
      <p><strong>Serviços de interesse:</strong> ${servicosTexto}</p>
      <hr>
      <p><small>Enviado através do formulário da landing page em ${new Date().toLocaleString('pt-BR')}</small></p>
    `;

    // Configurar email
    const msg = {
      to: process.env.RECIPIENT_EMAIL, // Email de destino (configurar nas variáveis de ambiente)
      from: process.env.SENDER_EMAIL, // Email remetente verificado no SendGrid
      subject: `Nova solicitação de contato - ${nome}`,
      html: emailContent,
      // Email de resposta para o cliente
      replyTo: email
    };

    // Enviar email
    await sgMail.send(msg);

    // Email de confirmação para o cliente (opcional)
    const confirmationMsg = {
      to: email,
      from: process.env.SENDER_EMAIL,
      subject: 'Recebemos sua solicitação - IVEK Digital',
      html: `
        <h2>Obrigado pelo seu contato, ${nome}!</h2>
        <p>Recebemos sua solicitação e retornaremos em até 2 horas úteis.</p>
        <p><strong>Serviços solicitados:</strong> ${servicosTexto}</p>
        <hr>
        <p>Atenciosamente,<br>Equipe IVEK Digital</p>
      `
    };

    await sgMail.send(confirmationMsg);

    return res.status(200).json({ 
      message: 'Formulário enviado com sucesso! Retornaremos seu contato em breve.' 
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Log detalhado do erro para debug
    if (error.response) {
      console.error('SendGrid Error:', error.response.body);
    }

    return res.status(500).json({ 
      message: 'Erro interno do servidor. Tente novamente em alguns minutos.' 
    });
  }
}

