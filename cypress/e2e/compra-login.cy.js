
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('TC16 - Place Order: Login before Checkout', () => {
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  let usuario;
  let emailUsuario;

  // Prepara uma conta de teste antes de executar o cenário.
  before(() => {
    cy.fixture('usuario').then((dadosUsuario) => {
      usuario = dadosUsuario;

      // Gera um e-mail exclusivo para evitar conflito com cadastros anteriores.
      emailUsuario = `tc16_${Date.now()}@teste.com`;

      // Cria a conta que será utilizada no teste.
      registerPage.accessSignupPage();
      registerPage.fillSignupForm(usuario.name, emailUsuario);
      registerPage.fillAccountInformation(usuario);

      // Confirma que a conta foi criada.
      cy.contains('Account Created!').should('be.visible');

      registerPage.continueAfterCreation();

      // Confirma que o usuário está autenticado e realiza logout.
      loginPage.elements.loggedInMessage().should('be.visible');
      loginPage.logout();
    });
  });

  it('Deve realizar uma compra após fazer login', () => {
    // Etapa 1: realizar login com a conta criada.
    loginPage.accessLoginPage();
    loginPage.login(emailUsuario, usuario.password);

    loginPage.elements.loggedInMessage().should('be.visible');

    // Etapa 2: acessar os produtos e adicionar um produto ao carrinho.
    cartPage.accessProductsPage();
    cartPage.addFirstProductToCart();
    cartPage.accessCart();

    // Etapa 3: validar o carrinho e prosseguir para o checkout.
    cartPage.validateCart();
    cartPage.proceedToCheckout();

    // Etapa 4: validar as informações do checkout.
    checkoutPage.validateCheckout();

    // Etapa 5: adicionar um comentário ao pedido.
    checkoutPage.fillOrderComment(
      'Pedido realizado pelo teste automatizado TC16.'
    );

    // Etapa 6: prosseguir para a tela de pagamento.
    checkoutPage.proceedToPayment();

    // Etapa 7: preencher os dados de pagamento.
    const pagamento = {
      name: 'Usuario Teste QA',
      number: '4111111111111111',
      cvc: '123',
      expiryMonth: '12',
      expiryYear: '2028'
    };

    checkoutPage.fillPaymentInformation(pagamento);

    // Etapa 8: confirmar o pagamento e validar o pedido.
    checkoutPage.confirmPayment();
    checkoutPage.validateOrderSuccess();

    // Etapa 9: excluir a conta utilizada no teste.
    registerPage.deleteAccount();

    registerPage.elements.accountDeletedMessage().should('be.visible');
  });
});
