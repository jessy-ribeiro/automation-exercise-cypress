# Automação de Testes Web — Automation Exercise

Projeto de automação de testes end-to-end desenvolvido com **Cypress e JavaScript**, utilizando boas práticas de organização, modularização e reutilização de código.

O objetivo é validar funcionalidades essenciais da aplicação [Automation Exercise](https://automationexercise.com/), contemplando cenários de cadastro, autenticação, consulta de produtos, assinatura e realização de compras.

## Tecnologias utilizadas

- **Cypress:** framework de automação de testes end-to-end.
- **JavaScript:** linguagem utilizada no desenvolvimento dos testes.
- **Node.js e npm:** ambiente de execução e gerenciamento de dependências.
- **Page Object Model (POM):** padrão utilizado para organização e reutilização dos elementos e ações das páginas.
- **Fixtures:** armazenamento de dados utilizados nos testes.
- **Mochawesome Reporter:** geração de relatórios HTML.
- **GitHub Actions:** automação da execução dos testes por integração contínua (CI).

## Cenários automatizados

Foram implementados 10 casos de teste, conforme os cenários oficiais do Automation Exercise.

| Caso | Cenário |
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
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   ├── pages/
│   ├── support/
│   ├── reports/
│   └── videos/
│
├── .gitignore
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

### Organização e modularização

- **e2e:** arquivos com os cenários de testes automatizados.
- **fixtures:** dados utilizados durante a execução dos testes.
- **pages:** classes Page Objects, responsáveis pelos seletores e ações das páginas.
- **support:** configurações de suporte e registro do Mochawesome.
- **reports:** relatórios HTML gerados após a execução.
- **videos:** gravações das execuções realizadas pelo Cypress.
- **.github/workflows:** configuração do pipeline de integração contínua.

## Instalação e configuração

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado (para clonar o repositório).

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd automation-exercise-cypress
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar os testes

Para executar todos os testes no terminal:

```bash
npm test
```

Para abrir a interface gráfica do Cypress:

```bash
npm run test:open
```

## Relatórios de testes

O projeto utiliza o **Mochawesome Reporter** para gerar relatórios HTML com os resultados das execuções.

Os relatórios são configurados para serem armazenados em:

```text
cypress/reports/
```

O arquivo principal do relatório é:

```text
cypress/reports/index.html
```

O relatório permite consultar os cenários executados, resultados, duração e detalhes das execuções.

## Integração contínua — GitHub Actions

O projeto possui integração com GitHub Actions por meio do arquivo:

```text
.github/workflows/cypress.yml
```

A automação está configurada para executar os testes em:

- Push nas branches `main` e `master`.
- Pull Requests direcionados a essas branches.
- Execução manual pelo GitHub Actions.

Durante o pipeline, são realizadas as seguintes etapas:

1. Download do código do repositório.
2. Configuração do ambiente Node.js.
3. Instalação das dependências com `npm ci`.
4. Execução dos testes automatizados.
5. Armazenamento dos relatórios e evidências da execução.

Os relatórios, vídeos e screenshots são disponibilizados como artefatos do GitHub Actions, com retenção configurada para **90 dias**.

## Resultados da execução local

Na validação da suíte completa, foram obtidos os seguintes resultados:

- Arquivos de teste executados: 10.
- Testes aprovados: 12.
- Testes reprovados: 0.
- Tempo de execução: aproximadamente 4 minutos.

<sub>Resultados referentes à execução local realizada durante o desenvolvimento do projeto.</sub>

## Considerações finais

Este projeto foi desenvolvido com foco na aplicação de boas práticas de automação de testes, organização de código, reutilização de componentes e integração contínua.

A implementação busca demonstrar conhecimentos em Quality Assurance (QA), testes end-to-end, JavaScript, Cypress, Page Object Model, validação funcional e geração de relatórios automatizados.