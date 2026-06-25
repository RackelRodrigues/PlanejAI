# Planejai

> Aplicação web moderna para simulações e visualização de resultados com navegação SPA e modo claro/escuro.

## 🚀 Título do Projeto

**Planejai**

## 📝 Descrição do Projeto

O **Planejai** é um projeto de desenvolvimento web em React criado para apresentar uma interface limpa de simulações, resultados e histórico de uso. A aplicação resolve o problema de organizar e navegar entre páginas de resultado e histórico sem perder o estado visual do tema.

- Objetivo: disponibilizar uma experiência responsiva com navegação fluida em single-page app.
- Problema resolvido: facilitar o acesso a resultados de simulações e registros históricos de forma rápida e intuitiva.
- Público-alvo: recrutadores, estudantes e profissionais de front-end, além de usuários que desejam um protótipo moderno de painel de controle.

## 🌐 Demonstração (Live)

A versão em produção pode ser acessada aqui:

[🔗 Acessar Demo](https://seu-deploy-aqui.com)

> Atualize o link acima com a URL do deploy quando estiver disponível.

## 🧰 Tecnologias Utilizadas

- React 19
- Vite
- TypeScript
- Tailwind CSS 4
- React Router DOM
- lucide-react
- @fontsource/inter
- ESLint
- Prettier
- Context API

## ✨ Funcionalidades

- Navegação entre rotas com `react-router-dom`
- Layout com header persistente
- Suporte a tema claro e tema escuro
- Página de resultado de simulações
- Página de histórico de simulações
- Configuração profissional de lint e formatação

## ▶️ Como Executar o Projeto Localmente

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/planejai.git
cd planejai

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev
```

Acesse o servidor local exibido no terminal (geralmente `http://localhost:5173`).

Para build de produção:

```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

- `src/` — código-fonte principal da aplicação
  - `App.tsx` — ponto de entrada do React
  - `main.tsx` — inicialização do app e `ThemeProvider`
  - `router.tsx` — configuração de rotas
  - `components/` — componentes visuais e layout
  - `context/` — contexto para alternância de tema
  - `styles/` — estilos globais e temas
- `public/` — arquivos estáticos
- `package.json` — dependências e scripts
- `vite.config.ts` — configuração do Vite

## 🖼️ Imagens ou Preview

> Insira screenshots ou GIFs do projeto abaixo para reforçar a apresentação.

![Preview do Planejai](./public/preview.png)

> Se preferir, substitua pelo caminho de imagens reais do projeto.

## 👤 Autor

- **Rackel Rodrigues**
- GitHub: [github.com/seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [linkedin.com/in/seu-usuario](https://www.linkedin.com/in/seu-usuario)

## 📄 Licença

Todos os direitos reservados.

---
