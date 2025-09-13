# 📚 Instruções para Git - Arcus Informática

## 🚀 Primeiro Commit

### 1. Inicializar o repositório Git
```bash
git init
```

### 2. Adicionar arquivos ao staging
```bash
git add .
```

### 3. Fazer o primeiro commit
```bash
git commit -m "feat: Site portfolio Arcus Informática - versão inicial

- Design moderno e responsivo
- Sistema de depoimentos com upload de fotos
- Formulário de contato com EmailJS
- Validação manual anti-spam
- Mapa estático da localização
- Logo centralizada na seção hero
- Paleta de cores personalizada
- Totalmente responsivo para mobile"
```

### 4. Conectar com repositório remoto
```bash
git remote add origin https://github.com/seu-usuario/arcus-informatica.git
```

### 5. Enviar para o GitHub
```bash
git push -u origin main
```

## 📁 Arquivos Incluídos no Git

### ✅ Arquivos Principais
- `index.html` - Página principal
- `styles.css` - Estilos CSS
- `script.js` - JavaScript principal
- `config.example.js` - Configurações de exemplo
- `README.md` - Documentação principal

### ✅ Pasta de Imagens
- `imgs/` - Todas as imagens e logos
- `maps/` - Imagem do mapa estático

### ✅ Documentação
- `docs/` - Todos os arquivos .md de documentação
- `INSTRUCOES_GIT.md` - Este arquivo

## 🚫 Arquivos Ignorados pelo Git

### ❌ Configurações Sensíveis
- `config.js` - Contém chaves de API reais
- `teste-*.html` - Arquivos de teste
- `teste-*.js` - Arquivos de teste

### ❌ Arquivos Temporários
- `*.tmp`, `*.temp` - Arquivos temporários
- `*.log` - Arquivos de log
- `node_modules/` - Dependências (se houver)

## 🔐 Segurança

### ⚠️ IMPORTANTE
- **NUNCA** commite o arquivo `config.js` com chaves reais
- Use sempre `config.example.js` como base
- Mantenha as chaves de API em local seguro
- Configure o `.gitignore` corretamente

### 🛡️ Boas Práticas
1. Sempre revise os arquivos antes do commit
2. Use mensagens de commit descritivas
3. Faça commits pequenos e frequentes
4. Mantenha a documentação atualizada

## 📝 Comandos Úteis

### Ver status dos arquivos
```bash
git status
```

### Ver diferenças
```bash
git diff
```

### Ver histórico
```bash
git log --oneline
```

### Desfazer último commit (mantendo alterações)
```bash
git reset --soft HEAD~1
```

### Desfazer último commit (removendo alterações)
```bash
git reset --hard HEAD~1
```

## 🔄 Workflow de Desenvolvimento

### 1. Fazer alterações
- Edite os arquivos necessários
- Teste localmente

### 2. Adicionar ao staging
```bash
git add arquivo.html
# ou
git add .
```

### 3. Fazer commit
```bash
git commit -m "feat: descrição da alteração"
```

### 4. Enviar para o GitHub
```bash
git push origin main
```

## 📋 Checklist Antes do Commit

- [ ] Testei o site localmente
- [ ] Verifiquei se não há chaves de API no código
- [ ] Atualizei a documentação se necessário
- [ ] Revisei as alterações com `git diff`
- [ ] Escrevi uma mensagem de commit clara

## 🆘 Resolução de Problemas

### Erro: "fatal: not a git repository"
```bash
git init
```

### Erro: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/seu-usuario/arcus-informatica.git
```

### Erro: "fatal: refusing to merge unrelated histories"
```bash
git pull origin main --allow-unrelated-histories
```

---

**🎯 Pronto para fazer o primeiro commit!**
