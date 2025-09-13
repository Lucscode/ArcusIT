# 🚀 Arcus Informática - Site Portfolio

Site portfolio moderno e responsivo para a Arcus Informática, empresa especializada em serviços de TI.

## ✨ Características

- **Design Moderno**: Interface futurista com paleta de cores personalizada
- **Totalmente Responsivo**: Funciona perfeitamente em desktop e mobile
- **Formulário de Contato**: Integrado com EmailJS para envio de emails
- **Sistema de Depoimentos**: Clientes podem enviar depoimentos com fotos
- **Validação Manual**: Sistema de verificação matemática no formulário
- **Mapa Estático**: Localização da empresa sem custos de API

## 🎨 Paleta de Cores

- **Fundo principal**: `#121212` (preto carvão)
- **Seções/cartões**: `#1E272E` (cinza grafite escuro)
- **Texto primário**: `#E0E0E0` (cinza claro)
- **Texto secundário**: `#9E9E9E` (cinza médio)
- **Botões principais**: `#00ADB5` (verde-água turquesa)
- **Hover**: `#00CED1` (turquesa mais claro)
- **Destaques**: `#FF6F00` (laranja energético)
- **Alertas**: `#E94560` (vermelho/rosa neon)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Flexbox, Grid, Animações, Media Queries
- **JavaScript**: DOM manipulation, Local Storage, EmailJS
- **EmailJS**: Envio de emails sem backend
- **Google reCAPTCHA**: Proteção contra spam (opcional)

## 📁 Estrutura do Projeto

```
ArcusIT/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript principal
├── config.example.js       # Configurações de exemplo
├── .gitignore             # Arquivos ignorados pelo Git
├── README.md              # Este arquivo
├── imgs/                  # Imagens e logos
│   ├── Logo ArcusIT.png
│   ├── logo-arcus-helpdesk.png
│   └── ...
├── maps/                  # Imagem do mapa
│   └── Captura de tela 2025-09-13 173407.png
└── docs/                  # Documentação
    ├── CONFIGURACAO_EMAILJS.md
    ├── CONFIGURACAO_GOOGLE_MAPS.md
    └── ...
```

## 🚀 Instalação e Configuração

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/arcus-informatica.git
cd arcus-informatica
```

### 2. Configure as APIs
1. Copie `config.example.js` para `config.js`
2. Configure suas chaves de API:
   - **EmailJS**: Para envio de emails
   - **Google Maps**: Para mapa interativo (opcional)
   - **reCAPTCHA**: Para proteção contra spam (opcional)

### 3. Abra o site
Abra `index.html` no seu navegador ou hospede em um servidor web.

## 📧 Configuração do EmailJS

Para configurar o envio de emails, siga o guia em `docs/CONFIGURACAO_EMAILJS.md`.

## 🗺️ Configuração do Mapa

Para usar um mapa interativo, siga o guia em `docs/CONFIGURACAO_GOOGLE_MAPS.md`.

## 📱 Funcionalidades

### Seções do Site
- **Hero**: Apresentação principal com logo centralizada
- **Clientes**: Logos dos clientes e depoimentos
- **Quem Somos**: Informações sobre a empresa
- **Serviços**: Catálogo de serviços oferecidos
- **Contato**: Formulário de contato com validação

### Sistema de Depoimentos
- Clientes podem enviar depoimentos
- Upload de fotos/logos das empresas
- Paginação automática
- Armazenamento local

### Formulário de Contato
- Validação de campos obrigatórios
- Verificação matemática anti-spam
- Envio via EmailJS
- Notificações de sucesso/erro

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-bg: #121212;
    --secondary-bg: #1E272E;
    --accent-color: #00ADB5;
    /* ... */
}
```

### Conteúdo
Edite as informações da empresa em `config.js`:
```javascript
empresa: {
    nome: 'Sua Empresa',
    telefone: 'Seu Telefone',
    // ...
}
```

## 📄 Licença

Este projeto é propriedade da Arcus Informática.

## 📞 Contato

- **Telefone**: (19) 3017-0510
- **WhatsApp**: (19) 3017-0510
- **Email**: suporte@arcusinformatica.com.br
- **Endereço**: Rua Tabajara Valeriano de Carvalho, 263 - Jardim do Vale 2 - Indaiatuba - SP

---

**Desenvolvido com ❤️ para a Arcus Informática**