# 🗺️ Configuração do Google Maps - Guia Completo

## 📍 **Onde Encontrar o Google Cloud Console**

### **Passo 1: Acessar o Console**
1. Vá para: **https://console.cloud.google.com/**
2. Faça login com sua conta Google (Gmail)
3. Se for a primeira vez, aceite os termos de serviço

### **Passo 2: Criar ou Selecionar Projeto**
1. No canto superior esquerdo, clique no **seletor de projeto**
2. Clique em **"Novo Projeto"**
3. Digite o nome: **"Arcus Informática"** (ou qualquer nome)
4. Clique em **"Criar"**

## 🔑 **Como Obter a Chave da API**

### **Passo 3: Ativar a API**
1. No menu lateral esquerdo, clique em **"APIs e Serviços"**
2. Clique em **"Biblioteca"**
3. Procure por **"Maps JavaScript API"**
4. Clique na API
5. Clique em **"Ativar"**

### **Passo 4: Criar Credenciais**
1. No menu lateral, clique em **"Credenciais"**
2. Clique em **"+ Criar Credenciais"**
3. Selecione **"Chave de API"**
4. Sua chave será gerada automaticamente
5. **COPIE A CHAVE** (ela não será mostrada novamente)

### **Passo 5: Configurar Restrições (Opcional mas Recomendado)**
1. Clique no ícone de **editar** ao lado da sua chave
2. Em **"Restrições de aplicativo"**, escolha **"Sites da Web"**
3. Adicione seu domínio (ex: `https://seusite.com`)
4. Para teste local, adicione: `http://localhost:*`
5. Clique em **"Salvar"**

## 🔧 **Como Configurar no Site**

### **Passo 6: Atualizar o Código**
1. Abra o arquivo `index.html`
2. Encontre esta linha:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap" async defer></script>
   ```
3. Substitua `YOUR_GOOGLE_MAPS_API_KEY` pela sua chave
4. Exemplo:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&callback=initMap" async defer></script>
   ```

### **Passo 7: Ativar no Config**
1. Abra o arquivo `config.js`
2. Encontre a seção `apis.googleMaps`
3. Mude `enabled: false` para `enabled: true`
4. Substitua `YOUR_GOOGLE_MAPS_API_KEY` pela sua chave

## 🧪 **Como Testar**

### **Teste Local**
1. Abra o `index.html` no navegador
2. Vá para a seção "Contato"
3. Verifique se o mapa aparece
4. Teste se o marcador está na localização correta

### **Teste com Servidor Local**
1. Use um servidor local (recomendado)
2. Acesse `http://localhost:8000`
3. Verifique se o mapa carrega corretamente

## 🚨 **Problemas Comuns**

### **"Esta página não pode carregar o Google Maps"**
- **Causa**: Chave de API inválida ou não configurada
- **Solução**: Verifique se a chave está correta no código

### **"Google Maps JavaScript API error: RefererNotAllowedMapError"**
- **Causa**: Domínio não autorizado
- **Solução**: Adicione seu domínio nas restrições da API

### **"Google Maps JavaScript API error: ApiNotActivatedMapError"**
- **Causa**: API não ativada
- **Solução**: Ative a "Maps JavaScript API" no console

### **Mapa não aparece**
- **Causa**: Erro de JavaScript
- **Solução**: Abra o console (F12) e verifique os erros

## 💰 **Custos**

### **Gratuito**
- **$200 de crédito** por mês
- **28.000 carregamentos de mapa** por mês
- **40.000 solicitações de direções** por mês

### **Para Sites Pequenos**
- Geralmente fica dentro do limite gratuito
- Monitoramento disponível no console

## 📱 **Configuração para Mobile**

### **Responsividade**
- O mapa já está configurado para ser responsivo
- Funciona em todos os tamanhos de tela
- Zoom e pan funcionam em dispositivos touch

## 🎯 **Resultado Final**

Após a configuração, você terá:
- ✅ Mapa interativo na seção de contato
- ✅ Marcador na localização da Arcus Informática
- ✅ Informações da empresa no popup
- ✅ Design responsivo
- ✅ Funcionamento em todos os dispositivos

## 📞 **Suporte**

Se tiver problemas:
1. Verifique o console do navegador (F12)
2. Confirme se a API está ativada
3. Verifique se a chave está correta
4. Teste em diferentes navegadores

**O mapa estará funcionando perfeitamente após seguir estes passos!** 🗺️
