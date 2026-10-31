
import SearchPage from '../pages/SearchPage';

// Instancia o Page Object de pesquisa
const searchPage = new SearchPage();

describe('TC 9 - Search Product', () => {

  // ==========================================
  // TC 9 - PESQUISA DE PRODUTOS
  // ==========================================

  it('Deve pesquisar um produto e exibir os resultados correspondentes', () => {

    // Define o produto que será pesquisado
    const productName = 'Blue Top';

    // Acessa a página de produtos
    searchPage.accessProductsPage();

    // Realiza a pesquisa
    searchPage.searchProduct(productName);

    // Valida os resultados encontrados
    searchPage.validateSearchResults(productName);

  });

});
