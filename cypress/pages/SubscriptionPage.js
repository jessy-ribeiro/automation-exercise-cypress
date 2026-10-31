
class SubscriptionPage {

  // ==========================================
  // 1. SELETORES DOS ELEMENTOS DA APLICACAO
  // ==========================================

  elements = {

    // Título da seção de assinatura
    subscriptionTitle: () =>
      cy.contains('h2', 'Subscription'),

    // Campo de e-mail da assinatura
    emailInput: () =>
      cy.get('#susbscribe_email'),

    // Botão para realizar a assinatura
    subscribeButton: () =>
      cy.get('#subscribe'),

    // Mensagem de confirmação
    successMessage: () =>
      cy.get('.alert-success')
  };


  // ==========================================
  // 2. METODOS DE INTERACAO
  // ==========================================

  // Acessa a página inicial
  accessHomePage() {

    cy.visit('/');
  }


  // Realiza a assinatura
  subscribe(email) {

    // Localiza a seção de assinatura
    this.elements.subscriptionTitle()
      .scrollIntoView()
      .should('be.visible');

    // Informa o endereço de e-mail
    this.elements.emailInput()
      .clear()
      .type(email);

    // Clica no botão Subscribe
    this.elements.subscribeButton().click();
  }


  // Valida a mensagem de sucesso
  validateSuccessMessage() {

    this.elements.successMessage()
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!');
  }

}


// Exporta a classe para utilização nos testes
export default SubscriptionPage;
