class HomePage {
    visit() {
      cy.visit('/');
    }
  
    getProductList() {
      return cy.get('#product-list');
    }
  
    getProduct(id) {
      return cy.get(`[data-id="${id}"]`).closest('.card');
    }
  
    getQuantityInput(id) {
      return cy.get(`#quantity-${id}`);
    }
  
    setQuantity(id, quantity) {
      this.getQuantityInput(id).clear().type(quantity);
    }
  
    addToCartButton(id) {
      return cy.get(`[data-id="${id}"]`);
    }
  
    addToCart(id) {
      this.addToCartButton(id).click();
    }
  
    getSuccessMessage() {
      return cy.get('#alert-container');
    }
  
    getCartCount() {
      return cy.get('#cart-count');
    }
  }
  
  export default new HomePage();