//////////////////////////////////////////////////////////////////////
//Test Scenario: Validate Cart
//Visit Google Play Store
URL: https://store.google.com/cart
//////////////////////////////////////////////////////////////////////

describe('Validate Cart Items', function(){

    context('Cart displays All Products selected', function(){
        
        // Navigate to Cart Page and Validate Product info
        it('Visit Cart Page', function() {
            cy.visit('/cart')
            cy.url().should('include', '/cart')
            cy.title().should('include', 'Shopping Cart - Google Store')
            cy.get('.shopping-cart-title-padding').should('include', 'Shopping cart')

            // Product Validation in Cart
            cy.get('[href="/product/pixel_3a"] > .roboto-header-text-9').contains("Pixel 3a")
            cy.get('.button-text').contains("Remove")

            //Click Guest Checkout
            cy.get('div[jscontroller="eoSTdf"] > .button-shadow > .text-center').click()
        })  
    })
  })