import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/HomePage';

Given('que estou na página inicial', () => {
  HomePage.visit();
});

When('eu seleciono a quantidade {string} do produto {string}', (quantity, productId) => {
  HomePage.setQuantity(productId, quantity);
});

When('clico no botão "Adicionar ao Carrinho"', () => {
  HomePage.addToCart('1'); // Pegando o primeiro produto da página
});

Then('devo ver a mensagem {string}', (message) => {
  HomePage.getSuccessMessage().should('be.visible').and('contain', message);
});

Then('o número de itens no carrinho deve ser atualizado', () => {
  HomePage.getCartCount().should('be.visible').and('not.contain', '0');
});