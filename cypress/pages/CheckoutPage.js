class CheckoutPage {
  visit() {
    cy.visit('/checkout.html');
  }

  getFirstNameInput() {
    return cy.get('#first-name');
  }

  getLastNameInput() {
    return cy.get('#last-name');
  }

  getAddressInput() {
    return cy.get('#address');
  }

  getNumberInput() {
    return cy.get('#number');
  }

  getCepInput() {
    return cy.get('#cep');
  }

  getPhoneInput() {
    return cy.get('#phone');
  }

  getEmailInput() {
    return cy.get('#email');
  }

  fillDeliveryForm(data) {
    this.getFirstNameInput().type(data.nome);
    this.getLastNameInput().type(data.sobrenome);
    this.getAddressInput().type(data.endereco);
    this.getNumberInput().type(data.numero);
    this.getCepInput().type(data.cep);
    this.getPhoneInput().type(data.telefone);
    this.getEmailInput().type(data.email);
  }

  selectPaymentMethod(method) {
    switch (method) {
      case 'Cartão de Crédito':
        cy.get('#payment-card').check();
        break;
      case 'Boleto':
        cy.get('#payment-boleto').check();
        break;
      case 'Pix':
        cy.get('#payment-pix').check();
        break;
    }
  }

  acceptTerms() {
    cy.get('#terms').check();
  }

  finishOrderButton() {
    return cy.contains('button', 'Finalizar Pedido');
  }

  finishOrder() {
    this.finishOrderButton().click();
  }

  getErrorMessage() {
    return cy.get('#alert-container');
  }

  getSuccessMessage() {
    return cy.get('#alert-container.alert-success');
  }

  // Eu poderia utilizar cy.get('h1, h2').should('contain', 'STATUS DO PEDIDO') para validar a mensagem após finalizar o pedido, porem optei por validar a url.
  GetStatusOrder() {
    return cy.url().should('match', /\/status\.html\?orderId=\d+/);
  }
}

export default new CheckoutPage();