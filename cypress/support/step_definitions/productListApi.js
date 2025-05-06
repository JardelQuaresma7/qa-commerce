import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let productsResponse;

When('eu faço uma requisição GET para listar produtos', () => {
  cy.request({
    method: 'GET',
    url: '/api/produtos',
    headers: {
      'Accept': 'application/json'
    }
  }).then((resp) => {
    productsResponse = resp;
  });
});

Then('o status da resposta de produtos deve ser {int}', (statusCode) => {
  expect(productsResponse.status).to.eq(statusCode);
});

Then('a resposta deve conter uma lista de produtos válidos', () => {
  expect(productsResponse.body).to.have.property('products');
  expect(productsResponse.body.products).to.be.an('array');
  expect(productsResponse.body.products.length).to.be.at.least(1);
  
  // Validar se o primeiro produto retorna id, nome, preço
  const firstProduct = productsResponse.body.products[0];
  expect(firstProduct).to.have.property('id');
  expect(firstProduct).to.have.property('name');
  expect(firstProduct).to.have.property('price');
});