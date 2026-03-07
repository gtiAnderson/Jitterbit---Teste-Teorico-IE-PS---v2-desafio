# Jitterbit - Order API Challenge

Esta é uma API RESTful robusta desenvolvida em Node.js para o gerenciamento de pedidos. O projeto foi construído para atender ao desafio técnico da Jitterbit, implementando o ciclo completo de operações (CRUD) com foco em segurança, escalabilidade e documentação.

##  Diferenciais do Projeto

- **Autenticação JWT**: Proteção de rotas utilizando JSON Web Token para garantir que apenas usuários autorizados gerenciem os pedidos.
- **Documentação Interativa (Swagger)**: Interface visual para teste de todos os endpoints diretamente pelo navegador.
- **Arquitetura Limpa**: Organização em camadas (Controllers, Middlewares, Routes e Models) para facilitar a manutenção.

##  Tecnologias Utilizadas

- **Node.js** com **Express.js**
- **MongoDB** com **Mongoose**
- **JWT**  para segurança
- **Swagger UI Express** para documentação
- **Dotenv** para gestão de variáveis de ambiente

## 📖 Documentação Interativa

Com o servidor rodando, acesse a interface do Swagger para testar a API:
 [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

 Utilize a rota `/auth/login` no Swagger para obter seu token e use o botão Authorize (cadeado) para liberar as demais rotas.

## ⚙️ Como executar o projeto localmente

###  Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- Uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) ou o MongoDB rodando localmente.

###  Instalação e Configuração

Clone este repositório:

```bash
git clone https://github.com/gtiAnderson/Jitterbit---Teste-Teorico-IE-PS---v2-desafio
cd Jitterbit---Teste-Teorico-IE-PS---v2-desafio
```

Instale as dependências:

```bash
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto conforme o exemplo abaixo:

```env
PORT=3000
MONGODB_URL=sua_url_do_mongodb
JWT_SECRET=sua_chave_secreta_jwt
```

### Executando a API

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

##  Endpoints (Rotas)

### Autenticação

- **POST** `/auth/login` - Gera o token JWT para acesso.

### Pedidos

- **POST** `/order` - Cria um novo pedido (com mapping automático).
- **GET** `/order/list` - Lista todos os pedidos cadastrados.
- **GET** `/order/:numeroPedido` - Retorna os dados de um pedido específico.
- **PUT** `/order/:numeroPedido` - Atualiza um pedido existente.
- **DELETE** `/order/:numeroPedido` - Deleta um pedido.

##  Autor

**Anderson Moreira Amaral**

- [LinkedIn](https://www.linkedin.com/in/andersonnmoreira/)
- [GitHub](https://github.com/gtiAnderson)