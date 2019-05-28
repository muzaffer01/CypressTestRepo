/*
Test Scenario: Search for Product, Select Options and Add to Cart
Visit Google Play Store
URL: https://store.google.com/
*/

describe('Check For Product', function(){

    

    // Create Global variable for the elements
    const navButtonPhone = '.products > button[data-category-id="phones"]'
    const navPixel3a  = 'div[data-state="active"] a[data-product-id="pixel_3a"][class="product-link"]'
    const buyButton = '.price-and-button-container .button > span[class="button-text"]'
    const phoneSizeBB = 'button[aria-label=" Google Pixel 3a XL  Is $479. Select "]'
    const phoneCarrierBB = 'button[aria-label=" Verizon Includes SIM1  "]'
    const phoneColorBB = 'button[aria-label=" Just Black   Select "]'
    const phoneServices = '.mqn-headline__button > .mqn-button' 
    const addToCart = '.cta-button-container > .mdc-button > .mdc-button__label'
    //const addToCart = '.mdc-button > .mdc-button__label'
    const goToCart = '.interstitial-header > .mdc-button > .mdc-button__label'

  context('Product Selection', function(){

        // ReSet Cart to default state as Empty
        it('Set Cart to Empty State via COMMAND', function() {
            cy.emptyCartCommand()
        })

      //From Google Play Store, Select the Product with options
      it('Visit Google Play Store GPS', function() {
          //cy.visit('https://store.google.com/')    BASE URL
          cy.visit('')
          cy.title().should('include', 'Google Store for Google Made Devices & Accessories')
      })  
      
      it('Select Product Type (PHONE) from Navigation Bar', function() {
          cy.get(navButtonPhone).click()
      })

      it('Select Specific Phone (PIXEL 3a) from the Product List', function() {
        cy.get(navPixel3a).click()
      })

      it('Product Details Page - Click the BUY Button', function() {
          cy.wait (5000)  //added step as it displayed error message inconsistently as element not found
          cy.get(buyButton).should('contain', 'Buy').click({force:true})
        })

      it('Select Phone SIZE', function() {
        cy.wait (5000)  //added step as it displayed error message inconsistently as element not found  
        cy.get(phoneSizeBB).click({force:true})
        })

      it('Select Phone CARRIER', function() {
        cy.wait (5000)  //added step as it displayed error message inconsistently as element not found  
        cy.get(phoneCarrierBB).click({force:true})
        })

      it('Select Phone COLOR', function() {
          //  cy.wait (2000)  //added step as it displayed error message inconsistently as element not found
          cy.get(phoneColorBB)
          .then(($mycolor) => {
              $mycolor.click()
            })
        })

      it('Select Phone SERVICES - CLICK SKIP', function() {
          cy.wait (5000)  //added step as it displayed error message inconsistently as element not found
          //cy.get(phoneServices).should('contain','Next').click()
          cy.get(phoneServices).should('contain','Skip').click()
      })

      // Review and Add Product to Cart
      it('REVIEW the Phone Choices Selected and Add to Cart', function() {
          cy.wait (5000)  //added step as it displayed error message inconsistently as element not found
          cy.get(addToCart).first().should('contain','Add to cart').scrollIntoView().click()
      })
      
      //Go to Cart Page
      it('Suggested Accessories (skip) - Go To Cart', function() {
          cy.wait (5000)  //added step as it displayed error message inconsistently as element not found
          cy.get(goToCart).should('contain', 'Go to cart').click()
      })
  })
})