/*
Test Scenario: Checkout with NO Data and Validate Error Messages
Visit Google Play Store
URL: https://store.google.com/checkout
*/

describe('Checkout as Guest', function(){

    context('Guest Checkout With No Data and Validate Error message', function(){
        
        // Guest Checkout Page
        it('Visit Checkout Page', function() {

            // Cypress.Cookies.preserveOnce()

            cy.visit('https://store.google.com/checkout')
            cy.get('.header-text-7').should('include', 'Checkout')

            cy.get('#paymentsParentDivIdIframe')
            .then(function ($iframe) {
            const $body = $iframe.contents().find('body')

            // RECAPTCHA should be DISABLED in the TEST Envronment.

            //Click Save Changes to trigger Error message for Required fields
            cy.get('.goog-inline-block jfk-button jfk-button-action b3-button b3id-button b3-ripple-container b3-primary-button="Save changes"]').click()

            // Validate Error message for required fields
            cy.wrap($body).find('data-name="ContactEmailField"').should('Contact email address is a required field')
            cy.wrap($body).find('data-name="VerifyEmailField"').should('Verify email address is a required field')
            cy.wrap($body).find('data-name="Recepienct"').should('Name is required')
            cy.wrap($body).find('data-name="ADDRESS_LINE_1"').should('Address line 1 is required')
            cy.wrap($body).find('data-name="LOCALITY"').should('City is required')
            cy.wrap($body).find('data-name="POSTAL_CODE"').should('ZIP code is required')
            cy.wrap($body).find('b3id-input-error b3-input-error b3-error b3id-card-number-input-error').should('Card number is required')
            cy.wrap($body).find('b3id-input-error b3-input-error b3-error b3id-cardholder-name-input-error').should('Cardholder name is required')

            //Unexpected Error messsage displayed
            //cy.get("b3id-quantum-butterbar-dismiss-button b3-quantum-butterbar-dismiss-button").should("dismiss").click()

            })
        })  
    })
  })