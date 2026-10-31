
class RegisterPage {

  // ==========================================
  // 1. SELETORES DOS ELEMENTOS DA APLICACAO
  // ==========================================

  elements = {

    // Página inicial e acesso ao cadastro
    signupLoginButton: () => cy.get('a[href="/login"]'),

    // Formulário inicial de cadastro
    signupName: () => cy.get('[data-qa="signup-name"]'),
    signupEmail: () => cy.get('[data-qa="signup-email"]'),
    signupButton: () => cy.get('[data-qa="signup-button"]'),

    // Informações da conta
    title: () => cy.get('#id_gender1'),
    password: () => cy.get('#password'),
    day: () => cy.get('#days'),
    month: () => cy.get('#months'),
    year: () => cy.get('#years'),

    // Preferências de comunicação
    newsletter: () => cy.get('#newsletter'),
    offers: () => cy.get('#optin'),

    // Dados pessoais e endereço
    firstName: () => cy.get('#first_name'),
    lastName: () => cy.get('#last_name'),
    company: () => cy.get('#company'),
    address: () => cy.get('#address1'),
    country: () => cy.get('#country'),
    state: () => cy.get('#state'),
    city: () => cy.get('#city'),
    zipcode: () => cy.get('#zipcode'),
    mobileNumber: () => cy.get('#mobile_number'),

    // Botões e mensagens de retorno
    createAccountButton: () => cy.get('[data-qa="create-account"]'),
    accountCreatedMessage: () => cy.get('[data-qa="account-created"]'),
    continueButton: () => cy.get('[data-qa="continue-button"]'),

    // Mensagem de e-mail já cadastrado (TC5)
    existingEmailMessage: () =>
      cy.contains('Email Address already exist!'),

    // Exclusão da conta
    deleteAccountButton: () => cy.get('a[href="/delete_account"]'),
    accountDeletedMessage: () => cy.get('[data-qa="account-deleted"]')
  };


  // ==========================================
  // 2. METODOS DE INTERACAO
  // ==========================================

  // Acessa a página inicial e abre a tela de cadastro
  accessSignupPage() {

    // Abre a página inicial
    cy.visit('/');

    // Clica no botão Signup / Login
    this.elements.signupLoginButton().click();
  }


  // Preenche nome e e-mail no primeiro formulário
  fillSignupForm(name, email) {

    // Informa o nome
    this.elements.signupName().clear().type(name);

    // Informa o e-mail
    this.elements.signupEmail().clear().type(email);

    // Envia o formulário inicial
    this.elements.signupButton().click();
  }


  // Preenche as informações completas da conta
  fillAccountInformation(user) {

    // Seleciona o título e informa a senha
    this.elements.title().check();
    this.elements.password().type(user.password);

    // Seleciona a data de nascimento
    this.elements.day().select(user.day);
    this.elements.month().select(user.month);
    this.elements.year().select(user.year);

    // Marca as preferências de comunicação
    this.elements.newsletter().check();
    this.elements.offers().check();

    // Preenche os dados pessoais
    this.elements.firstName().type(user.firstName);
    this.elements.lastName().type(user.lastName);
    this.elements.company().type(user.company);

    // Preenche o endereço
    this.elements.address().type(user.address);
    this.elements.country().select(user.country);
    this.elements.state().type(user.state);
    this.elements.city().type(user.city);
    this.elements.zipcode().type(user.zipcode);
    this.elements.mobileNumber().type(user.mobileNumber);

    // Envia o formulário de criação da conta
    this.elements.createAccountButton().click();
  }


  // Continua após a criação da conta
  continueAfterCreation() {

    this.elements.continueButton().click();
  }


  // Exclui a conta criada
  deleteAccount() {

    this.elements.deleteAccountButton().click();
  }

}


// Exporta a classe para utilização nos testes
export default RegisterPage;
