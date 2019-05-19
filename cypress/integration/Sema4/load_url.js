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
  
        
    })
     
})