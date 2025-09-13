// Exemplos de integração com APIs reais
// Este arquivo contém exemplos de como integrar com diferentes serviços

// ========================================
// EXEMPLO 1: Integração com EmailJS
// ========================================
// Para usar o EmailJS, você precisa:
// 1. Criar uma conta em https://www.emailjs.com/
// 2. Configurar um serviço de email (Gmail, Outlook, etc.)
// 3. Obter o Service ID, Template ID e Public Key

function setupEmailJS() {
    // Adicione este script no HTML: <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    
    // Inicializar EmailJS
    emailjs.init('YOUR_PUBLIC_KEY'); // Substitua pela sua chave pública
    
    // Função para enviar email
    async function sendEmail(data) {
        try {
            const templateParams = {
                from_name: data.nome,
                from_email: data.email,
                empresa: data.empresa,
                message: data.mensagem,
                to_email: 'arcus@gmail.com' // Email de destino
            };
            
            const response = await emailjs.send(
                'YOUR_SERVICE_ID', // Substitua pelo seu Service ID
                'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID
                templateParams
            );
            
            console.log('Email enviado com sucesso:', response);
            return response;
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            throw error;
        }
    }
    
    return { sendEmail };
}

// ========================================
// EXEMPLO 2: Integração com Formspree
// ========================================
// Para usar o Formspree, você precisa:
// 1. Criar uma conta em https://formspree.io/
// 2. Criar um novo formulário
// 3. Obter o endpoint do formulário

async function sendToFormspree(data) {
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID'; // Substitua pelo seu endpoint
    
    try {
        const response = await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: data.nome,
                email: data.email,
                empresa: data.empresa,
                mensagem: data.mensagem
            })
        });
        
        if (!response.ok) {
            throw new Error('Erro ao enviar formulário');
        }
        
        const result = await response.json();
        console.log('Formulário enviado com sucesso:', result);
        return result;
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);
        throw error;
    }
}

// ========================================
// EXEMPLO 3: Integração com Netlify Forms
// ========================================
// Para usar o Netlify Forms, você precisa:
// 1. Hospedar o site no Netlify
// 2. Adicionar o atributo netlify ao formulário
// 3. Adicionar campos hidden para capturar dados

function setupNetlifyForm() {
    // No HTML, adicione netlify ao formulário:
    // <form id="contact-form" netlify name="contato">
    
    // Adicione campos hidden para capturar dados:
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        // Netlify automaticamente captura os dados do formulário
        // Você pode adicionar lógica adicional aqui se necessário
        console.log('Formulário enviado via Netlify');
    });
}

// ========================================
// EXEMPLO 4: Integração com Backend Próprio
// ========================================
// Exemplo de como integrar com seu próprio backend

async function sendToBackend(data) {
    const backendEndpoint = 'https://sua-api.com/api/contato';
    
    try {
        const response = await fetch(backendEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_TOKEN' // Se necessário
            },
            body: JSON.stringify({
                nome: data.nome,
                email: data.email,
                empresa: data.empresa,
                mensagem: data.mensagem,
                timestamp: new Date().toISOString()
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao enviar mensagem');
        }
        
        const result = await response.json();
        console.log('Mensagem enviada com sucesso:', result);
        return result;
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        throw error;
    }
}

// ========================================
// EXEMPLO 5: Integração com Google Sheets
// ========================================
// Para usar o Google Sheets como backend, você pode usar o Google Apps Script

async function sendToGoogleSheets(data) {
    const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
    
    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            mode: 'no-cors', // Necessário para Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: data.nome,
                email: data.email,
                empresa: data.empresa,
                mensagem: data.mensagem,
                data: new Date().toLocaleString('pt-BR')
            })
        });
        
        console.log('Dados enviados para Google Sheets');
        return { success: true };
    } catch (error) {
        console.error('Erro ao enviar para Google Sheets:', error);
        throw error;
    }
}

// ========================================
// EXEMPLO 6: Configuração do Google Maps
// ========================================
function setupGoogleMaps() {
    // Substitua no HTML:
    // <script src="https://maps.googleapis.com/maps/api/js?key=SUA_CHAVE_AQUI&callback=initMap" async defer></script>
    
    function initMap() {
        const config = window.CONFIG || {};
        const location = config.empresa?.coordenadas || { lat: -23.102210799999995, lng: -47.223808424354935 };
        
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location,
            styles: [
                {
                    featureType: 'all',
                    elementType: 'geometry',
                    stylers: [{ color: '#1E272E' }]
                },
                {
                    featureType: 'all',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#E0E0E0' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#00ADB5' }]
                }
            ]
        });
        
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Arcus Informática',
            icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="18" fill="#00ADB5" stroke="#ffffff" stroke-width="2"/>
                        <path d="M12 16h16v8H12z" fill="#ffffff"/>
                        <path d="M16 20h8v2h-8z" fill="#00ADB5"/>
                    </svg>
                `),
                scaledSize: new google.maps.Size(40, 40)
            }
        });
        
        return map;
    }
    
    return { initMap };
}

// ========================================
// EXEMPLO 7: Integração com Sistema de Chamados
// ========================================
// Exemplo de como integrar com um sistema de chamados

async function abrirChamado(dadosChamado) {
    const chamadoEndpoint = 'https://sua-api.com/api/chamados';
    
    try {
        const response = await fetch(chamadoEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_TOKEN'
            },
            body: JSON.stringify({
                titulo: dadosChamado.titulo,
                descricao: dadosChamado.descricao,
                prioridade: dadosChamado.prioridade || 'normal',
                cliente: dadosChamado.cliente,
                contato: dadosChamado.contato,
                status: 'aberto',
                dataAbertura: new Date().toISOString()
            })
        });
        
        if (!response.ok) {
            throw new Error('Erro ao abrir chamado');
        }
        
        const result = await response.json();
        console.log('Chamado aberto com sucesso:', result);
        return result;
    } catch (error) {
        console.error('Erro ao abrir chamado:', error);
        throw error;
    }
}

// ========================================
// EXEMPLO 8: Download do TeamViewer
// ========================================
function setupTeamViewerDownload() {
    const teamviewerUrl = 'https://download.teamviewer.com/download/TeamViewer_Setup.exe';
    
    function downloadTeamViewer() {
        // Criar link temporário para download
        const link = document.createElement('a');
        link.href = teamviewerUrl;
        link.download = 'TeamViewer_Setup.exe';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Rastrear download
        console.log('Download do TeamViewer iniciado');
        
        // Aqui você pode adicionar analytics ou tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'download', {
                'file_name': 'TeamViewer_Setup.exe',
                'event_category': 'software'
            });
        }
    }
    
    return { downloadTeamViewer };
}

// Exportar funções para uso global
if (typeof window !== 'undefined') {
    window.APIExamples = {
        setupEmailJS,
        sendToFormspree,
        setupNetlifyForm,
        sendToBackend,
        sendToGoogleSheets,
        setupGoogleMaps,
        abrirChamado,
        setupTeamViewerDownload
    };
}
