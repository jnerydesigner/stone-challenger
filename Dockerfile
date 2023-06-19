FROM node:18 as build

WORKDIR /app


COPY package.json yarn.lock /app/

# Instalar as dependências
RUN yarn install

# Copiar o código fonte
COPY . /app

# Compilar o projeto
RUN yarn build

# Porta em que o servidor estará exposto
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "yarn", "start:prod" ]