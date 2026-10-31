
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // URL principal da aplicação
    baseUrl: 'https://automationexercise.com',

    // Localização dos arquivos de teste
    specPattern: 'cypress/e2e/**/*.cy.js',

    // Arquivo de suporte carregado antes dos testes
    supportFile: 'cypress/support/e2e.js',

    setupNodeEvents(on, config) {
      // Configuração do relatório Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);

      return config;
    }
  },

  // Configuração do relatório
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Automation Exercise - Relatorio de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  // Evidências dos testes
  video: true,
  screenshotOnRunFailure: true
});
