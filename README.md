<div align="center">
    <a href="https://www.trakto.io/">
        <img src="https://www.trakto.io/wp-content/uploads/2020/11/Favicon.svg" width="64" height="64" alt="MyFinance Icon">
    </a>
    <h1>
        Desafio Trakto
    </h1>
</div>

# Sobre este app

Este projeto consiste em uma aplicação front-end desenvolvida em Angular 2+ que consome a API da Trakto para atender à história do usuário que pode ser acessada [clicando aqui](https://github.com/trakto/desafio_frontend).

# Rodando a aplicação em ambiente local

## Dependências globais

Você precisará ter instalado em sua máquina:

1. Node.js v16 ou superios;
2. utilizar o [backend](https://github.com/nathaalves/my-finance-backend) desta aplicação.

## Clone no repositório

Faça o clone deste repositório para a sua máquina local, executando o seguinte comando:

```bash
git clone https://github.com/nathaalves/my-finance-frontend.git
```

## Dependências locais

Para instalar as dependências locais,execute o comando abaixo:

```bash
npm install
```

## Configuração do ambiente de desenvolvimento

Para criar o ambiente de desenvolvimento, utilize como base o arquivo `.env.example`, renomenando-o ou criando uma cópia como `.env`.

- `VITE_API_CONNECTION_BASE_URL`: é a URL utilizada para se conectar ao [backend](https://github.com/nathaalves/my-finance-backend). Por padrão, em ambiente de desenvolvimento, utilize o valor: `http://localhost:5000/`

## Rodar a aplicação

Para rodar a aplicação, execute o comando:

```bash
npm run dev
```

## Documentação

Para acessar a documentação, execute o comando:

```bash
npm run storybook
```

## Features

- [x] Cadastro do usuário;
- [x] Login na aplicação;
- [x] Logout;
- [x] Refresh token;
- [ ] Recuperação de senha;
- [ ] Memorização da senha;
- [x] Visualização das estatísticas de transações;
- [ ] Filtragem das estatísticas de transações por dia, semana, mês e periodo selecionado;
- [x] Criação de transações;
- [x] Edição de transaçoes;
- [x] Deleção de transações;
- [ ] Criação de categorias;
- [ ] Edição de categorias;
- [ ] Deleção de categorias;
- [ ] Trocar o tema da aplicação;
