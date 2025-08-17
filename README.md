# 🚀 Desafio Backend — Gestão de Usuários

Este repositório contém um desafio de **desenvolvimento backend** com foco em **cadastro e gestão de usuários**.  
A ideia é construir uma **API REST** simples e escalável, que pode servir como base para futuras funcionalidades.

## 🏗 Tecnologias

- **Node.js + Express**
- **Drizzle ORM** (acesso ao banco com segurança de tipos)
- **Zod** (validação de dados)
- **Banco de Dados:** PostgreSQL, SQLite ou MongoDB (preferência para PostgreSQL/SQLite)
- **Docker Compose** para orquestração do backend e banco de dados

## 🧠 Entidade User

- `id` (UUID, gerado automaticamente)
- `name` (string, obrigatório)
- `email` (string, obrigatório, único)
- `createdAt` (data de criação automática)
- `updatedAt` (data de atualização automática)

## 🔗 Endpoints da API

| Método | Rota         | Descrição                |
| ------ | ------------ | ------------------------ |
| POST   | `/users`     | Criar um novo usuário    |
| GET    | `/users`     | Listar todos os usuários |
| GET    | `/users/:id` | Obter um usuário por ID  |
| PUT    | `/users/:id` | Atualizar um usuário     |
| DELETE | `/users/:id` | Deletar um usuário       |

## ✅ Regras

- Todas as entradas devem ser validadas com **Zod**
  - `body` no **POST** e **PUT**
  - `params` no **GET/:id**, **PUT/:id** e **DELETE/:id**

## 📦 Como rodar o projeto

1. Clone o repositório
2. Configure as variáveis de ambiente
3. Suba os containers com Docker Compose
4. Acesse a API em `http://localhost:3000`

## Observações de desenvolvimento

O husky talvez de problema com o vistest referente ao ESM, para isso tem que garantir que o husky ira usar a versão 22.x do Node
