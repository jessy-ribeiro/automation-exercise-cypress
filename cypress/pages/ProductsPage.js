
class ProductsPage {

  // ==========================================
  // 1. SELETORES DOS ELEMENTOS
  // ==========================================

  elements = {

    // Botão Products do menu principal
    productsButton: () => cy.get('a[href="/products"]'),

    // Título da página de produtos
    productsTitle: () => cy.contains('h2', 'All Products'),

    // Lista de produtos
    productsList: () => cy.get('.features_items'),

    // Primeiro produto da lista
    firstProduct: () =>
      cy.get('.features_items .product-image-wrapper').first(),

    // Botão View Product do primeiro produto
    firstViewProductButton: () =>
      cy.get('.features_items .product-image-wrapper')
        .first()
        .contains('View Product')
  };


  // ==========================================
  // 2. METODOS DE INTERACAO
  // ==========================================

  // Acessa a página de produtos
  accessProductsPage() {

    // Abre a página inicial
    cy.visit('/');

    // Acessa a página de produtos
    this.elements.productsButton().click();

    // Confirma a navegação
    cy.url().should('include', '/products');
  }


  // Valida a lista de produtos
  validateProductsList() {

    // Confirma o título da página
    this.elements.productsTitle().should('be.visible');

    // Confirma que a lista está visível
    this.elements.productsList().should('be.visible');

    // Confirma que existe pelo menos um produto
    this.elements.firstProduct().should('be.visible');
  }


  // Abre os detalhes do primeiro produto
  openFirstProduct() {

    // Clica no botão View Product
    this.elements.firstViewProductButton().click();

    // Confirma que a página de detalhes foi carregada
    cy.url().should('include', '/product_details/');
  }

}


// Exporta a classe
export default ProductsPage;
