
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

// Instancia os Page Objects
const registerPage = new RegisterPage();
const loginPage = new LoginPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('TC 15 - Place Order: Register before Checkout', () => {

  it('Deve realizar uma compra cadastrando o usuário antes do checkout', () => {

    // Carrega os dados do usuário pela fixture
    cy.fixture('usuario').then((user) => {

      // Gera um e-mail exclusivo para esta execução
      const userEmail = `tc15_${Date.now()}@teste.com`;

      // ==========================================
      // 1. ADICIONAR PRODUTO AO CARRINHO
      // ==========================================

      // Acessa a página de produtos
      cartPage.accessProductsPage();

      // Adiciona o primeiro produto ao carrinho
      cartPage.addFirstProductToCart();

      // Acessa o carrinho
      cartPage.accessCart();

      // Confirma que o produto foi adicionado
      cartPage.validateCart();


      // ==========================================
      // 2. INICIAR CHECKOUT E REALIZAR CADASTRO
      // ==========================================

      // Clica em Proceed To Checkout
      cartPage.proceedToCheckout();

      // Acessa a opção Register / Login
      checkoutPage.accessRegisterLogin();

      // Preenche o primeiro formulário de cadastro
      registerPage.fillSignupForm(user.name, userEmail);

      // Preenche as informações completas da conta
      registerPage.fillAccountInformation(user);

      // Confirma que a conta foi criada
      registerPage.elements.accountCreatedMessage()
        .should('be.visible');

      // Continua após a criação da conta
      registerPage.continueAfterCreation();

      // Confirma que o usuário está autenticado
      loginPage.elements.loggedInMessage()
        .should('be.visible');


      // ==========================================
      // 3. RETORNAR AO CARRINHO E VALIDAR CHECKOUT
      // ==========================================

      // Acessa novamente o carrinho
      cartPage.openCartFromHeader();

      // Confirma que o produto continua no carrinho
      cartPage.validateCart();

      // Prossegue para o checkout
      cartPage.proceedToCheckout();

      // Valida os endereços e os produtos do pedido
      checkoutPage.validateCheckout();

      // Preenche o comentário do pedido
      checkoutPage.fillOrderComment(
        'Pedido realizado por automação de testes Cypress.'
      );


      // ==========================================
      // 4. REALIZAR O PAGAMENTO
      // ==========================================

      // Avança para a página de pagamento
      checkoutPage.proceedToPayment();

      // Dados fictícios utilizados somente no ambiente de teste
      const payment = {
        name: 'Usuario Teste QA',
        number: '4111111111111111',
        cvc: '123',
        expiryMonth: '12',
        expiryYear: '2028'
      };

      // Preenche os dados do cartão
      checkoutPage.fillPaymentInformation(payment);

      // Confirma o pagamento
      checkoutPage.confirmPayment();

      // Valida a confirmação do pedido
      checkoutPage.validateOrderSuccess();


      // ==========================================
      // 5. EXCLUIR A CONTA DE TESTE
      // ==========================================

      // Exclui a conta criada durante o teste
      registerPage.deleteAccount();

      // Confirma que a conta foi excluída
      registerPage.elements.accountDeletedMessage()
        .should('be.visible');

    });

  });

});
