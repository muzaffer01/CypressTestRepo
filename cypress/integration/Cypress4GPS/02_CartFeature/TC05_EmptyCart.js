//////////////////////////////////////////////////////////////////////
//Test Scenario: Reset Cart as EMPTY
//Visit Google Play Store
URL: https://store.google.com/cart
//////////////////////////////////////////////////////////////////////

describe('GoToCart', function() {
    
  // Validate Cart is Empty
  it('Visit Google Play Store GPS', function() {
      cy.emptyCartCommand()
   })
  })