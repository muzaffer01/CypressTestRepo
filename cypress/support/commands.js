// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("emptyCartCommand", () => 
{
    cy.visit('/cart')
    cy.title().should('include', 'Shopping Cart - Google Store')

    // If any item exists in cart, then remove items from cart, till the cart is empty
    it('Rerun until Cart is Empty', function () {

        if (cy.get('.cart-remove-button > .button-text').first().should('contain','Remove')) {
            cy.get('.cart-remove-button > .button-text').first().click()  
        } else {
        cy.get('.your-cart-is-empty').should('contain', 'Your cart is empty') 
            }
  })
})