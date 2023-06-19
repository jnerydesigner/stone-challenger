![imagem do projeto stone](https://github.com/jnerydesigner/stone-challenger/blob/main/images/g7137.png)


# Desafio Stone

# Olá, eu sou o Jander Nery! 👋

### Aqui vamos dar início a configuração do projeto

1 - Baixe a Coleção do Insomnia ou Postman (Etapa não obrigatória, pois temos swagger)


 - [Coleção do Insomnia](https://github.com/jnerydesigner/stone-challenger/blob/main/insomnia_2023-06-19.json )

## Stack de desenvolvimento

### Premissas e Restrições
"Conforme Documento"

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


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/custumers/findall
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nenhum` | `vázio` | retorna todos os clientes inseridos |

```http
  GET /api/custumers/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string (uuid)` | retorna apenas um cliente inserido|

```http
  PUT /api/custumers/${id}
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string (uuid)` | atualiza apenas um cliente|
| `name` | `string`         | campo obrigatório|
| `docuement` | `number` | campo obrigatório|

```http
  POST /api/custumers
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string`         | campo obrigatório|
| `docuement` | `number` | campo obrigatório|


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Screenshots

![App Screenshot](https://github.com/jnerydesigner/stone-challenger/blob/main/images/output.gif)