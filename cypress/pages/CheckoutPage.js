
class CheckoutPage {

  // ==========================================
  // 1. SELETORES DOS ELEMENTOS DA APLICACAO
  // ==========================================

  elements = {

    // Opção para realizar cadastro ou login
    registerLoginButton: () =>
      cy.contains('a[href="/login"]', 'Register / Login'),

    // Endereço de entrega
    deliveryAddress: () =>
      cy.get('#address_delivery'),

    // Endereço de cobrança
    billingAddress: () =>
      cy.get('#address_invoice'),

    // Produtos do pedido
    orderItems: () =>
      cy.get('#cart_info tbody tr'),

    // Campo de comentário
    commentInput: () =>
      cy.get('textarea[name="message"]'),

    // Botão Place Order
    placeOrderButton: () =>
      cy.contains('a', 'Place Order').first(),

    // Campos do formulário de pagamento
    cardName: () =>
      cy.get('input[data-qa="name-on-card"]'),

    cardNumber: () =>
      cy.get('input[data-qa="card-number"]'),

    cardCvc: () =>
      cy.get('input[data-qa="cvc"]'),

    cardExpiryMonth: () =>
      cy.get('input[data-qa="expiry-month"]'),

    cardExpiryYear: () =>
      cy.get('input[data-qa="expiry-year"]'),

    // Botão de confirmação do pagamento
    payButton: () =>
      cy.get('#submit'),

    // Mensagem de confirmação
    orderSuccessMessage: () =>
      cy.contains('Congratulations! Your order has been confirmed!')
  };


  // ==========================================
  // 2. METODOS DE INTERACAO
  // ==========================================

  // Acessa a opção de cadastro ou login
  accessRegisterLogin() {

    this.elements.registerLoginButton()
      .should('be.visible')
      .click();

    cy.url().should('include', '/login');
  }


  // Valida as informações do checkout
  validateCheckout() {

    this.elements.deliveryAddress()
      .should('be.visible');

    this.elements.billingAddress()
      .should('be.visible');

    this.elements.orderItems()
      .should('have.length.greaterThan', 0);
  }


  // Preenche o comentário do pedido
  fillOrderComment(comment) {

    this.elements.commentInput()
      .should('be.visible')
      .clear()
      .type(comment);
  }


  // Avança para a página de pagamento
  proceedToPayment() {

    this.elements.placeOrderButton()
      .should('be.visible')
      .click();

    // Aguarda a navegação para a página de pagamento
    cy.location('pathname')
      .should('include', '/payment');

    // Confirma que o formulário de pagamento foi carregado
    this.elements.cardName()
      .should('be.visible');
  }


  // Preenche os dados do cartão
  fillPaymentInformation(payment) {

    this.elements.cardName()
      .clear()
      .type(payment.name);

    this.elements.cardNumber()
      .type(payment.number);

    this.elements.cardCvc()
      .type(payment.cvc);

    this.elements.cardExpiryMonth()
      .type(payment.expiryMonth);

    this.elements.cardExpiryYear()
      .type(payment.expiryYear);
  }


  // Confirma o pagamento
  confirmPayment() {

    this.elements.payButton()
      .should('be.visible')
      .click();
  }


  // Valida a confirmação do pedido
  validateOrderSuccess() {

    this.elements.orderSuccessMessage()
      .should('be.visible');
  }

}


// Exporta a classe
export default CheckoutPage;
