# Jitterbit - Order API Challenge

Esta é uma API RESTful desenvolvida em Node.js para gerenciamento de pedidos. O projeto foi construído para atender ao desafio técnico da Jitterbit, contemplando a criação, leitura, atualização e exclusão (CRUD) de pedidos.

## Sobre o desafio
Criar uma API simples para gerenciar os pedidos. A API deve permitir a criação, leitura, atualização e exclusão de pedidos. 

### Criar endpoints para as seguintes operações: 
● Criar um novo pedido. (Obrigatório). URL: {http://localhost:3000/order} 

● Obter os dados do pedido passando por parâmetro na URL o número do pedido(Obrigatório) URL: {http://localhost:3000/order/v10089016vdb} 

● Listar todos os pedidos. (Opcional) 
URL: {http://localhost:3000/order/list} 

● Atualizar o pedido passando por parâmetro na url o número do pedido que será atualizado. (Opcional) URL: {http://localhost:3000/order/v10089016vdb} 

● Delete o pedido passando por parâmetro na url o número do pedido que será deletado.. (Opcional) URL: {http://localhost:3000/order/v10089016vdb} 

Armazenar os dados dos pedidos em um banco de dados (Mongodb, SQL ou PostgreSql). 


## 🚀 Tecnologias Utilizadas

- **Node.js** com **Express.js**
- **MongoDB** com **Mongoose**
- **Dotenv** para variáveis de ambiente

## ⚙️ Como executar o projeto localmente

### 1. Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou o MongoDB rodando localmente.

### 2. Instalação e Configuração

Clone este repositório:
```bash
git clone https://github.com/gtiAnderson/Jitterbit---Teste-Teorico-IE-PS---v2-desafio
```

Instale as dependências:
```bash
npm install
```

Configure as variáveis de ambiente:

Crie um arquivo chamado `.env` na raiz do projeto


Defina a porta do servidor (padrão: 3000).

### 3. Executando a API

Para iniciar o servidor em modo de desenvolvimento, execute:
```bash
npm run dev
```

O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

## 📌 Endpoints (Rotas)

- **POST** `/order` - Cria um novo pedido.
- **GET** `/order/list` - Lista todos os pedidos cadastrados.
- **GET** `/order/:numeroPedido` - Retorna os dados de um pedido específico.
- **PUT** `/order/:numeroPedido` - Atualiza um pedido existente.
- **DELETE** `/order/:numeroPedido` - Deleta um pedido.

## 👨‍💻 Autor

**Anderson Moreira Amaral**

- [LinkedIn](https://www.linkedin.com/in/andersonnmoreira/)