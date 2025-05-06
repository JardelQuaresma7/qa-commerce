class CartPage {
    visit() {
      cy.visit('/cart.html');
    }
  
    getCartList() {
      return cy.get('#cart-list');
    }
  
    getCartItems() {
      return cy.get('#cart-list .cart-item');
    }
  
    getCheckoutButton() {
      return cy.contains('a', 'Ir para o Checkout');
    }
  
    proceedToCheckout() {
      this.getCheckoutButton().click();
    }
  
    getTotalProducts() {
      return cy.get('#total-products');
    }
  
    getTotalWithShipping() {
      return cy.get('#total-with-shipping');
    }
  }
  
  export default new CartPage();