
describe('Validacao inicial - Automation Exercise', () => {

  it('Deve acessar a pagina inicial com sucesso', () => {

    cy.visit('/');

    // Valida se a URL corresponde ao site
    cy.url().should('include', 'automationexercise.com');

    // Valida se o corpo da pagina esta visivel
    cy.get('body').should('be.visible');

    // Valida se o link de login esta disponivel
    cy.get('a[href="/login"]').should('be.visible');

  });

});
