# Entrega - Atividade 2º Semestre

## Documentação da API de Atendimento ao Cliente

## Índice

1. [Desenho de Arquitetura](#desenho-de-arquitetura)
2. [Criação dos Serviços](#criação-dos-serviços)
3. [Implementação de Status Codes (Melhores Práticas)](#implementação-de-status-codes-melhores-práticas)
4. [Conexão com MongoDB](#conexão-com-mongodb)
5. [Documentação da API](#documentação-da-api)


## Diagrama Arquitetural
![Tickets_Atendimentos_UML](https://github.com/user-attachments/assets/30126d53-808b-45c0-9ffd-7ffd279e030e)


O sistema de atendimento ao cliente utiliza uma arquitetura simples baseada em REST API para gerenciar dois serviços: Tickets de Atendimento e Cadastro de Atendentes. A arquitetura é dividida da seguinte forma:

- **Cliente:** Envia solicitações HTTP para a API.
- **API Gateway:** Recebe as requisições e encaminha para os serviços apropriados.
- **Serviços da API:** Implementam a lógica de negócios e interagem com o banco de dados MongoDB.
- **MongoDB:** Banco de dados NoSQL utilizado para persistir dados dos tickets e dos atendentes.
Criação dos Serviços 

### Modelos de Dados para MongoDB 

### Ticket 
     { 
        "_id": "ObjectId", 
        "identificador_pessoa": "string", 
        "titulo_ticket": "string", 
        "telefone": "string" 
      }

### Atendente 

     { 

       "_id": "ObjectId", 

       "identificador_pessoa": "string", 

       "identificador_departamento": "string", 

       "identificador_setor": "string" 

      }

## Endpoints da API 

### Tickets de Atendimento 

- ``GET /tickets: Lista todos os tickets. ``

- `POST /tickets: Cria um novo ticket.`

- `GET /tickets/{id}: Recupera um ticket específico por ID. `

- `PUT /tickets/{id}: Atualiza um ticket existente por ID.`

- `DELETE /tickets/{id}: Deleta um ticket por ID.`

### Cadastro de Atendentes 

- `GET /atendentes: Lista todos os atendentes.` 

- `POST /atendentes: Cria um novo atendente. `

- `GET /atendentes/{id}: Recupera um atendente específico por ID.` 

- `PUT /atendentes/{id}: Atualiza um atendente existente por ID.`

- `DELETE /atendentes/{id}: Deleta um atendente por ID.`

## Implementação de Status Codes (Melhores Práticas) 

### Status Codes 

- *201 Created: Retornado quando um recurso é criado com sucesso.*

- *400 Bad Request: Retornado quando a entrada é inválida ou incompleta.*

- *404 Not Found: Retornado quando um recurso não é encontrado.*

- *200 OK: Retornado para requisições bem-sucedidas.* 

- *204 No Content: Retornado quando uma operação de deleção é bem-sucedida e não retorna conteúdo.* 

## Exemplos de Requisições e Respostas 

### Criar Ticket 

         { 

            "identificador_pessoa": "123", 

               "titulo_ticket": "Problema com login", 

                 "telefone": "123456789" 

          }   

 

          { 

               "id": "ObjectId", 

               "identificador_pessoa": "123", 

                "titulo_ticket": "Problema com login", 

                 "telefone": "123456789" 

          } 
 
## Conexão com MongoDB 

### Implementação de Conexão 

A conexão com o MongoDB é realizada utilizando o mongoose para Node.js. A seguir está um exemplo de configuração de conexão: 

      const mongoose = require('mongoose'); 
      
       
      
      mongoose.connect('mongodb://localhost:27017/atendimento', { 
      
        useNewUrlParser: true, 
      
        useUnifiedTopology: true 
      
      }); 
      
       
      
      const db = mongoose.connection; 
      
      db.on('error', console.error.bind(console, 'connection error:')); 
      
      db.once('open', () => { 
      
        console.log('Connected to MongoDB'); 
      
      }); 
      
### Modelos MongoDB 
Os modelos são definidos utilizando o mongoose. Exemplos de definições de modelos: 
      
  
      
      const mongoose = require('mongoose'); 
      
      
      const ticketSchema = new mongoose.Schema({ 
      
        identificador_pessoa: { type: String, required: true }, 
      
        titulo_ticket: { type: String, required: true }, 
      
        telefone: { type: String, required: true } 
      
      }); 
      
      const Ticket = mongoose.model('Ticket', ticketSchema); 
      
      module.exports = Ticket; 
      
      Modelo de Atendente 
           
      const mongoose = require('mongoose');      
      
      const atendenteSchema = new mongoose.Schema({ 
      
        identificador_pessoa: { type: String, required: true }, 
      
        identificador_departamento: { type: String, required: true }, 
      
        identificador_setor: { type: String, required: true } 
      
      }); 
        const Atendente = mongoose.model('Atendente', atendenteSchema);
        module.exports = Atendente; 

## Operações CRUD & Testes de Integração 

As operações CRUD (Create, Read, Update, Delete) são implementadas nos controladores correspondentes para cada serviço. Além ds testes de integração são realizados para garantir que as operações de CRUD funcionam corretamente e que os dados são persistidos no MongoDB

## Documentação da API 
A documentação da API inclui informações sobre os endpoints, métodos HTTP, parâmetros esperados, exemplos de requisições e respostas, e códigos de status retornados. Para cada endpoint, a documentação deve fornecer exemplos detalhados de requisições e respostas, incluindo parâmetros e corpos de solicitação e respostas esperadas, bem como códigos de status retornados. 



## Participantes
- **Hugo Ramoz Andrade** - 95475
- **João Victor Rossi**  - 95475
