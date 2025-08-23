# 📝 GoTask - EM DESENVOLVIMENTO

Uma aplicação moderna de gerenciamento de tarefas construída com Angular, que utiliza o padrão Kanban para organização visual e intuitiva das suas atividades diárias.

## 🚀 Sobre o Projeto

O GoTask é uma aplicação web desenvolvida para auxiliar no gerenciamento de tarefas pessoais e profissionais. Com uma interface limpa e intuitiva, você pode:

- ✅ Criar, editar e excluir tarefas
- 🔄 Organizar tarefas em colunas Kanban (A fazer, Fazendo, Concluído)
- 🖱️ Arrastar e soltar tarefas entre diferentes status
- 💬 Adicionar comentários às tarefas
- 📱 Interface responsiva para desktop e mobile

<!-- Espaço reservado para imagem da tela inicial -->
**[Imagem da Tela Principal - Adicionar screenshot aqui]**

## 🛠️ Tecnologias Utilizadas

- **Angular 20** - Framework principal
- **Angular CDK** - Para funcionalidades de drag-and-drop
- **TypeScript** - Linguagem de programação
- **Phosphor Icons** - Biblioteca de ícones
- **CSS3** - Estilização

[//]: # (- **RxJS** - Programação reativa)

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)
- [Angular CLI](https://angular.io/cli) (versão 20 ou superior)

## 🚀 Como Iniciar o Projeto

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd GoTask
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
npm start
# ou
ng serve
```

### 4. Acesse a aplicação
Abra seu navegador e acesse: `http://localhost:4200`

A aplicação será recarregada automaticamente quando você modificar os arquivos do código-fonte.

<!-- Espaço reservado para imagem da interface Kanban -->
**[Imagem do Board Kanban - Adicionar screenshot aqui]**

## 🎯 Funcionalidades Principais

### Gerenciamento de Tarefas
- **Criar Tarefa**: Clique no botão "Criar uma tarefa" para adicionar novas atividades
- **Visualizar Detalhes**: Clique em qualquer tarefa para ver informações completas
- **Editar Tarefa**: Modifique título, descrição e outros detalhes
- **Excluir Tarefa**: Remova tarefas que não são mais necessárias

### Sistema Kanban
- **A fazer**: Tarefas planejadas que ainda não foram iniciadas
- **Fazendo**: Tarefas em andamento
- **Concluído**: Tarefas finalizadas

### Drag & Drop
Arraste e solte tarefas entre as diferentes colunas para alterar seu status de forma intuitiva.

<!-- Espaço reservado para imagem da criação/edição de tarefa -->
**[Imagem do Modal de Criação/Edição - Adicionar screenshot aqui]**


Os arquivos compilados serão salvos na pasta `dist/`. Esta versão é otimizada para performance e velocidade.

## 🎨 Estrutura do Projeto

```
src/
├── app/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas da aplicação
│   ├── layout/        # Layouts (modal, base)
│   ├── enums/         # Enumerações
│   └── ...
├── assets/            # Imagens e recursos estáticos
└── styles.css        # Estilos globais
```
