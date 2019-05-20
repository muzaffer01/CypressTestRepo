/*
Test Scenario: Reset Cart as EMPTY
Visit Google Play Store
URL: https://store.google.com/cart
*/

describe('GoToCart', function() {
    
  // Validate Cart is Empty
  it('Visit Google Play Store GPS', function() {
      cy.visit('https://store.google.com/cart')
      cy.title().should('include', 'Shopping Cart - Google Store')
      cy.get('.your-cart-is-empty').should('include', 'Your cart is empty')

      // If any item exists in cart, then remove items from cart, till cart is empty
      cy.get('.cart-remove-button > .button-text').click()

    })
  })