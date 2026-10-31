
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

// Instancia os Page Objects
const loginPage = new LoginPage();
const registerPage = new RegisterPage();

// Variáveis que armazenarão os dados da conta de teste
let userEmail;
let userPassword;

describe('Testes de Login - Automation Exercise', () => {

  // ==========================================
  // PREPARACAO DO AMBIENTE DE TESTE
  // ==========================================

  before(() => {

    // Carrega os dados da fixture
    cy.fixture('usuario').then((user) => {

      // Gera um e-mail exclusivo para esta execução
      userEmail = `login_${Date.now()}@teste.com`;

      // Armazena a senha para reutilizar nos cenários
      userPassword = user.password;

      // Cria uma conta válida para os testes de login
      registerPage.accessSignupPage();

      // Preenche nome e e-mail
      registerPage.fillSignupForm(user.name, userEmail);

      // Preenche os dados restantes da conta
      registerPage.fillAccountInformation(user);

      // Confirma que a conta foi criada
      registerPage.elements.accountCreatedMessage()
        .should('be.visible');

      // Continua após a criação da conta
      registerPage.continueAfterCreation();

      // Confirma que o usuário está autenticado
      loginPage.elements.loggedInMessage()
        .should('be.visible');

      // Realiza logout para iniciar os testes deslogado
      loginPage.logout();

      // Confirma que voltou para a página de login
      cy.url().should('include', '/login');

    });

  }); // FECHAMENTO CORRETO DO BEFORE


  // ==========================================
  // TC 2 - LOGIN COM CREDENCIAIS VALIDAS
  // ==========================================

  it('TC 2 - Deve realizar login com e-mail e senha corretos', () => {

    // Acessa a página de login
    loginPage.accessLoginPage();

    // Informa as credenciais válidas
    loginPage.login(userEmail, userPassword);

    // Verifica se o usuário foi autenticado
    loginPage.elements.loggedInMessage()
      .should('be.visible')
      .and('contain.text', 'Logged in as');

  });


  // ==========================================
  // TC 3 - LOGIN COM CREDENCIAIS INVALIDAS
  // ==========================================

  it('TC 3 - Deve apresentar erro ao informar senha incorreta', () => {

    // Acessa a página de login
    loginPage.accessLoginPage();

    // Tenta entrar com a senha incorreta
    loginPage.login(userEmail, 'SenhaIncorreta123');

    // Verifica a mensagem de erro apresentada
    loginPage.elements.loginErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Your email or password is incorrect!');

  });


  // ==========================================
  // TC 4 - LOGOUT
  // ==========================================

  it('TC 4 - Deve realizar logout com sucesso', () => {

    // Acessa a página de login
    loginPage.accessLoginPage();

    // Realiza login com credenciais válidas
    loginPage.login(userEmail, userPassword);

    // Confirma que o usuário está autenticado
    loginPage.elements.loggedInMessage()
      .should('be.visible');

    // Realiza o logout
    loginPage.logout();

    // Verifica se foi direcionado para a página de login
    cy.url().should('include', '/login');

    // Confirma que o formulário de login está disponível
    loginPage.elements.loginEmail()
      .should('be.visible');

  });


  // ==========================================
  // LIMPEZA DOS DADOS DE TESTE
  // ==========================================

  after(() => {

    // A conta foi criada exclusivamente para esta suíte.
    // Realiza login novamente para excluir a conta ao final.
    loginPage.accessLoginPage();

    // Realiza login com as credenciais válidas
    loginPage.login(userEmail, userPassword);

    // Aguarda a confirmação de autenticação
    loginPage.elements.loggedInMessage()
      .should('be.visible');

    // Acessa a opção de exclusão da conta
    registerPage.deleteAccount();

    // Confirma que a conta foi excluída
    registerPage.elements.accountDeletedMessage()
      .should('be.visible');

  });

});
