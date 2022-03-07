/// <reference types="Cypress"/>

describe('My first Test Suite', function() {
    it('PLP test', function() {
        //CODE HERE
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        //ALIAS LOCATOR
        cy.get('.products').as('productCard')
        cy.get('@productCard').find('.product').should('have.length', 4)
        cy.get('@productCard').find('.product').eq(2).contains('ADD TO CART').click().then(function() {
            console.log('JS method converted to synchronized method after click')
        })

        //CLICK ON SPECIFIC CARD USING EACH
        cy.get('@productCard').find('.product').each(($element, index, $list) => {
            const expectedText = $element.find('h4.product-name').text()
            if (expectedText.includes('Cashews')){
                cy.wrap($element).find('button').click()
            } 
        })

        //ASSERTION TEXT
        cy.get('.brand').should('have.text','GREENKART')
        //GET TEXT
        cy.get('.brand').then((logo) => {
            cy.log(logo.text())
        })
    })
}) 