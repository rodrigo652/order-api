API REST para gerenciamento de pedidos, permitindo criar, consultar, atualizar e deletar pedidos e seus respectivos itens.

---

# 🚀 Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- JWT para autenticação
- Swagger para documentação da API
- dotenv para variáveis de ambiente

---

# 📥 Instalação

Clone o repositório:

git clone https://github.com/seu-usuario/order-api.git

Entre na pasta do projeto:

cd order-api

Instale as dependências:

npm install

---

# ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=root  
DB_NAME=orderdb  
DB_CONNECTION_LIMIT=10  

JWT_SECRET=secret  
PORT=3000  

---

# ▶️ Executar o Projeto

node src/server.js

A API estará disponível em:

http://localhost:3000

---

# 📚 Documentação da API

A documentação interativa da API está disponível via Swagger:

http://localhost:3000/api-docs

---

# 🔐 Autenticação

Algumas rotas exigem autenticação via JWT.

1. Faça login na rota:

POST /login

2. Copie o token retornado.

3. No Swagger clique em **Authorize** e cole:

Bearer SEU_TOKEN

---

# 📡 Endpoints

Criar Pedido  
POST /order

Buscar Pedido por ID  
GET /order/:id

Listar Pedidos  
GET /order/list

Atualizar Pedido  
PUT /order/:id

Deletar Pedido  
DELETE /order/:id

---

# 📄 Exemplo de Request

{
 "numeroPedido": "v10089015vdb-01",
 "valorTotal": 10000,
 "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
 "items": [
  {
   "idItem": "2434",
   "quantidadeItem": 1,
   "valorItem": 1000
  }
 ]
}

A API realiza o mapeamento dos campos antes de salvar no banco de dados.

---

# 🗂 Estrutura do Projeto

src  
 ├── controllers  
 ├── services  
 ├── repository  
 ├── routes  
 ├── middleware  
 ├── config  
 └── server.js  

---

# 👨‍💻 Autor

Projeto desenvolvido como teste técnico de backend com Node.js.