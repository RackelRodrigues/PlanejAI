# Planejai

## 📝 Descrição do Projeto

O **Planejai** é uma aplicação web feita em React que serve basicamente para te ajudar a planejar viagens de forma mais organizada. A ideia é que você consiga fazer simulações e visualizar como a viagem pode ficar, tanto em questão de tempo quanto de estrutura, para facilitar as decisões antes de viajar.

Ele resolve um problema comum que é deixar informações de viagem espalhadas em vários lugares, tipo notas, planilhas ou até na cabeça mesmo. Aqui a proposta é centralizar tudo em um único lugar, com uma navegação simples e uma experiência mais fluida, como uma SPA.

O foco do projeto é justamente esse lado de planejamento: você consegue pensar melhor na viagem, simular cenários e ir organizando as informações de forma mais clara. Hoje ele já tem essa base de simulação e visualização de resultados, além de suporte a tema claro e escuro.

E a ideia pra frente é ir evoluindo com coisas como adicionar mais detalhes da viagem, talvez custos, tempo mais preciso, integração com APIs de clima e mapas, pra deixar o planejamento mais completo.

## 🌐 Demonstração (Live)

A versão em produção pode ser acessada aqui:

[🔗 Acessar Demo](https://seu-deploy-aqui.com)

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
- GitHub: [github.com/seu-usuario](https://github.com/RackelRodrigues)
- LinkedIn: [linkedin.com/in/seu-usuario](https://www.linkedin.com/in/seu-usuario)

## 📄 Licença

Todos os direitos reservados.

---
