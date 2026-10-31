
class CartPage {

  // ==========================================
  // 1. SELETORES DOS ELEMENTOS DA APLICACAO
  // ==========================================

  elements = {

    // Botão Products do menu principal
    productsButton: () =>
      cy.get('a[href="/products"]').first(),

    // Primeiro produto da lista
    firstProduct: () =>
      cy.get('.features_items .product-image-wrapper').first(),

    // Botão Add to cart do primeiro produto
    addFirstProductButton: () =>
      cy.get('.features_items .product-image-wrapper')
        .first()
        .find('.add-to-cart')
        .first(),

    // Botão Continue Shopping da janela de confirmação
    continueShoppingButton: () =>
      cy.contains('.modal-footer button', 'Continue Shopping').first(),

    // Link para acessar o carrinho
    cartButton: () =>
      cy.get('a[href="/view_cart"]').first(),

    // Tabela com os produtos do carrinho
    cartTable: () =>
      cy.get('#cart_info_table'),

    // Produtos adicionados ao carrinho
    cartItems: () =>
      cy.get('#cart_info_table tbody tr'),

    // Botão para prosseguir ao checkout
    checkoutButton: () =>
      cy.contains('a', 'Proceed To Checkout').first()
  };


  // ==========================================
  // 2. METODOS DE INTERACAO
  // ==========================================

  // Acessa a página de produtos
  accessProductsPage() {

    cy.visit('/');

    this.elements.productsButton().click();

    cy.url().should('include', '/products');
  }


  // Adiciona o primeiro produto ao carrinho
  addFirstProductToCart() {

    this.elements.firstProduct().should('be.visible');

    this.elements.addFirstProductButton()
      .should('have.length', 1)
      .click({ force: true });

    this.elements.continueShoppingButton()
      .should('be.visible');
  }


  // Fecha a confirmação e acessa o carrinho
  accessCart() {

    this.elements.continueShoppingButton().click();

    this.openCartFromHeader();
  }


  // Acessa o carrinho pelo menu principal
  openCartFromHeader() {

    this.elements.cartButton().click();

    cy.url().should('include', '/view_cart');
  }


  // Valida os produtos adicionados ao carrinho
  validateCart() {

    this.elements.cartTable().should('be.visible');

    this.elements.cartItems()
      .should('have.length.greaterThan', 0);
  }


  // Inicia o processo de checkout
  proceedToCheckout() {

    this.elements.checkoutButton()
      .should('be.visible')
      .click();
  }

}


// Exporta a classe para utilização nos testes
export default CartPage;
