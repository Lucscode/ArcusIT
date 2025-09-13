# 🔐 Configuração do reCAPTCHA - Guia Completo

## 📋 **Pré-requisitos**
- Conta Google (mesma do Google Maps)
- Acesso à internet
- 5 minutos do seu tempo

---

## 🚀 **Passo 1: Acessar o Google reCAPTCHA**

### **1.1 Abrir o Site**
```
https://www.google.com/recaptcha/admin
```

### **1.2 Fazer Login**
- Use a **mesma conta Google** do Google Maps
- Se não tiver conta, crie uma gratuitamente

---

## 🆕 **Passo 2: Criar Novo Site**

### **2.1 Iniciar Criação**
- Clique no botão **"+"** (Criar) no canto superior direito
- Ou clique em **"Create"** se estiver em inglês

### **2.2 Preencher Dados**
```
Rótulo: Arcus Informática Website
Tipo reCAPTCHA: reCAPTCHA v2
Versão: "I'm not a robot" Checkbox
```

### **2.3 Configurar Domínios**
**Adicione os seguintes domínios:**
```
localhost
127.0.0.1
arcusinformatica.com.br
www.arcusinformatica.com.br
```

**⚠️ Importante:** Adicione `localhost` e `127.0.0.1` para testar localmente!

### **2.4 Aceitar Termos**
- Marque a caixa de aceite dos termos
- Clique em **"Submit"**

---

## 🔑 **Passo 3: Obter as Chaves**

### **3.1 Após Criar o Site**
Você verá uma tela com:
```
Site Key: 6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Secret Key: 6LcYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
```

### **3.2 Anotar as Chaves**
**Copie e guarde:**
- **Site Key** (chave pública) - vai no HTML
- **Secret Key** (chave privada) - vai no backend

---

## ⚙️ **Passo 4: Atualizar o Site**

### **4.1 Editar config.js**
Abra o arquivo `config.js` e substitua:

```javascript
// ANTES
recaptcha: {
    siteKey: 'YOUR_RECAPTCHA_SITE_KEY',
    enabled: false
}

// DEPOIS
recaptcha: {
    siteKey: '6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // Sua chave aqui
    enabled: true
}
```

### **4.2 Exemplo Prático**
```javascript
recaptcha: {
    siteKey: '6LcAbCdEfGhIjKlMnOpQrStUvWxYz123456789',
    enabled: true
}
```

---

## 🧪 **Passo 5: Testar o reCAPTCHA**

### **5.1 Abrir o Site**
```
Abra: index.html no navegador
```

### **5.2 Ir para o Formulário**
- Role até a seção **"Contato"**
- Preencha o formulário
- **Deve aparecer**: Caixa "I'm not a robot"

### **5.3 Verificar Funcionamento**
- Clique na caixa do reCAPTCHA
- Deve carregar o desafio visual
- Após completar, deve mostrar ✓

---

## 🔧 **Solução de Problemas**

### **❌ reCAPTCHA não aparece**
**Causa:** Site Key incorreta ou domínio não configurado
**Solução:** 
1. Verifique se adicionou `localhost` nos domínios
2. Confirme se a chave está correta no `config.js`
3. Recarregue a página (Ctrl+F5)

### **❌ Erro "Invalid site key"**
**Causa:** Chave incorreta ou domínio não autorizado
**Solução:**
1. Verifique se copiou a chave corretamente
2. Adicione `localhost` nos domínios do reCAPTCHA
3. Aguarde alguns minutos para propagação

### **❌ reCAPTCHA não valida**
**Causa:** Secret Key não configurada no backend
**Solução:** 
- Para teste local, isso é normal
- O reCAPTCHA visual funcionará
- A validação completa precisa do backend

---

## 📱 **Teste em Diferentes Dispositivos**

### **Desktop**
- reCAPTCHA com checkbox
- Desafio visual se necessário

### **Mobile**
- reCAPTCHA otimizado para touch
- Mesma funcionalidade

---

## 🎯 **Resultado Final**

✅ **reCAPTCHA ativo** no formulário de contato  
✅ **Proteção contra spam** funcionando  
✅ **Design integrado** ao site  
✅ **Teste local** funcionando  

---

## 📞 **Próximos Passos**

1. **Configure** o reCAPTCHA seguindo este guia
2. **Teste** localmente
3. **Me informe** se funcionou ou se teve algum problema
4. **Configuraremos** o backend para validação completa

---

**🚀 Vamos começar! Siga o Passo 1 e me diga quando estiver pronto!**
