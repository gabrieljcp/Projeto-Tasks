# TASKS

## Índice

- [Introdução](#introdução)
- [Requisitos](#requisitos)
- [Instalação e Configuração](#instalação-e-configuração)
  - [Backend (Laravel)](#backend-laravel)
  - [Frontend (ReactJS)](#frontend-reactjs)
- [Uso](#uso)
  - [Endpoints do Backend](#endpoints-do-backend)
  - [Componentes do Frontend](#componentes-do-frontend)
- [Exemplos](#exemplos)
- [Suporte](#suporte)

## Introdução

O gerenciador de tarefas é uma ferramenta com funções bastante estratégicas para o desenvolvimento de tarefas pessoais, estabelecendo prioridades, deixando as relações, os compromissos mais transparentes e ajudando na obtenção da produtividade, sem estourar prazos ou perder algo por causa do esquecimento.

## Requisitos

- PHP >= 8.1.10
- Node.js >= 20.10.0
- MySQL >= 5.7 ou outro banco de dados compatível
- Composer >= 2.4.1
- NPM ou Yarn

## Instalação e Configuração

### Backend (Laravel)

1. **Clonar o repositório:**
   ```bash
   git clone url-do-repositório-backend
   
2. **Instalar dependências:**
   ```bash
   composer install

3. **Configurar o ambiente:**
   Copie `env.example` para `.env` e ajuste as variáveis de ambiente
   ```bash
   cp .env.example .env
4. **Gerar chave do aplicativo:**
   ```bash
   php artisan key:generate
5. **Migrar o banco de dados:**
   ```bash
   php artisan migrate
6. **Seeders(Opcional)**
   ```bash
   php artisan db:seed

### Frontend (ReactJS)

1. **Clonar o repositório:**
   ```bash
   git clone url-do-repositorio-frontend

2. **Instalar dependências**
   ```bash
   npm install
   ou
   yarn install
     
3. **Configurar o ambiente:**
   Ajuste as variáveis no arquivo `.env`

4. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm start
   ou
   yarn start

### Uso
Este sistema foi desenvolvido para fornecer uma solução abrangente, integrando funcionalidades backend robustas com uma experiência de usuário fluida no frontend. A seguir, descrevemos como interagir com nossos principais endpoints e componentes React.Descrição dos principais endpoints, incluindo métodos HTTP, parâmetros esperados e formatos de resposta.

**Endpoints do Backend**
Nossa API fornece uma série de endpoints que facilitam a gestão de tarefas, autenticação de usuários e mais. Veja abaixo uma visão geral:

GET /api/tasks: Retorna uma lista de todas as tarefas. Não requer parâmetros.
POST /api/tasks: Cria uma nova tarefa. Requer um corpo de requisição com title e description.
PUT /api/tasks/{id}: Atualiza a tarefa especificada pelo ID. Requer title e description no corpo da requisição.
DELETE /api/tasks/{id}: Exclui a tarefa especificada pelo ID.Este sistema foi desenvolvido para fornecer uma solução abrangente, integrando funcionalidades backend robustas com uma experiência de usuário fluida no frontend. A seguir, descrevemos como interagir com nossos principais endpoints e componentes React.Descrição dos principais endpoints, incluindo métodos HTTP, parâmetros esperados e formatos de resposta.

As respostas são tipicamente retornadas em formato JSON, incluindo detalhes como o código de status HTTP e, para requisições bem-sucedidas, os dados solicitados ou uma mensagem de sucesso.

**Autenticação**
Utilizamos o JWT
Para que serve o JWT?
O JWT (JSON Web Token) é uma forma de autenticação que permite que um servidor verifique a identidade de um usuário sem precisar armazenar informações sobre ele. Ele é um padrão aberto para representar dados de forma compacta e segura entre as partes.

### Componentes do Frontend
No frontend, utilizamos React para construir componentes interativos que se comunicam com o backend:

TaskList: Exibe uma lista de tarefas, buscando dados diretamente do endpoint /api/tasks.
TaskForm: Permite ao usuário criar ou editar tarefas, interagindo com os endpoints /api/tasks para criação e /api/tasks/{id} para atualização.

### Exemplos
Para adicionar uma nova tarefa utilizando nosso frontend:

Navegue até a tela inicial e clique no primeiro card, onde tem o item de adicionar.
Preencha os campos Título, Descrição e Status.
Clique em Criar para enviar a tarefa para o backend.
No backend, para buscar todas as tarefas disponíveis, faça uma requisição GET para /api/tasks.

### Suporte
Se você encontrar dificuldades ou tiver perguntas sobre como utilizar nossos endpoints ou componentes, não hesite em entrar em contato. Auxilio em todas as etapas de integração e uso do sistema.
