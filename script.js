// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const teamviewerBtn = document.getElementById('teamviewer-btn');
const abrirChamadoBtn = document.getElementById('abrir-chamado-btn');

// Depoimentos Elements
const btnDepoimento = document.getElementById('btn-depoimento');
const modalDepoimento = document.getElementById('modal-depoimento');
const modalClose = document.getElementById('modal-close');
const btnCancelar = document.getElementById('btn-cancelar');
const formDepoimento = document.getElementById('form-depoimento');
const depoimentosGrid = document.getElementById('depoimentos-grid');
const pagination = document.getElementById('pagination');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// File upload elements
const fotoCliente = document.getElementById('foto-cliente');
const filePreview = document.getElementById('file-preview');
const previewImage = document.getElementById('preview-image');
const removeImage = document.getElementById('remove-image');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 39, 46, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(30, 39, 46, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Initialize EmailJS
emailjs.init(CONFIG.apis.emailjs.publicKey);

// Contact Form Validation and Submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validar resposta matemática primeiro
    if (!validateMathAnswer()) {
        return;
    }
    
    const formData = new FormData(contactForm);
    const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        empresa: formData.get('empresa'),
        mensagem: formData.get('mensagem'),
        verificacao: formData.get('verificacao')
    };
    
    // Basic validation
    if (!data.nome || !data.email || !data.mensagem) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Por favor, insira um e-mail válido.', 'error');
        return;
    }
    
    // Math validation already done above
    
    try {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Check if EmailJS is configured
        if (!CONFIG.apis.emailjs.enabled) {
            throw new Error('EmailJS não configurado');
        }
        
        // Send email using EmailJS
        const templateParams = {
            from_name: data.nome,
            from_email: data.email,
            empresa: data.empresa || 'Não informado',
            message: data.mensagem,
            to_email: CONFIG.empresa.email
        };
        
        await emailjs.send(
            CONFIG.apis.emailjs.serviceId,
            CONFIG.apis.emailjs.templateId,
            templateParams
        );
        
        showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        contactForm.reset();
        generateNewQuestion(); // Reset math question
        
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        showNotification('Erro ao enviar mensagem. Tente novamente.', 'error');
    } finally {
        // Reset button state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simulate email sending (replace with actual API call)
function simulateEmailSend(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success/failure
            if (Math.random() > 0.1) { // 90% success rate for demo
                console.log('Email data:', data);
                resolve();
            } else {
                reject(new Error('Simulated error'));
            }
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
}

// TeamViewer and Chamado buttons functionality
teamviewerBtn.addEventListener('click', (e) => {
    // Allow the download link to work normally
    console.log('TeamViewer download clicked - redirecting to official site');
    // Optional: Track download clicks for analytics
    // showNotification('Redirecionando para download do TeamViewer...', 'info');
});

abrirChamadoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: Implement chamado opening logic
    showNotification('Sistema de abertura de chamados será implementado em breve.', 'info');
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loading');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.depoimento-card, .servico-card, .stat-item');
    animatedElements.forEach(el => observer.observe(el));
});


// WhatsApp widget click tracking
document.querySelector('.whatsapp-btn').addEventListener('click', () => {
    // Track WhatsApp clicks for analytics
    console.log('WhatsApp widget clicked');
});

// Validação Manual
function validateMathAnswer() {
    const answer = document.getElementById('verificacao').value;
    const correctAnswer = window.currentMathAnswer || 10; // Usar resposta dinâmica ou padrão
    
    if (parseInt(answer) === correctAnswer) {
        return true;
    } else {
        showNotification('Resposta incorreta. Tente novamente.', 'error');
        // Gerar nova pergunta após erro
        generateNewQuestion();
        document.getElementById('verificacao').value = '';
        return false;
    }
}

// Gerar nova pergunta matemática
function generateNewQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = Math.random() > 0.5 ? '+' : '-';
    
    let question, answer;
    if (operation === '+') {
        question = `${num1} + ${num2}`;
        answer = num1 + num2;
    } else {
        // Garantir que o resultado seja positivo
        const larger = Math.max(num1, num2);
        const smaller = Math.min(num1, num2);
        question = `${larger} - ${smaller}`;
        answer = larger - smaller;
    }
    
    // Atualizar a pergunta na página
    const questionElement = document.querySelector('.pergunta-math');
    if (questionElement) {
        questionElement.innerHTML = `Quanto é <strong>${question}</strong>?`;
    }
    
    // Armazenar a resposta correta
    window.currentMathAnswer = answer;
    
    return { question, answer };
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        font-size: 1rem;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;
document.head.appendChild(notificationStyles);

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add loading class to elements for staggered animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-content, .hero-image, .section-header, .depoimento-card, .servico-card');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Inicializar pergunta matemática
    generateNewQuestion();
    
    // Initialize testimonials system
    initializeTestimonials();
});

// ========================================
// SISTEMA DE DEPOIMENTOS
// ========================================

// Configurações de paginação
const TESTIMONIALS_PER_PAGE = 6;
let currentPage = 1;
let allTestimonials = [];

// Depoimentos padrão
const defaultTestimonials = [
    {
        id: 1,
        nome: "Alex Vanenta",
        email: "alex@italodecor.com",
        corporacao: "Italo Decor",
        website: "",
        cabecalho: "",
        depoimento: "Sou cliente da Arcus desde sua fundação, e já conhecia e confiava no profissionalismo do Danilo Menegassi antes mesmo de ter seu próprio negócio! O que a Arcus sempre teve conosco foi Credibilidade, isso porque sempre fomos atendidos e tivemos nossos problemas de TI resolvidos de imediato, e sem onerar nossas operações, a capacidade e presteza da Arcus me deixa tranqüilo para me concentrar no que realmente minha empresa faz! Recomendo",
        logo: "Clientes/italodecor logo.jpg",
        foto: "",
        data: "2024-01-15"
    },
    {
        id: 2,
        nome: "André Akio Shinozuka",
        email: "andre@fotocriativa.com",
        corporacao: "Fotocriativa",
        website: "",
        cabecalho: "",
        depoimento: "Para nós, depois da câmera, o computador é a nossa principal ferramenta de trabalho, e sabendo desta necessidade e preocupados com nossa produtividade estão sempre a disposição para nos atender extremamente rápido e nos entregar a solução! Recomendo pelo atendimento rápido, soluções precisas, educação e domínio do assunto.",
        logo: "Clientes/fotocriativa logo.jpg",
        foto: "",
        data: "2024-01-20"
    },
    {
        id: 3,
        nome: "Juliana Paixão",
        email: "juliana@formulaacademia.com",
        corporacao: "Fórmula Academia",
        website: "",
        cabecalho: "Agradecemos o empenho da Arcus,",
        depoimento: "Agradecemos o empenho da Arcus, que sempre nos atende com agilidade. Uma empresa parceira, que conta com profissionais responsáveis e competentes.",
        logo: "Clientes/Logo Formula.jpg",
        foto: "",
        data: "2024-01-25"
    },
    {
        id: 4,
        nome: "Carol Varella",
        email: "carol@bellamesa.com",
        corporacao: "Bellamesa",
        website: "",
        cabecalho: "",
        depoimento: "A Bellamesa vem trabalhando com a Arcus desde o seu início. Temos um excepcional prestador de serviço sendo este pontual eficiente e cordial. Atendendo com eficiência em qualidade e custo. Recomendamos.",
        logo: "Clientes/bellamesa logo.jpg",
        foto: "",
        data: "2024-02-01"
    },
    {
        id: 5,
        nome: "Frederico Magnusson",
        email: "frederico@farmabertha.com",
        corporacao: "Farma Bertha",
        website: "",
        cabecalho: "",
        depoimento: "Trabalhamos por alguns meses de forma avulsa, resolvendo problemas do dia-adia, na qual Arcus atendia a demanda de nossas 7 lojas. E a só recebia elogios de meu gestor e meus colaboradores, o que nos levou a fechar um contrato de Outsourcing de TI. Sinceramente, nunca ouvi alguém elogiar uma empresa de informática",
        logo: "Clientes/farmabertha logo.jpg",
        foto: "",
        data: "2024-02-05"
    },
    {
        id: 6,
        nome: "Thales Gabeta",
        email: "thales@viacorte.com",
        corporacao: "Viacorte",
        website: "",
        cabecalho: "",
        depoimento: "Estar desde o início da formação e além de ajudar e participar, o grau de confiança aplicado desde a tarefa mais simples até os problemas que levam dias a serem solucionado tornou a parceria indispensável. Todos os colaboradores são muito atenciosos, auxiliam na dúvida de todos e procuram resolver prontamente o problema",
        logo: "Clientes/viacorte logo.jpg",
        foto: "",
        data: "2024-02-10"
    },
    {
        id: 7,
        nome: "Guilherme Motta",
        email: "guilherme@rodoind.com",
        corporacao: "Rodoind",
        website: "",
        cabecalho: "",
        depoimento: "A Arcus é uma empresa que atende as nossas necessidades oferecendo técnicos capacitados e atualizados, mais ainda por nos atender com agilidez e prontidão em todos assuntos inerentes. Assim, a empresa sempre se mostra mais do que uma prestadora de serviços, uma grande parceira, preocupada em oferecer o melhor do setor. Sem dúvida uma empresa que preza pelo profissionalismo, ética e capacitação.",
        logo: "Clientes/logo-rodoind.jpg",
        foto: "",
        data: "2024-02-15"
    },
    {
        id: 8,
        nome: "Daniel Lowenthal",
        email: "daniel@espacohaus.com",
        corporacao: "Grupo Espaço Haus",
        website: "",
        cabecalho: "",
        depoimento: "Somos clientes da Arcus Informática há mais de 9 anos e, desde o início, sempre fomos muito bem atendidos pelo proprietário, Danilo, e toda sua equipe. Desde o início, sempre se mostraram uma empresa séria e que se preocupa verdadeiramente com nossa atividade/operação, se adequando e planejando suas ações conforme as nossas necessidades. A Arcus Informática é uma empresa na qual você e sua empresa podem confiar.",
        logo: "Clientes/espacohaus logo.jpg",
        foto: "",
        data: "2024-02-20"
    },
    {
        id: 9,
        nome: "Isac Peruci",
        email: "isac@mbseguros.com",
        corporacao: "MB Seguros",
        website: "",
        cabecalho: "",
        depoimento: "Parabéns aos profissionais da arcus. Atendimento nota 1000, solicitei um orçamento e fechamos o serviço, pontuais, com todo cuidado aos equipamentos da MB, respeitando o prazo que é fundamental nos dias de hoje. Super recomendo !!!",
        logo: "Clientes/logo-mb.jpg",
        foto: "",
        data: "2024-02-25"
    },
    {
        id: 10,
        nome: "Edson Anzolin",
        email: "edson@residencial.com",
        corporacao: "Residencial",
        website: "",
        cabecalho: "",
        depoimento: "Somos clientes da ARCUS Informática, e com o advento da Pandemia os trabalhos no modelo home office se intensificaram e atualizações tecnológicas precisaram ser implementadas em nossa residência. São profissionais técnicos bastante competentes e confiáveis. Importante salientar que além da qualidade do serviço prestado, são excelentes no Pós Atendimento",
        logo: "Clientes/logo-residencial300x300.jpg",
        foto: "",
        data: "2024-03-01"
    },
    {
        id: 11,
        nome: "Ana Lucia",
        email: "ana@sanare.com",
        corporacao: "Sanare Serviços de Saúde",
        website: "",
        cabecalho: "",
        depoimento: "A Arcus presta serviços pra nossa empresa há alguns anos e estamos satisfeitos com a assessoria. Eles atendem sempre rápido e resolvem o problema. Indicamos os serviços com certeza.",
        logo: "Clientes/sanare logo.jpg",
        foto: "",
        data: "2024-03-05"
    }
];

// Inicializar sistema de depoimentos
function initializeTestimonials() {
    // Limpar localStorage para forçar recarregamento dos depoimentos padrão
    localStorage.removeItem('arcusTestimonials');
    
    // Usar os depoimentos padrão
    allTestimonials = [...defaultTestimonials];
    
    // Salvar a lista atualizada
    saveTestimonials();
    
    // Debug: verificar se as logos estão definidas
    console.log('Depoimentos carregados:', allTestimonials.length);
    allTestimonials.forEach((testimonial, index) => {
        console.log(`Depoimento ${index + 1}: ${testimonial.nome} - Logo: ${testimonial.logo}`);
    });
    
    // Renderizar depoimentos
    renderTestimonials();
    
    // Configurar eventos do modal
    setupModalEvents();
    
    // Configurar eventos de paginação
    setupPaginationEvents();
}

// Configurar eventos do modal
function setupModalEvents() {
    // Abrir modal
    btnDepoimento.addEventListener('click', () => {
        openModal();
    });
    
    // Fechar modal
    modalClose.addEventListener('click', closeModal);
    btnCancelar.addEventListener('click', closeModal);
    
    // Fechar modal clicando no overlay
    modalDepoimento.addEventListener('click', (e) => {
        if (e.target === modalDepoimento) {
            closeModal();
        }
    });
    
    // Fechar modal com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalDepoimento.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Configurar upload de foto
    setupFileUpload();
    
    // Configurar formulário
    formDepoimento.addEventListener('submit', handleTestimonialSubmit);
}

// Configurar upload de foto
function setupFileUpload() {
    fotoCliente.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImage.src = e.target.result;
                filePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
    
    removeImage.addEventListener('click', () => {
        fotoCliente.value = '';
        filePreview.style.display = 'none';
        previewImage.src = '';
    });
}

// Abrir modal
function openModal() {
    modalDepoimento.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focar no primeiro campo
    setTimeout(() => {
        document.getElementById('nome-completo').focus();
    }, 300);
}

// Fechar modal
function closeModal() {
    modalDepoimento.classList.remove('active');
    document.body.style.overflow = '';
    
    // Limpar formulário
    formDepoimento.reset();
    filePreview.style.display = 'none';
    previewImage.src = '';
}

// Lidar com envio do formulário de depoimento
function handleTestimonialSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(formDepoimento);
    const testimonialData = {
        id: Date.now(),
        nome: formData.get('nome-completo'),
        email: formData.get('email-depoimento'),
        corporacao: formData.get('corporacao') || '',
        website: formData.get('website') || '',
        cabecalho: formData.get('cabecalho') || '',
        depoimento: formData.get('depoimento-texto'),
        logo: '', // Logo será definida se o usuário fizer upload de uma foto
        foto: '',
        data: new Date().toISOString().split('T')[0]
    };
    
    // Validar campos obrigatórios
    if (!testimonialData.nome || !testimonialData.email || !testimonialData.depoimento) {
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }
    
    // Validar email
    if (!isValidEmail(testimonialData.email)) {
        showNotification('Por favor, insira um e-mail válido.', 'error');
        return;
    }
    
    // Processar foto se houver
    const file = formData.get('foto-cliente');
    if (file && file.size > 0) {
        const reader = new FileReader();
        reader.onload = (e) => {
            testimonialData.logo = e.target.result; // Usar como logo da empresa
            addTestimonial(testimonialData);
        };
        reader.readAsDataURL(file);
    } else {
        addTestimonial(testimonialData);
    }
}

// Adicionar depoimento
function addTestimonial(testimonialData) {
    // Adicionar à lista
    allTestimonials.unshift(testimonialData);
    
    // Salvar no localStorage
    saveTestimonials();
    
    // Renderizar depoimentos
    renderTestimonials();
    
    // Fechar modal
    closeModal();
    
    // Mostrar notificação de sucesso
    showNotification('Depoimento enviado com sucesso! Obrigado pelo seu feedback.', 'success');
    
    // Scroll para a seção de depoimentos
    setTimeout(() => {
        document.getElementById('clientes').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 1000);
}

// Salvar depoimentos no localStorage
function saveTestimonials() {
    localStorage.setItem('arcusTestimonials', JSON.stringify(allTestimonials));
}

// Renderizar depoimentos
function renderTestimonials() {
    const totalPages = Math.ceil(allTestimonials.length / TESTIMONIALS_PER_PAGE);
    const startIndex = (currentPage - 1) * TESTIMONIALS_PER_PAGE;
    const endIndex = startIndex + TESTIMONIALS_PER_PAGE;
    const testimonialsToShow = allTestimonials.slice(startIndex, endIndex);
    
    // Limpar grid
    depoimentosGrid.innerHTML = '';
    
    // Renderizar depoimentos
    testimonialsToShow.forEach(testimonial => {
        const testimonialCard = createTestimonialCard(testimonial);
        depoimentosGrid.appendChild(testimonialCard);
    });
    
    // Atualizar paginação
    updatePagination(totalPages);
}

// Criar card de depoimento
function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'depoimento-card loading';
    
    // Usar logo da empresa se disponível, senão usar foto do cliente, senão usar inicial
    let logoHtml = '';
    if (testimonial.logo) {
        logoHtml = `<img src="${testimonial.logo}" alt="${testimonial.corporacao || testimonial.nome}" class="depoimento-photo depoimento-logo">`;
    } else if (testimonial.foto) {
        logoHtml = `<img src="${testimonial.foto}" alt="${testimonial.nome}" class="depoimento-photo">`;
    } else {
        logoHtml = `<div class="depoimento-photo" style="background: var(--accent-color); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">${testimonial.nome.charAt(0)}</div>`;
    }
    
    const websiteHtml = testimonial.website ? 
        `<a href="${testimonial.website}" target="_blank" class="website">${testimonial.website}</a>` : '';
    
    const cabecalhoHtml = testimonial.cabecalho ? 
        `<div class="depoimento-cabecalho">"${testimonial.cabecalho}"</div>` : '';
    
    card.innerHTML = `
        <div class="depoimento-content">
            ${cabecalhoHtml}
            <p class="depoimento-text">"${testimonial.depoimento}"</p>
            <div class="depoimento-author">
                ${logoHtml}
                <div class="depoimento-author-info">
                    <h4>${testimonial.nome}</h4>
                    <span>${testimonial.corporacao || 'Cliente'}</span>
                    ${websiteHtml}
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Configurar eventos de paginação
function setupPaginationEvents() {
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTestimonials();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const totalPages = Math.ceil(allTestimonials.length / TESTIMONIALS_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            renderTestimonials();
        }
    });
}

// Atualizar paginação
function updatePagination(totalPages) {
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    
    pagination.style.display = 'flex';
    
    // Atualizar botões
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    // Atualizar informação da página
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
}
