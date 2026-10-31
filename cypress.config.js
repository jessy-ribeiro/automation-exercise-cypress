
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',

    // Define explicitamente o arquivo de suporte do Cypress.
    supportFile: 'cypress/support/e2e.js',

    // Localização dos arquivos de teste.
    specPattern: 'cypress/e2e/**/*.cy.js',

    setupNodeEvents(on, config) {
      // Configuração do Mochawesome Reporter.
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    }
  },

  // Reporter utilizado para gerar os relatórios HTML.
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Automation Exercise - Relatorio de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  // Evidências das execuções.
  video: true,
  screenshotOnRunFailure: true
});
