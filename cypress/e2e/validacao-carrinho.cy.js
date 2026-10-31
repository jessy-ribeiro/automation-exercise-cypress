
import CartPage from '../pages/CartPage';

// Instancia o Page Object do carrinho
const cartPage = new CartPage();

describe('Validação inicial do carrinho', () => {

  it('Deve adicionar um produto e visualizar o carrinho', () => {

    // Acessa a página de produtos
    cartPage.accessProductsPage();

    // Adiciona o primeiro produto ao carrinho
    cartPage.addFirstProductToCart();

    // Acessa o carrinho
    cartPage.accessCart();

    // Confirma que o produto foi adicionado
    cartPage.validateCart();

  });

});
