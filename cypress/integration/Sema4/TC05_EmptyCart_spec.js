


  
describe('GoToCart', function() {
    it('Visit Google Play Store GPS', function() {
      cy.visit('https://store.google.com/cart')
      cy.title().should('include', 'Shopping Cart - Google Store')
      cy.wait(2000)


      


      //cy.get('.your-cart-is-empty')
      //.should('include', 'Your cart is empty')


      cy.get('.cart-remove-button > .button-text')


      let found = true;
      while (found) {
        const Existent = Cypress.$('.fake-selector');
  
        if (!nonExistent.length) {
          cy.reload();
        } else {
          found = false;
        }
      }
   
      
      //cy.get('.products > button[data-category-id="phones"]').click();
      //cy.get('[data-state="active"][style=""] > .subnav-container > .left-side > [data-column="1"] > .subcategory > ul > :nth-child(2) > .product-link').click()
      //cy.get('.price-and-button-container > .button-wrap > div > .button > .button-text').click()
    })
  })