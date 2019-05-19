

/*
Test Scenario: Validate Cart
Visit Google Play Store
URL: https://store.google.com/cart
*/


describe('Validate Cart Content', function(){

    context('Display Selected Product', function(){
        
        it('Visit Cart Page', function() {
            cy.visit('https://store.google.com/cart')
            cy.url().should('include', '/cart')
            cy.title().should('include', 'Shopping Cart - Google Store')
            cy.get('.shopping-cart-title-padding').should('include', 'Shopping cart')
            // Add Items Validation

        
        })  
        
        
  
  
  
    })
  })