# Macro Balance - TODO

## Sistema de Autenticação Local
- [x] Adicionar campos de senha na tabela users
- [x] Criar procedure para cadastro de usuário (email + senha)
- [x] Criar procedure para login (email + senha)
- [x] Implementar hash de senha com bcrypt
- [x] Criar página de cadastro
- [x] Criar página de login
- [x] Atualizar página inicial para redirecionar não autenticados
- [x] Testar fluxo completo de cadastro e login (15/15 testes passando)

## Ajustes de Interface
- [x] Remover informações de usuário/painel de controle do header
- [x] Remover explicações sobre objetivos na página de metas
- [x] Simplificar interface mantendo apenas funcionalidades essenciais

## Correção de Bug - Login
- [x] Corrigir erro de renderização no Home.tsx (setState durante render)
- [x] Mover redirecionamento para useEffect
- [x] Testar fluxo completo de login

## PWA (Progressive Web App)
- [x] Criar manifest.json com metadados do app
- [x] Gerar ícones para diferentes tamanhos (192x192 e 512x512)
- [x] Implementar Service Worker para cache offline
- [x] Adicionar botão "Instalar App" na interface
- [x] Testar instalação no celular (pronto para teste)

## Deploy GitHub + Render
- [ ] Converter banco de dados de MySQL para PostgreSQL
- [ ] Atualizar schema Drizzle para PostgreSQL
- [ ] Criar arquivo .env.example
- [ ] Criar README.md com instruções de deploy
- [ ] Configurar scripts de build para produção
- [ ] Testar migração do banco

## Correções para Deploy no Render
- [x] Remover patch do wouter no package.json
- [ ] Simplificar configuração do pnpm
- [ ] Criar novo ZIP sem problemas de dependências
- [ ] Testar deploy no Render
