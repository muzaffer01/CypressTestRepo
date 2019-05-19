

/*
Test Scenario: Checkout with Valid Data
Visit Google Play Store
URL: https://store.google.com/chekcout
*/


describe('CheckOut', function(){

    context('Checkout With Valid Data', function(){
        
        it('Visit Google Play Store GPS - Checkout Page', function() {
            cy.visit('https://store.google.com/checkout')
            cy.title().should('include', 'Google Store for Google Made Devices & Accessories')

            cy.fixture('gpsCheckout').as('checkout')
            cy.server()
            cy.route('GET', 'gpsCheckout', '@checkout')


            cy.get('#paymentsParentDivIdIframe')
            .then(function ($iframe) {
            const $body = $iframe.contents().find('body')

            cy
            .wrap($body)
            .find('input[name="ContactEmailField"]')
            .type("abc")
            //.type(this.checkout.contactEmailAdress)
            })



        })  
    })  
})  