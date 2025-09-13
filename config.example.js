// Configurações da Arcus Informática - EXEMPLO
// Copie este arquivo para config.js e configure suas chaves

const CONFIG = {
    // Informações da empresa
    empresa: {
        nome: 'Arcus Informática',
        slogan: 'Seu TI Sob Controle, Sua Empresa Mais Segura e Produtiva',
        telefone: '(19) 3017-0510',
        whatsapp: '(19) 3017-0510',
        email: 'suporte@arcusinformatica.com.br',
        endereco: {
            rua: 'Rua Tabajara Valeriano de Carvalho, 263',
            bairro: 'Jardim do Vale 2',
            cidade: 'Indaiatuba',
            estado: 'SP',
            cep: '13345-760'
        },
        coordenadas: {
            lat: -23.102210799999995,
            lng: -47.223808424354935
        },
        horarios: {
            dias: 'Segunda - Sexta',
            manha: '08:00 às 12:00',
            tarde: '13:30 às 17:30'
        }
    },

    // Configurações de API
    apis: {
        googleMaps: {
            key: '', // Sua chave do Google Maps
            enabled: false // Usando imagem estática do mapa
        },
        recaptcha: {
            siteKey: 'SUA_CHAVE_RECAPTCHA_AQUI', // Chave pública do reCAPTCHA
            enabled: false // reCAPTCHA desabilitado (usando validação manual)
        },
        contato: {
            endpoint: 'https://sua-api.com/contato', // Substitua pelo seu endpoint
            enabled: false // Mude para true quando configurar
        },
        emailjs: {
            serviceId: 'SEU_SERVICE_ID_AQUI', // Seu Service ID do EmailJS
            templateId: 'SEU_TEMPLATE_ID_AQUI', // Seu Template ID do EmailJS
            publicKey: 'SUA_PUBLIC_KEY_AQUI', // Sua Public Key do EmailJS
            enabled: false // Mude para true quando configurar
        }
    },

    // Configurações de animação
    animacoes: {
        duracao: 300, // ms
        delay: 100, // ms entre elementos
        habilitadas: true
    },

    // Configurações de notificação
    notificacoes: {
        duracao: 5000, // ms
        posicao: 'top-right' // top-right, top-left, bottom-right, bottom-left
    },

    // Configurações do WhatsApp
    whatsapp: {
        numero: '551930170510', // Número com código do país
        mensagem: 'Olá! Gostaria de saber mais sobre os serviços da Arcus Informática.',
        habilitado: true
    },

    // Configurações de SEO
    seo: {
        titulo: 'Arcus Informática - Seu TI Sob Controle',
        descricao: 'Empresa especializada em serviços de TI, suporte técnico, terceirização de TI e backup em nuvem. Mais de 12 anos de experiência.',
        palavrasChave: ['TI', 'suporte técnico', 'terceirização', 'backup', 'informática', 'Indaiatuba']
    }
};

// Função para obter configurações
function getConfig() {
    return CONFIG;
}

// Função para atualizar configurações
function updateConfig(section, key, value) {
    if (CONFIG[section] && CONFIG[section][key] !== undefined) {
        CONFIG[section][key] = value;
        return true;
    }
    return false;
}

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
}
