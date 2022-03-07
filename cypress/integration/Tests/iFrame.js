/// <reference types="Cypress"/>
/// <reference types="Cypress-iframe"/>


describe('One more Test Suite', function() {
    it('iframe test', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //iframes
        cy.get('#courses-iframe').then(($iframe) => {
            const $body = $iframe.contents().find('body')

            cy.wrap($body).find('a[href="#/mentorship"]').eq(0).click();
            cy.wrap($body).find('h1[class*="pricing-title"]').should('have.length',2)
        })

    })
}) 