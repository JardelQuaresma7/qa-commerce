import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/HomePage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';

Given('que adicionei um produto ao carrinho', () => {
  HomePage.visit();
  HomePage.setQuantity('1', '1');
  HomePage.addToCart('3'); // Optei por usar o terceiro produto Ecobag
  HomePage.getSuccessMessage().should('be.visible');
});

Given('estou na página do carrinho', () => {
  CartPage.visit();
  CartPage.getCartItems().should('have.length.at.least', 1); 
});

When('clico no botão "Ir para o Checkout"', () => {
  CartPage.proceedToCheckout();
});

When('preencho os dados de entrega', (dataTable) => {
  const data = {};
  dataTable.hashes().forEach(row => {
    data[row.campo] = row.valor;
  });

  CheckoutPage.fillDeliveryForm({
    nome: data.nome,
    sobrenome: data.sobrenome,
    endereco: data.endereço,
    numero: data.número,
    cep: data.cep,
    telefone: data.telefone,
    email: data.email
  });
});

When('seleciono o método de pagamento {string}', (method) => {
  CheckoutPage.selectPaymentMethod(method);
});

When('aceito os termos e condições', () => {
  CheckoutPage.acceptTerms();
});

When('clico no botão "Finalizar Pedido"', () => {
  CheckoutPage.finishOrder();
});

Then('devo ver uma mensagem de sucesso', () => {
  cy.url().should('match', /\/status\.html\?orderId=\d+/);
});