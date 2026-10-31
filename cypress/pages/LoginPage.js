
class LoginPage {

  // ==========================================
  // 1. SELETORES DOS ELEMENTOS DA APLICACAO
  // ==========================================

  // Centralizamos os seletores nesta propriedade.
  // Assim, se algum seletor mudar, alteramos somente aqui.
  elements = {

    // Botão Signup / Login da página inicial
    signupLoginButton: () => cy.get('a[href="/login"]'),

    // Campo de e-mail do formulário de login
    loginEmail: () => cy.get('[data-qa="login-email"]'),

    // Campo de senha do formulário de login
    loginPassword: () => cy.get('[data-qa="login-password"]'),

    // Botão que envia as credenciais
    loginButton: () => cy.get('[data-qa="login-button"]'),

    // Mensagem exibida quando as credenciais são inválidas
    loginErrorMessage: () =>
      cy.contains('Your email or password is incorrect!'),

    // Mensagem que identifica o usuário autenticado
    loggedInMessage: () =>
      cy.contains('Logged in as'),

    // Botão para sair da conta
    logoutButton: () =>
      cy.get('a[href="/logout"]')
  };


  // ==========================================
  // 2. METODOS DE INTERACAO COM A APLICACAO
  // ==========================================


  // ------------------------------------------
  // Acessar a página de login
  // ------------------------------------------

  accessLoginPage() {

    // Acessa diretamente a rota de login
    cy.visit('/login');

    // Aguarda o campo de e-mail ficar visível
    this.elements.loginEmail()
      .should('be.visible');

    // Aguarda o campo de senha ficar visível
    this.elements.loginPassword()
      .should('be.visible');
  }


  // ------------------------------------------
  // Realizar login
  // ------------------------------------------

  login(email, password) {

    // Limpa o campo e informa o e-mail recebido
    // pelo parâmetro email
    this.elements.loginEmail()
      .clear()
      .type(email);

    // Limpa o campo e informa a senha recebida
    // pelo parâmetro password
    this.elements.loginPassword()
      .clear()
      .type(password);

    // Clica no botão para enviar as credenciais
    this.elements.loginButton()
      .click();
  }


  // ------------------------------------------
  // Realizar logout
  // ------------------------------------------

  logout() {

    // Localiza o botão Logout e realiza o clique
    this.elements.logoutButton()
      .click();
  }

}


// ==========================================
// 3. EXPORTACAO DA CLASSE
// ==========================================

// Permite utilizar LoginPage.js em outros arquivos,
// como login.cy.js.
export default LoginPage;
