/// <reference types="Cypress"/>

describe('My second Test Suite', function() {
    it('Checkout test', function() {
        //CODE HERE
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //ALIAS LOCATOR
        cy.get('.products').as('productCard')

        //CLICK ON SPECIFIC CARD USING EACH
        cy.get('@productCard').find('.product').each(($element, index, $list) => {
            const expectedText = $element.find('h4.product-name').text()
            if (expectedText.includes('Cashews')){
                cy.wrap($element).find('button').click()
            } 
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT') 
        cy.get('.cart-preview > .action-block > button').click()

    })
}) 