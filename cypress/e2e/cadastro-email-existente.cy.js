
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

// Instancia os Page Objects
const registerPage = new RegisterPage();
const loginPage = new LoginPage();

// Variáveis que armazenarão os dados da conta
let userEmail;
let userPassword;

describe('TC 5 - Register User with existing email', () => {

  // ==========================================
  // PREPARACAO DO AMBIENTE DE TESTE
  // ==========================================

  before(() => {

    // Carrega os dados da fixture
    cy.fixture('usuario').then((user) => {

      // Gera um e-mail exclusivo para esta execução
      userEmail = `tc5_${Date.now()}@teste.com`;

      // Armazena a senha para utilizar na limpeza
      userPassword = user.password;

      // Acessa a página de cadastro
      registerPage.accessSignupPage();

      // Preenche o primeiro formulário
      registerPage.fillSignupForm(user.name, userEmail);

      // Preenche os dados completos da conta
      registerPage.fillAccountInformation(user);

      // Confirma que a conta foi criada
      registerPage.elements.accountCreatedMessage()
        .should('be.visible');

      // Continua após a criação da conta
      registerPage.continueAfterCreation();

      // Confirma que o usuário está autenticado
      loginPage.elements.loggedInMessage()
        .should('be.visible');

      // Realiza logout para preparar o próximo cadastro
      loginPage.logout();

      // Confirma que o usuário foi direcionado
      // para a página de login após sair da conta
      cy.url().should('include', '/login');

      // Confirma que o formulário de login está disponível
      loginPage.elements.loginEmail()
        .should('be.visible');

    });

  });


  // ==========================================
  // TC 5 - CADASTRO COM EMAIL EXISTENTE
  // ==========================================

  it('Deve impedir o cadastro utilizando um e-mail já existente', () => {

    // Acessa novamente a tela de cadastro
    registerPage.accessSignupPage();

    // Carrega os dados necessários para a tentativa
    cy.fixture('usuario').then((user) => {

      // Tenta cadastrar novamente utilizando o mesmo e-mail
      registerPage.fillSignupForm(user.name, userEmail);

    });

    // Valida a mensagem de e-mail já cadastrado
    registerPage.elements.existingEmailMessage()
      .should('be.visible')
      .and('contain.text', 'Email Address already exist!');

  });


  // ==========================================
  // LIMPEZA DOS DADOS DE TESTE
  // ==========================================

  after(() => {

    // Acessa a página de login
    loginPage.accessLoginPage();

    // Realiza login com a conta criada no início
    loginPage.login(userEmail, userPassword);

    // Confirma que o usuário está autenticado
    loginPage.elements.loggedInMessage()
      .should('be.visible');

    // Exclui a conta utilizada no teste
    registerPage.deleteAccount();

    // Confirma que a conta foi excluída
    registerPage.elements.accountDeletedMessage()
      .should('be.visible');

  });

});
