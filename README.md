# AutomaÃ§Ã£o de Testes Web â€” Automation Exercise

Projeto de automaÃ§Ã£o de testes end-to-end desenvolvido com **Cypress e JavaScript**, utilizando boas prÃ¡ticas de organizaÃ§Ã£o, modularizaÃ§Ã£o e reutilizaÃ§Ã£o de cÃ³digo.

O objetivo Ã© validar funcionalidades essenciais da aplicaÃ§Ã£o [Automation Exercise](https://automationexercise.com/), contemplando cenÃ¡rios de cadastro, autenticaÃ§Ã£o, consulta de produtos, assinatura e realizaÃ§Ã£o de compras.

## Tecnologias utilizadas

- **Cypress:** framework de automaÃ§Ã£o de testes end-to-end.
- **JavaScript:** linguagem utilizada no desenvolvimento dos testes.
- **Node.js e npm:** ambiente de execuÃ§Ã£o e gerenciamento de dependÃªncias.
- **Page Object Model (POM):** padrÃ£o utilizado para organizaÃ§Ã£o e reutilizaÃ§Ã£o dos elementos e aÃ§Ãµes das pÃ¡ginas.
- **Fixtures:** armazenamento de dados utilizados nos testes.
- **Mochawesome Reporter:** geraÃ§Ã£o de relatÃ³rios HTML.
- **GitHub Actions:** automaÃ§Ã£o da execuÃ§Ã£o dos testes por integraÃ§Ã£o contÃ­nua (CI).

## CenÃ¡rios automatizados

Foram implementados 10 casos de teste, conforme os cenÃ¡rios oficiais do Automation Exercise.

| Caso | CenÃ¡rio |
|---|---|
| TC1 | Register User |
| TC2 | Login User with correct email and password |
| TC3 | Login User with incorrect email and password |
| TC4 | Logout User |
| TC5 | Register User with existing email |
| TC8 | Verify All Products and product detail page |
| TC9 | Search Product |
| TC10 | Verify Subscription in home page |
| TC15 | Place Order: Register before Checkout |
| TC16 | Place Order: Login before Checkout |

## Estrutura do projeto

```text
automation-exercise-cypress/
â”‚
â”œâ”€â”€ .github/
â”‚   â””â”€â”€ workflows/
â”‚       â””â”€â”€ cypress.yml
â”‚
â”œâ”€â”€ cypress/
â”‚   â”œâ”€â”€ e2e/
â”‚   â”œâ”€â”€ fixtures/
â”‚   â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ support/
â”‚   â”œâ”€â”€ reports/
â”‚   â””â”€â”€ videos/
â”‚
â”œâ”€â”€ .gitignore
â”œâ”€â”€ cypress.config.js
â”œâ”€â”€ package.json
â”œâ”€â”€ package-lock.json
â””â”€â”€ README.md
```

### OrganizaÃ§Ã£o e modularizaÃ§Ã£o

- **e2e:** arquivos com os cenÃ¡rios de testes automatizados.
- **fixtures:** dados utilizados durante a execuÃ§Ã£o dos testes.
- **pages:** classes Page Objects, responsÃ¡veis pelos seletores e aÃ§Ãµes das pÃ¡ginas.
- **support:** configuraÃ§Ãµes de suporte e registro do Mochawesome.
- **reports:** relatÃ³rios HTML gerados apÃ³s a execuÃ§Ã£o.
- **videos:** gravaÃ§Ãµes das execuÃ§Ãµes realizadas pelo Cypress.
- **.github/workflows:** configuraÃ§Ã£o do pipeline de integraÃ§Ã£o contÃ­nua.

## InstalaÃ§Ã£o e configuraÃ§Ã£o

### PrÃ©-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado (para clonar o repositÃ³rio).

### 1. Clonar o repositÃ³rio

```bash
git clone https://github.com/jessy-ribeiro/automation-exercise-cypress.git
```

Entre na pasta do projeto:

```bash
cd automation-exercise-cypress
```

### 2. Instalar as dependÃªncias

```bash
npm install
```

### 3. Executar os testes

Para executar todos os testes no terminal:

```bash
npm test
```

Para abrir a interface grÃ¡fica do Cypress:

```bash
npm run test:open
```

## RelatÃ³rios de testes

O projeto utiliza o **Mochawesome Reporter** para gerar relatÃ³rios HTML com os resultados das execuÃ§Ãµes.

Os relatÃ³rios sÃ£o configurados para serem armazenados em:

```text
cypress/reports/
```

O arquivo principal do relatÃ³rio Ã©:

```text
cypress/reports/index.html
```

O relatÃ³rio permite consultar os cenÃ¡rios executados, resultados, duraÃ§Ã£o e detalhes das execuÃ§Ãµes.

## IntegraÃ§Ã£o contÃ­nua â€” GitHub Actions

O projeto possui integraÃ§Ã£o com GitHub Actions por meio do arquivo:

```text
.github/workflows/cypress.yml
```

A automaÃ§Ã£o estÃ¡ configurada para executar os testes em:

- Push nas branches `main` e `master`.
- Pull Requests direcionados a essas branches.
- ExecuÃ§Ã£o manual pelo GitHub Actions.

Durante o pipeline, sÃ£o realizadas as seguintes etapas:

1. Download do cÃ³digo do repositÃ³rio.
2. ConfiguraÃ§Ã£o do ambiente Node.js.
3. InstalaÃ§Ã£o das dependÃªncias com `npm ci`.
4. ExecuÃ§Ã£o dos testes automatizados.
5. Armazenamento dos relatÃ³rios e evidÃªncias da execuÃ§Ã£o.

Os relatÃ³rios, vÃ­deos e screenshots sÃ£o disponibilizados como artefatos do GitHub Actions, com retenÃ§Ã£o configurada para **90 dias**.

## Resultados da execuÃ§Ã£o local

Na validaÃ§Ã£o da suÃ­te completa, foram obtidos os seguintes resultados:

- Arquivos de teste executados: 10.
- Testes aprovados: 12.
- Testes reprovados: 0.
- Tempo de execuÃ§Ã£o: aproximadamente 4 minutos.

<sub>Resultados referentes Ã  execuÃ§Ã£o local realizada durante o desenvolvimento do projeto.</sub>

## ConsideraÃ§Ãµes finais

Este projeto foi desenvolvido com foco na aplicaÃ§Ã£o de boas prÃ¡ticas de automaÃ§Ã£o de testes, organizaÃ§Ã£o de cÃ³digo, reutilizaÃ§Ã£o de componentes e integraÃ§Ã£o contÃ­nua.

A implementaÃ§Ã£o busca demonstrar conhecimentos em Quality Assurance (QA), testes end-to-end, JavaScript, Cypress, Page Object Model, validaÃ§Ã£o funcional e geraÃ§Ã£o de relatÃ³rios automatizados.
