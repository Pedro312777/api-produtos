# 🛒 API de Produtos

A **API de Produtos** é uma API REST desenvolvida com **Node.js**, **Express** e **PostgreSQL**, criada como projeto de estudos em desenvolvimento Back-End. A aplicação permite realizar operações de cadastro, consulta, edição e exclusão de produtos, utilizando um banco de dados relacional para persistência das informações.

O projeto utiliza uma **arquitetura em camadas**, separando responsabilidades entre rotas, controllers, services, middlewares e conexão com o banco de dados.

## 📋 Funcionalidades

- Cadastro de produtos;
- Consulta de todos os produtos;
- Consulta de produto por ID;
- Atualização de produtos;
- Exclusão de produtos;
- Operações CRUD;
- Validação dos dados recebidos;
- Tratamento de erros;
- Persistência dos dados utilizando PostgreSQL;
- API REST;
- Organização do código utilizando arquitetura em camadas;
- Configuração de dados sensíveis através de variáveis de ambiente.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- JavaScript (ES6+)
- REST API
- `pg`
- Git
- GitHub
- Visual Studio Code

## 📂 Estrutura do Projeto

```text
api-produtos/
│
├── controllers/
│   └── produtos.controller.js
│
├── database/
│   └── connection.js
│
├── middlewares/
│   ├── error.middleware.js
│   └── produtos.middlewares.js
│
├── routes/
│   └── produtos.routes.js
│
├── services/
│   └── produtos.service.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

> 🔒 O arquivo `.env` contém configurações locais e informações sensíveis e não é enviado ao GitHub.

## 🔗 Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca um produto pelo ID |
| `POST` | `/produtos` | Cadastra um novo produto |
| `PUT` | `/produtos/:id` | Atualiza um produto |
| `DELETE` | `/produtos/:id` | Exclui um produto |

## ⚙️ Como Executar o Projeto

### Clone o repositório

```bash
git clone https://github.com/Pedro312777/api-produtos.git
```

### Entre na pasta

```bash
cd api-produtos
```

### Instale as dependências

```bash
npm install
```

### Configure o PostgreSQL

Crie um banco de dados chamado:

```text
api_produtos
```

Depois, crie a tabela `produtos` com as colunas necessárias para armazenar os produtos.

### Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as informações do seu banco de dados.

Exemplo:

```env
DB_USER=
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
DB_NAME=api_produtos
```

### Execute a API

```bash
node server.js
```

A API será executada na porta `3000`.

## 🎯 Objetivo do Projeto

O objetivo deste projeto foi colocar em prática conhecimentos de desenvolvimento **Back-End**, criando uma API REST integrada a um banco de dados PostgreSQL.

Durante o desenvolvimento, foram praticados conceitos de **Node.js, Express, APIs REST, CRUD, PostgreSQL, validação de dados, tratamento de erros e arquitetura em camadas**.

## 👨‍💻 Autor

**José Pedro da Silva Morais**

🎓 Graduado em Análise e Desenvolvimento de Sistemas.

---

## 📫 Contato

- LinkedIn: https://www.linkedin.com/in/josepedro-dev/
- Email: josepedrointeligencia@gmail.com

---

⭐ Caso tenha gostado do projeto, deixe uma estrela no repositório!
