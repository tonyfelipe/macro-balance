# Macro Balance - Guia de Deploy

## Pré-requisitos

- Conta no GitHub
- Conta no Render (ou Vercel/Railway)
- Banco de dados MySQL (pode usar PlanetScale, Railway DB, ou Render PostgreSQL convertido)

## 1. Preparar Repositório GitHub

```bash
# Inicializar git (se ainda não foi feito)
git init
git add .
git commit -m "Initial commit - Macro Balance"

# Criar repositório no GitHub e fazer push
git remote add origin https://github.com/seu-usuario/macro-balance.git
git branch -M main
git push -u origin main
```

## 2. Configurar Banco de Dados

### Opção A: PlanetScale (Recomendado - MySQL gratuito)
1. Criar conta em https://planetscale.com
2. Criar novo database
3. Copiar connection string

### Opção B: Railway
1. Criar conta em https://railway.app
2. New Project → Provision MySQL
3. Copiar connection string

## 3. Deploy no Render

### 3.1 Criar Web Service
1. Acessar https://render.com
2. New → Web Service
3. Conectar repositório GitHub
4. Configurar:
   - **Name**: macro-balance
   - **Environment**: Node
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Node Version**: 22

### 3.2 Variáveis de Ambiente
Adicionar em Environment:

```
DATABASE_URL=mysql://user:password@host:port/database
JWT_SECRET=seu-secret-aleatorio-aqui-minimo-32-caracteres
NODE_ENV=production
```

**Importante**: Gere um JWT_SECRET forte:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## 4. Deploy Alternativo - Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Configurar variáveis de ambiente no dashboard
# DATABASE_URL
# JWT_SECRET
```

## 5. Após Deploy

1. Acessar URL do app
2. Clicar em "Criar Conta"
3. Cadastrar primeiro usuário
4. Configurar metas
5. Começar a usar!

## 6. Domínio Personalizado

### Render
1. Settings → Custom Domain
2. Adicionar seu domínio
3. Configurar DNS (CNAME ou A record)

### Vercel
1. Project Settings → Domains
2. Add Domain
3. Seguir instruções de DNS

## 7. Banco de Dados - Migrations

As migrations já foram aplicadas no desenvolvimento. No primeiro deploy, o banco será criado automaticamente.

Se precisar aplicar migrations manualmente:
```bash
pnpm drizzle-kit generate
pnpm db:push
```

## 8. Troubleshooting

### Erro de conexão com banco
- Verificar DATABASE_URL está correta
- Verificar se banco aceita conexões externas
- Verificar SSL (adicionar `?ssl={"rejectUnauthorized":false}` na URL se necessário)

### Erro de autenticação
- Verificar JWT_SECRET está definido
- Limpar cookies do navegador
- Fazer logout e login novamente

### Build falha
- Verificar Node version (22+)
- Verificar pnpm está instalado
- Verificar todas dependências em package.json

## 9. Backup do Banco

### Exportar dados
```bash
mysqldump -h host -u user -p database > backup.sql
```

### Importar dados
```bash
mysql -h host -u user -p database < backup.sql
```

## 10. Monitoramento

- Render: Logs disponíveis no dashboard
- Vercel: Analytics e logs no dashboard
- Banco: Monitorar uso e performance no provider

## Suporte

Para problemas ou dúvidas, abra uma issue no repositório GitHub.
