# Entrega - Atividade 2º Semestre

## Documentação da API de Atendimento ao Cliente

## Índice

1. [Desenho de Arquitetura](#desenho-de-arquitetura)
2. [Criação dos Serviços](#criação-dos-serviços)
3. [Implementação de Status Codes (Melhores Práticas)](#implementação-de-status-codes-melhores-práticas)
4. [Conexão com MongoDB](#conexão-com-mongodb)
5. [Documentação da API](#documentação-da-api)


### Diagrama Arquitetural

O sistema de atendimento ao cliente utiliza uma arquitetura simples baseada em REST API para gerenciar dois serviços: Tickets de Atendimento e Cadastro de Atendentes. A arquitetura é dividida da seguinte forma:

- **Cliente:** Envia solicitações HTTP para a API.
- **API Gateway:** Recebe as requisições e encaminha para os serviços apropriados.
- **Serviços da API:** Implementam a lógica de negócios e interagem com o banco de dados MongoDB.
- **MongoDB:** Banco de dados NoSQL utilizado para persistir dados dos tickets e dos atendentes.

## 2. Criação dos Serviços

### Modelos de Dados para MongoDB



## Participantes
- **Hugo Ramoz Andrade** - 95475
- **João Victor Rossi**  - 95475
