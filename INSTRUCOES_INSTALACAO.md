# 🚀 Instruções de Instalação - Arcus Informática

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:
- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet
- As chaves de API necessárias (opcional para teste inicial)

## 🛠️ Passo a Passo para Executar o Site

### 1. Preparação dos Arquivos
1. Certifique-se de que todos os arquivos estão na mesma pasta:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `config.js`
   - `api-examples.js`
   - Pasta `imgs/` com as imagens

### 2. Executar o Site Localmente

#### Opção A: Abrir Diretamente no Navegador
1. Navegue até a pasta onde estão os arquivos
2. Clique duas vezes no arquivo `index.html`
3. O site abrirá no seu navegador padrão

#### Opção B: Usar um Servidor Local (Recomendado)
Para melhor funcionamento, especialmente com APIs, use um servidor local:

**Com Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Com Node.js (se tiver instalado):**
```bash
npx http-server -p 8000
```

**Com PHP (se tiver instalado):**
```bash
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

### 3. Testar Funcionalidades Básicas
- ✅ Navegação entre seções
- ✅ Menu responsivo (teste redimensionando a janela)
- ✅ Animações e efeitos visuais
- ✅ Formulário de contato (validação básica)
- ✅ Widget do WhatsApp

## 🔧 Configuração das APIs (Opcional)

### Google Maps
1. **Acesse o Google Cloud Console**: https://console.cloud.google.com/
2. **Faça login** com sua conta Google (Gmail)
3. **Crie um projeto**:
   - Clique no seletor de projeto (canto superior esquerdo)
   - Clique em "Novo Projeto"
   - Digite o nome: "Arcus Informática"
   - Clique em "Criar"
4. **Ative a API**:
   - No menu lateral, clique em "APIs e Serviços" → "Biblioteca"
   - Procure por "Maps JavaScript API"
   - Clique na API e depois em "Ativar"
5. **Crie a chave de API**:
   - No menu lateral, clique em "Credenciais"
   - Clique em "+ Criar Credenciais" → "Chave de API"
   - **COPIE A CHAVE** (ela não será mostrada novamente)
6. **Configure no site**:
   - No arquivo `index.html`, substitua `YOUR_GOOGLE_MAPS_API_KEY` pela sua chave
   - No arquivo `config.js`, mude `apis.googleMaps.enabled` para `true`

**💡 Dica**: Para mais detalhes, consulte o arquivo `CONFIGURACAO_GOOGLE_MAPS.md`

### reCAPTCHA
1. Acesse: https://www.google.com/recaptcha/
2. Clique em "Admin Console"
3. Crie um novo site
4. Escolha reCAPTCHA v2
5. Adicione seu domínio
6. Copie a chave do site
7. No arquivo `index.html`, substitua `YOUR_RECAPTCHA_SITE_KEY` pela sua chave
8. No arquivo `config.js`, mude `apis.recaptcha.enabled` para `true`

### Formulário de Contato
Para fazer o formulário funcionar de verdade, escolha uma das opções no arquivo `api-examples.js`:

#### Opção 1: EmailJS (Mais Fácil)
1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Conecte seu email (Gmail, Outlook, etc.)
4. Crie um template de email
5. Copie o Service ID, Template ID e Public Key
6. Siga o exemplo no arquivo `api-examples.js`

#### Opção 2: Formspree (Simples)
1. Acesse: https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o endpoint fornecido
5. Siga o exemplo no arquivo `api-examples.js`

## 📱 Teste de Responsividade

### Desktop
- Abra o site em uma janela grande
- Teste todas as seções
- Verifique se as animações funcionam

### Tablet
- Redimensione a janela para simular um tablet
- Teste o menu de navegação
- Verifique se o layout se adapta

### Mobile
- Use as ferramentas de desenvolvedor do navegador (F12)
- Ative o modo dispositivo móvel
- Teste em diferentes tamanhos de tela
- Verifique se o menu hambúrguer funciona

## 🎨 Personalização

### Alterar Cores
Edite o arquivo `styles.css` na seção `:root`:
```css
:root {
    --primary-bg: #121212;        /* Fundo principal */
    --secondary-bg: #1E272E;      /* Fundo das seções */
    --accent-color: #00ADB5;      /* Cor de destaque */
    --highlight-color: #FF6F00;   /* Cor de alerta */
}
```

### Alterar Conteúdo
Edite o arquivo `index.html`:
- Textos das seções
- Informações de contato
- Depoimentos de clientes

### Alterar Configurações
Edite o arquivo `config.js`:
- Informações da empresa
- Configurações de API
- Configurações de animação

## 🐛 Solução de Problemas

### Site não carrega
- Verifique se todos os arquivos estão na mesma pasta
- Certifique-se de que o arquivo `index.html` está correto
- Teste em um navegador diferente

### Imagens não aparecem
- Verifique se a pasta `imgs/` existe
- Confirme se os nomes dos arquivos estão corretos
- Verifique se as imagens estão no formato correto

### Formulário não funciona
- Verifique se o JavaScript está habilitado no navegador
- Confirme se as APIs estão configuradas corretamente
- Verifique o console do navegador (F12) para erros

### Mapa não aparece
- Confirme se a chave do Google Maps está correta
- Verifique se a API está ativada
- Teste se há erros no console do navegador

## 📞 Suporte

Se encontrar problemas:
1. Verifique o console do navegador (F12 → Console)
2. Confirme se todos os arquivos estão presentes
3. Teste em um navegador diferente
4. Verifique se as APIs estão configuradas corretamente

## 🚀 Próximos Passos

Após testar localmente:
1. Configure as APIs necessárias
2. Personalize o conteúdo conforme necessário
3. Teste em diferentes dispositivos
4. Prepare para hospedagem online

---

**Dica:** Para melhor experiência, sempre teste em um servidor local ao invés de abrir o arquivo diretamente no navegador.
