

/*
Test Scenario: Search for Product, Select Options and Add to Cart
Visit Google Play Store
URL: https://store.google.com/
*/


describe('CheckForProduct', function(){

  context('Product Selection', function(){
      
      it('Visit Google Play Store GPS', function() {
          cy.visit('https://store.google.com/')
          cy.title().should('include', 'Google Store for Google Made Devices & Accessories')
      })  
      
      it('Select Product Type (PHONE) from Navigation Bar', function() {
          cy.get('.products > button[data-category-id="phones"]').click()
      })

      it('Select Specific Phone (PIXEL 3a) from the Product List', function() {
          cy.get('[data-state="active"][style=""] > .subnav-container > .left-side > [data-column="1"] > .subcategory > ul > :nth-child(2) > .product-link').click()
      })

      it('Product Details Page - Click the BUY Button', function() {
          cy.get('.price-and-button-container > .button-wrap > div > .button > .button-text').click()
      })

      it('Select Phone SIZE', function() {
          cy.get(':nth-child(1) > .mqn-lobby__card__inner > .mqn-lobby__card__meta > .mqn-lobby__card__buttons > .mqn-button').click()
    
      })

      it('Select Phone CARRIER', function() {
          cy.get(':nth-child(1) > .mqn-h-cards__card__inner > .mqn-h-cards__card__meta > .mqn-h-cards__card__headline').click()
      })

      it('Select Phone COLOR', function() {
          cy.wait (2000)
          cy.get(':nth-child(1) > .mqn-lobby-swatch__card__inner > .mqn-lobby-swatch__card__meta > .mqn-lobby-swatch__card__buttons > .mqn-button').click()
      })

      it('Select Phone SERVICES - CLICK NEXT', function() {
          cy.wait (2000)
          cy.get('[jsaction="JIbuQc:NPBnCf"] > .mdc-button > .mdc-button__label').should('contain','Next').click()
      })

      it('REVIEW the Phone Choices Selected and Add to Cart', function() {
         cy.wait (2000)
         cy.get('.cta-button-container > .mdc-button > .mdc-button__label').should('contain','Add to cart').click()
        })

        it('Suggested Accessories (skip) - Go To Cart', function() {
            cy.wait (2000)
            cy.get('[jsaction="JIbuQc:IXVHne"] > .mdc-button > .mdc-button__label').should('contain', 'Go to cart').click()
        })
  })
})