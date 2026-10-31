
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',

    specPattern: 'cypress/e2e/**/*.cy.js',

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  },

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Automation Exercise - Relatorio de Testes',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  video: true,
  screenshotOnRunFailure: true
});
