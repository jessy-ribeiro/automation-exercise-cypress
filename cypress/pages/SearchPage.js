
class SearchPage {

  // ==========================================
  // 1. SELETORES DOS ELEMENTOS DA APLICACAO
  // ==========================================

  elements = {

    // Botão Products do menu principal
    productsButton: () => cy.get('a[href="/products"]'),

    // Campo de pesquisa de produtos
    searchInput: () => cy.get('#search_product'),

    // Botão para executar a pesquisa
    searchButton: () => cy.get('#submit_search'),

    // Título da seção de resultados
    searchResultsTitle: () => cy.contains('h2', 'Searched Products'),

    // Lista de produtos encontrados
    productsList: () => cy.get('.features_items'),

    // Produtos exibidos na lista de resultados
    productItems: () => cy.get('.features_items .product-image-wrapper')
  };


  // ==========================================
  // 2. METODOS DE INTERACAO
  // ==========================================

  // Acessa a página de produtos
  accessProductsPage() {

    // Abre a página inicial
    cy.visit('/');

    // Clica no menu Products
    this.elements.productsButton().click();

    // Confirma que está na página de produtos
    cy.url().should('include', '/products');
  }


  // Realiza a pesquisa de um produto
  searchProduct(productName) {

    // Informa o nome do produto no campo de pesquisa
    this.elements.searchInput()
      .clear()
      .type(productName);

    // Executa a pesquisa
    this.elements.searchButton().click();
  }


  // Valida os resultados da pesquisa
  validateSearchResults(productName) {

    // Confirma que o título dos resultados está visível
    this.elements.searchResultsTitle()
      .should('be.visible');

    // Confirma que a lista de produtos está visível
    this.elements.productsList()
      .should('be.visible');

    // Confirma que pelo menos um produto foi encontrado
    this.elements.productItems()
      .should('have.length.greaterThan', 0);

    // Confirma que os resultados possuem o nome pesquisado
    this.elements.productItems()
      .should('contain.text', productName);
  }

}


// Exporta a classe para utilização nos testes
export default SearchPage;
