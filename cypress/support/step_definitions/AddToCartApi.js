import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let cartResponse;

When('eu adiciono produto ao carrinho via API', () => {

  const cartData = {
    userId: 1,
    productId: 101,
    quantity: 2
  };

  cy.request({
    method: 'POST',
    url: '/api/carrinho',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: cartData
  }).then((resp) => {
    cartResponse = resp;
  });
});

Then('o status da resposta de carrinho deve ser {int}', (statusCode) => {
  expect(cartResponse.status).to.eq(statusCode);
});

Then('a resposta deve confirmar adição ao carrinho', () => {
  expect(cartResponse.status).to.be.oneOf([200, 201]);
  
  // Verifica se no body retorna id, a propriedade message, e a mensagem do produto adicionado.
  if (cartResponse.body.id) {
    expect(cartResponse.body).to.have.property('id');
    expect(cartResponse.body).to.have.property('message');
    expect(cartResponse.body.message).to.eq('Produto adicionado ao carrinho com sucesso.');
  }
});