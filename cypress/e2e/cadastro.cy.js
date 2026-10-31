
import RegisterPage from '../pages/RegisterPage';

// Instancia a classe que contém os seletores e ações
const registerPage = new RegisterPage();

describe('TC 1 - Register User', () => {

  it('Deve cadastrar um novo usuario e excluir a conta', () => {

    // Carrega os dados de teste armazenados no arquivo JSON
    cy.fixture('usuario').then((user) => {

      // Gera um e-mail único a cada execução
      // Isso evita conflitos com cadastros anteriores
      const email = `qa_${Date.now()}@teste.com`;

      // ETAPA 1: Acessa a tela de cadastro
      registerPage.accessSignupPage();

      // ETAPA 2: Preenche nome e e-mail
      registerPage.fillSignupForm(user.name, email);

      // ETAPA 3: Verifica se o formulário completo foi apresentado
      cy.contains('Enter Account Information')
        .should('be.visible');

      // ETAPA 4: Preenche os dados da conta
      registerPage.fillAccountInformation(user);

      // ETAPA 5: Valida se a conta foi criada
      registerPage.elements.accountCreatedMessage()
        .should('be.visible')
        .and('contain.text', 'Account Created!');

      // ETAPA 6: Continua após a criação da conta
      registerPage.continueAfterCreation();

      // ETAPA 7: Exclui a conta criada
      registerPage.deleteAccount();

      // ETAPA 8: Valida se a conta foi excluída
      registerPage.elements.accountDeletedMessage()
        .should('be.visible')
        .and('contain.text', 'Account Deleted!');

    });

  });

});
