![imagem do projeto stone](https://github.com/jnerydesigner/stone-challenger/blob/main/images/g7137.png)


# Desafio Stone

# Olá, eu sou o Jander Nery! 👋

### Aqui vamos dar início a configuração do projeto

1 - Baixe a Coleção do Insomnia ou Postman (Etapa não obrigatória, pois temos swagger)


 - [Coleção do Insomnia](https://github.com/jnerydesigner/stone-challenger/blob/main/insomnia_2023-06-19.json )

## Stack de desenvolvimento

### Premissas e Restrições
"Conforme Documento"

- [Documento Desafio Stone](https://github.com/jnerydesigner/stone-challenger/blob/main/docs/NodeJS_Backend_(1)_(1).pdf)



* NodeJS
* NestJS
* Axios
* Typescript (não obrigatório)

### Iniciando o Projeto

1 - Clone o repositório do Github

```bash
  git clone https://github.com/jnerydesigner/stone-challenger.git
```

2 - Rode o comando abaixo para entra na pasta do projeto

```bash
  cd stone-challenger
```

3 - Baixe as dependências do Projeto

```bash
  yarn install
```

4 - Rode o comando abaixo para iniciar o projeto (Tudo rodando com o docker).

```bash
  yarn docker:up
```

5 - Inclua as variáveis conforme documento do desafio, e substitua criando um arquivo .env

.env.example

```
  EMAIL_PERSONAL=
  GRANT_TYPE='client_credentials'
  CLIENT_ID=customers
  CLIENT_SECRET=
  URL_AUTH=https://accounts.seguros.vitta.com.br
  ENDPOINT_AUTH=auth/realms/careers/protocol/openid-connect/token
```


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/custumers/findall
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nenhum` | `vázio` | retorna todos os clientes inseridos |
|**Descrição do método**|
|Retorna todos os clients|
| |


#### Retorna apenas 1 item
```http
  GET /api/custumers/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string (uuid)` | retorna apenas um cliente inserido|
|**Descrição do método**|
|Retorna um client|
| |

#### Atualiza 1 item
```http
  PUT /api/custumers/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string (uuid)` | atualiza apenas um cliente|
| `name` | `string`         | campo obrigatório|
| `docuement` | `number` | campo obrigatório|
|**Descrição do método**|
|Atualiza o client e retorna o mesmo|
| |


#### Cria 1 item
```http
  POST /api/custumers
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string`         | campo obrigatório|
| `docuement` | `number` | campo obrigatório|
|**Descrição do método**|
|Cria um client e retorna o mesmo|
| |


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  yarn test
```


## Screenshots

![App Screenshot](https://github.com/jnerydesigner/stone-challenger/blob/main/images/output.gif)