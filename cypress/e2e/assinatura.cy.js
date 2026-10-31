
import SubscriptionPage from '../pages/SubscriptionPage';

// Instancia o Page Object de assinatura
const subscriptionPage = new SubscriptionPage();

describe('TC 10 - Verify Subscription in home page', () => {

  it('Deve realizar a assinatura na página inicial com sucesso', () => {

    // Gera um e-mail exclusivo para evitar conflitos
    const email = `assinatura_${Date.now()}@teste.com`;

    // Acessa a página inicial
    subscriptionPage.accessHomePage();

    // Realiza a assinatura
    subscriptionPage.subscribe(email);

    // Valida a mensagem de sucesso
    subscriptionPage.validateSuccessMessage();

  });

});
