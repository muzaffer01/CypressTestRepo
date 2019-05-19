.get('iframe.stripe_checkout_app')
.then(function ($iframe) {
    const $body = $iframe.contents().find('body')

    cy
      .wrap($body)
      .find('input:eq(0)')
      .type('4242424242424242')
    
    cy
      .wrap($body)
      .find('input:eq(1)')
      .type('1222')

    cy
      .wrap($body)
      .find('input:eq(2)')
      .type('123')
})



//===============


cy.get(iframe_selector).then($iframe => {

    const iframe = $iframe.contents();

    const myInput = iframe.find("your input selector like #myElement");
    cy.wrap(myInput).type("example");

    //you don't need to trigger events like keyup or change

});



//=============



cy.get('[formcontrolname="holderName"]')
        .type('card test')
        .should('have.value', 'card test');
      cy.wait(3000);
      cy.get('iframe').then(function($element) {
        const $bodyfind = $element
          .contents()
          .find('body')
          .eq(0);
        const cyElement = cy.wrap($bodyfind);
        cyElement
          .find('[aria-label="Credit or debit card number"]')
          .type('378282246310005')
          .should('have.value', '3782 822463 10005');
        const $body1 = $element
          .contents()
          .find('body')
          .eq(1);
        const cyElement1 = cy.wrap($body1);
        cyElement1
          .find('[aria-label="Credit or debit card expiration date"]')
          .type('12/23')
          .should('have.value', '12 / 23');
        const $body2 = $element
          .contents()
          .find('body')
          .eq(2);
        const cyElement2 = cy.wrap($body2);
        cyElement2
          .find('[aria-label="Credit or debit card CVC/CVV"]')
          .type('123')
          .should('have.value', '123');