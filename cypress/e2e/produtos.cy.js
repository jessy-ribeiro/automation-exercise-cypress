
import ProductsPage from '../pages/ProductsPage';

// Instancia o Page Object
const productsPage = new ProductsPage();

describe('TC 8 - Verify All Products and Product Detail Page', () => {

  it('Deve exibir a lista de produtos e acessar os detalhes', () => {

    // Acessa a página de produtos
    productsPage.accessProductsPage();

    // Valida a lista de produtos
    productsPage.validateProductsList();

    // Abre os detalhes do primeiro produto
    productsPage.openFirstProduct();

    // Confirma que a área de informações está visível
    cy.get('.product-information').should('be.visible');

  });

});
