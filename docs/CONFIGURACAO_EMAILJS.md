# 📧 Configuração do EmailJS - Envio de Emails

## 🎯 **O que foi implementado:**

### **✅ Código EmailJS Integrado**
- Script do EmailJS adicionado
- Configuração no `config.js`
- Lógica de envio no `script.js`
- Validação matemática mantida

### **✅ Funcionalidades**
- Envio real para `arcus@gmail.com`
- Template personalizado
- Validação completa
- Mensagens de sucesso/erro

---

## 🚀 **Passo a Passo para Configurar**

### **Passo 1: Criar Conta no EmailJS**

1. **Acesse**: `https://www.emailjs.com/`
2. **Clique** em "Sign Up"
3. **Crie** conta gratuita
4. **Confirme** email

### **Passo 2: Configurar Serviço de Email**

1. **No dashboard**, vá para "Email Services"
2. **Clique** em "Add New Service"
3. **Selecione** "Gmail" (ou seu provedor)
4. **Configure** com `comercial@arcus.com.br`
5. **Anote** o Service ID

### **Passo 3: Criar Template de Email**

1. **Vá** para "Email Templates"
2. **Clique** em "Create New Template"
3. **Use** este template:

```html
Assunto: Nova Mensagem do Site - {{from_name}}

De: {{from_name}} ({{from_email}})
Empresa: {{empresa}}

Mensagem:
{{message}}

---
Enviado através do site da Arcus Informática
```

4. **Salve** e anote o Template ID

### **Passo 4: Obter Chaves**

1. **Vá** para "Account" → "General"
2. **Anote** a Public Key
3. **Anote** o Service ID (Passo 2)
4. **Anote** o Template ID (Passo 3)

### **Passo 5: Atualizar config.js**

Substitua no arquivo `config.js`:

```javascript
emailjs: {
    serviceId: 'SEU_SERVICE_ID_AQUI',
    templateId: 'SEU_TEMPLATE_ID_AQUI', 
    publicKey: 'SUA_PUBLIC_KEY_AQUI',
    enabled: true
}
```

---

## 📧 **Template de Email Sugerido**

### **Assunto:**
```
Nova Mensagem do Site - {{from_name}}
```

### **Corpo:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Nova Mensagem do Site</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #00ADB5; border-bottom: 2px solid #00ADB5; padding-bottom: 10px;">
            Nova Mensagem do Site
        </h2>
        
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Nome:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Empresa:</strong> {{empresa}}</p>
        </div>
        
        <div style="background: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px;">
            <h3>Mensagem:</h3>
            <p style="white-space: pre-wrap;">{{message}}</p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Enviado através do site da Arcus Informática</p>
            <p>Data: {{current_date}}</p>
        </div>
    </div>
</body>
</html>
```

---

## 🧪 **Como Testar**

### **1. Configurar EmailJS**
- Siga os passos acima
- Atualize o `config.js`

### **2. Testar o Formulário**
1. **Abra** `index.html` no navegador
2. **Vá** para a seção "Contato"
3. **Preencha** o formulário
4. **Resolva** a pergunta matemática
5. **Clique** em "Enviar Mensagem"

### **3. Verificar Email**
- **Verifique** a caixa de entrada de `arcus@gmail.com`
- **Confirme** se o email chegou formatado

---

## 📊 **Limites do EmailJS Gratuito**

| Recurso | Limite Gratuito |
|---------|----------------|
| **Emails/mês** | 200 |
| **Templates** | 2 |
| **Serviços** | 1 |
| **Contatos** | 1.000 |

---

## 🔧 **Solução de Problemas**

### **❌ "EmailJS não configurado"**
- **Verifique** se `enabled: true` no config.js
- **Confirme** se as chaves estão corretas

### **❌ "Service not found"**
- **Verifique** o Service ID
- **Confirme** se o serviço está ativo

### **❌ "Template not found"**
- **Verifique** o Template ID
- **Confirme** se o template está publicado

### **❌ Email não chega**
- **Verifique** spam/lixo eletrônico
- **Confirme** se o Gmail está configurado
- **Teste** com outro email

---

## 🎯 **Resultado Final**

Após configurar, você terá:
- ✅ **Emails reais** chegando em `arcus@gmail.com`
- ✅ **Template personalizado** e profissional
- ✅ **Validação completa** funcionando
- ✅ **Zero custos** (até 200 emails/mês)

---

**🚀 Configure o EmailJS e teste o envio de emails!**

**Me diga quando terminar a configuração!** 📧
