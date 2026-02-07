# Macro Balance - Controle de Macronutrientes

Aplicativo web para controle e acompanhamento de macronutrientes diários com PWA (Progressive Web App).

## 🚀 Funcionalidades

- ✅ Autenticação local com email e senha
- ✅ Banco de dados com 73 alimentos brasileiros
- ✅ Calculadora automática de metas por peso e objetivo
- ✅ Dashboard com progresso visual de macros
- ✅ Adicionar refeições e calcular macros por peso
- ✅ Histórico com calendário
- ✅ PWA instalável (funciona como app nativo)
- ✅ Design responsivo (mobile e desktop)

## 📋 Requisitos

- Node.js 18+ 
- Banco de dados MySQL
- pnpm (gerenciador de pacotes)

## 🛠️ Instalação Local

### 1. Clonar o repositório

```bash
git clone <seu-repositorio>
cd macro_balance
```

### 2. Instalar dependências

```bash
# Instalar pnpm globalmente (se não tiver)
npm install -g pnpm

# Instalar dependências do projeto
pnpm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Banco de dados MySQL
DATABASE_URL=mysql://usuario:senha@localhost:3306/macro_balance

# JWT Secret (gere uma string aleatória segura)
JWT_SECRET=sua_chave_secreta_aqui_minimo_32_caracteres

# Porta do servidor (opcional, padrão 3000)
PORT=3000

# Node environment
NODE_ENV=development
```

### 4. Criar banco de dados

```bash
# Criar banco MySQL
mysql -u root -p -e "CREATE DATABASE macro_balance;"

# Executar migrations
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### 5. Popular banco com alimentos

```bash
node seed-foods.mjs
node seed-more-foods.mjs
```

### 6. Rodar em desenvolvimento

```bash
pnpm dev
```

Acesse: `http://localhost:3000`

## 🌐 Deploy no Render.com + PlanetScale

### Opção 1: Render + PlanetScale (Recomendado)

#### 1. Criar banco MySQL no PlanetScale

1. Acesse [planetscale.com](https://planetscale.com)
2. Crie uma conta gratuita
3. Crie um novo banco de dados
4. Copie a `DATABASE_URL` (formato: `mysql://user:pass@host/database?sslaccept=strict`)

#### 2. Preparar código no GitHub

1. Crie um repositório no GitHub
2. Faça push do código:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <seu-repositorio-github>
git push -u origin main
```

#### 3. Deploy no Render

1. Acesse [render.com](https://render.com)
2. Crie uma conta gratuita
3. Clique em "New +" → "Web Service"
4. Conecte seu repositório GitHub
5. Configure:
   - **Name**: macro-balance
   - **Environment**: Node
   - **Build Command**: `pnpm install && pnpm build`
   - **Start Command**: `pnpm start`
   - **Instance Type**: Free

6. Adicione variáveis de ambiente:
   - `DATABASE_URL`: (cole a URL do PlanetScale)
   - `JWT_SECRET`: (gere uma string aleatória de 32+ caracteres)
   - `NODE_ENV`: `production`

7. Clique em "Create Web Service"

#### 4. Executar migrations no banco

Após o deploy, acesse o Shell do Render e execute:

```bash
pnpm drizzle-kit migrate
node seed-foods.mjs
node seed-more-foods.mjs
```

### Opção 2: Render com banco PostgreSQL (Gratuito)

Se preferir usar PostgreSQL do Render (requer conversão do código):

1. No Render, crie um "PostgreSQL" database
2. Copie a `DATABASE_URL`
3. Será necessário ajustar o código para PostgreSQL (entre em contato)

## 📱 PWA (Progressive Web App)

O aplicativo pode ser instalado na tela inicial do celular:

### Android (Chrome)
1. Acesse o site
2. Clique no botão de download (⬇️) no header
3. Ou: Menu → "Adicionar à tela inicial"

### iOS (Safari)
1. Acesse o site
2. Toque no ícone de compartilhar
3. Selecione "Adicionar à Tela de Início"

## 🔐 Usuário de Teste

**Email**: teste@exemplo.com  
**Senha**: teste123

## 🏗️ Estrutura do Projeto

```
macro_balance/
├── client/              # Frontend React
│   ├── src/
│   │   ├── pages/      # Páginas (Home, Login, Goals, History)
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── hooks/      # Custom hooks
│   │   └── lib/        # Configurações (tRPC)
│   └── public/         # Assets estáticos e PWA
├── server/             # Backend Node.js + tRPC
│   ├── _core/         # Infraestrutura
│   ├── db.ts          # Queries do banco
│   └── routers.ts     # tRPC procedures
├── drizzle/           # Schema e migrations
└── shared/            # Tipos compartilhados
```

## 🧪 Testes

```bash
# Executar todos os testes
pnpm test

# Testes incluem:
# - Autenticação local
# - CRUD de alimentos
# - Metas e refeições
# - Cálculo de macros
```

## 📝 Scripts Disponíveis

```bash
pnpm dev          # Desenvolvimento
pnpm build        # Build para produção
pnpm start        # Rodar produção
pnpm test         # Executar testes
pnpm db:push      # Gerar e aplicar migrations
```

## 🐛 Troubleshooting

### Erro de conexão com banco

Verifique se:
- MySQL está rodando
- Credenciais do `.env` estão corretas
- Banco de dados foi criado

### PWA não instala

- Certifique-se de estar usando HTTPS (Render fornece automaticamente)
- Limpe o cache do navegador
- Verifique se o Service Worker está registrado (DevTools → Application → Service Workers)

### Build falha no Render

- Verifique se todas as variáveis de ambiente estão configuradas
- Certifique-se de que `pnpm` está sendo usado (não npm)

## 📄 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request.

## 📧 Suporte

Para dúvidas ou problemas, abra uma issue no GitHub.
