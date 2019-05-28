//////////////////////////////////////////////////////////////////////
//Test Scenario: Checkout with Valid Data
//Visit Google Play Store
URL: https://store.google.com/chekcout
//////////////////////////////////////////////////////////////////////

describe('Checkout as Guest', function(){

    context('Guest Checkout With Valid Data', function(){
        
        // Implement Fixture to input Guest and Payment Info
        beforeEach(() => {
            cy.fixture('googleCheckout').as('checkout')
            cy.server()
            cy.route('GET', 'googleCheckout', '@checkout')

        // Guest Checkout Page
        it('Visit Google Play Store GPS - Checkout Page', function() {
            cy.visit('/checkout')
            cy.title().should('include', 'Google Store for Google Made Devices & Accessories')

            // Get fields from iframe
            cy.get('#paymentsParentDivIdIframe')
            .then(function ($iframe) {
            const $body = $iframe.contents().find('body')
            })
            
            // Input values into  fields in "Provide Contact Email" Section
            cy.wrap($body).find('input[name="ContactEmailField"]').type(this.checkout.contactEmailAdress)
            cy.wrap($body).find('input[name="ContactEmailConfirm"]').type(this.checkout.contactEmailAdress)

            // Input values into  fields in "Name and shipping address" Section
            cy.wrap($body).find('input[name="RECEPIENT"]').type(this.checkout.name)
            cy.wrap($body).find('input[name="ADDRESS_LINE_1"]').type(this.checkout.addressLine1)
            cy.wrap($body).find('input[name="ADDRESS_LINE_2"]').type(this.checkout.addressLine2)
            cy.wrap($body).find('input[name="LOCALITY"]').type(this.checkout.city)

            cy.wrap($body).find('goog-menuitem').type("NJ")

            cy.wrap($body).find('input[name="POSTAL_CODE"]').type(this.checkout.zip)

            // Input values into  fields in "Add credit or debit card" Section
            cy.wrap($body).find('input[name="cardnumber"]').type(this.checkout.cardNumber)
            cy.wrap($body).find('input[name="ccname"]').type(this.checkout.name)
            cy.wrap($body).find('input[name="ccmonth"]').type(this.checkout.cardMonth)
            cy.wrap($body).find('input[name="ccyear"]').type(this.checkout.cardYear)
            cy.wrap($body).find('input[name="cvc"]').type(this.checkout.cardCVV)
            
            //Click Save Changes 
            cy.get('.goog-inline-block jfk-button jfk-button-action b3-button b3id-button b3-ripple-container b3-primary-button="Save changes"]').click()

            })  
        })  
    })  
})  