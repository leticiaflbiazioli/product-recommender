# Recomendador de Produtos RD Station

Este projeto contém a lógica de recomendação de produtos RD Station. Ele permite aos usuários selecionar suas preferências e funcionalidades desejadas, e então receber recomendações de produtos correspondentes.
A estrutura básica da aplicação está construída com React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js
- React Testing Library
- json-server
- Tailwind CSS

## Como executar

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: `nvm install 18.3 & nvm use 18.3`

3. Instale as dependências: `yarn install`

4. Entre na pasta _monorepo_: `cd monorepo`

5. Para instalar o projeto, execute o script `./install.sh`

6. Inicie a aplicação (frontend e backend juntos): `yarn start`

7. Irá abrir a página da aplicação no seu navegador e você pode testar todas as funcionalidades de recomendações de produtos

## Como rodar os testes

Você pode rodar os testes construídos na aplicação frontend.

1. Entre na pasta _frontend_: `cd frontend`

2. Execute os testes: `yarn test`

## Autor

Desenvolvido por Letícia Franzo de Lima Biazioli
