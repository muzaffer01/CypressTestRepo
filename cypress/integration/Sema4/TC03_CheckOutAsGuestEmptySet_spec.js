

/*
Test Scenario: Checkout with NO Data and Capture Error Messages
Visit Google Play Store
URL: https://store.google.com/cart
*/


describe('Checout as Guest', function(){

    context('Validate Error message with No', function(){
        
        it('Visit Checkout Page', function() {
            //cy.visit('https://store.google.com/cart')
            //cy.get('div[jscontroller="eoSTdf"] > .button-shadow > .text-center').click()
            //Validate URL with Checkout paramter
            //https://store.google.com/checkout')

            
            
            // cy.setCookie('GSTORE_CONSISTENCY', 
            // 'AHm/Q7vUITPxTeAOpj47ggF0jXwb8AGSKGNxfYcKKUaf0SAvlxbw/ssGATmMGDoaXdsFyb+3e27q3YxruisnIYNecHlDYO/bmYX1E+7S+ca7X8IVB4pn5JzayMmEJDgS7HiR//LSpsdZNT0VE3PwF1unjpA1qNA='
            // )

            // cy.setCookie('_dc_gtm_UA-54090495-1', '1')

            // cy.setCookie('_ga','GA1.3.996192836.1558283750')

            // cy.setCookie('_gat_UA-54090495-1','1')

            // cy.setCookie('_gcl_au','1.1.604693050.1558283749')

            // cy.setCookie('_gid','GA1.3.346171795.1558283750')




            // Cypress.Cookies.preserveOnce()



            cy.visit('https://store.google.com/checkout')
            //cy.wait(2000)
            cy.get('.header-text-7').should('include', 'Checkout')

            // ALL GOOD TILL ABOVE


            cy.get('#paymentsParentDivIdIframe')
            .then(function ($iframe) {
            const $body = $iframe.contents().find('body')

            cy
            .wrap($body)
            .find('input[name=ContactEmailField]')
            .type('1')
            

            //cy.get('input[type=text]').type('Test all the things', { force: true })

            // cy
            // .wrap($body)
            // .find('input:eq(1)')
            // .type('1222')

            // cy
            // .wrap($body)
            // .find('input:eq(2)')
            // .type('123')
            })


           

            // name="ContactEmailConfirm"

            // //.visible > .b3id-quantum-butterbar-content > span
            
            // // Add Items Validation

            // cy.get('input[name=firstName]')

            // cy.get('#paymentsParentDivIdIframe')



        })  
        
        
  
  
  
    })
  })