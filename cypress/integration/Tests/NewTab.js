/// <reference types="Cypress"/>

describe('My second Test Suite', function() {
    it('Checkout test', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //MOVE TO ANOTHER PAGE SAME DOMAIN

        //METHOD 1 (Modify DOM to avoid open new tab)
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','index')

        cy.go('back')


        //METHOD 2 (Get url from attribute)
        cy.get('#opentab').then((element)=>{
            const url = element.attr('href')
            cy.visit(url)
        })
        cy.url().should('include','index')
        
        cy.go('back')

        //METHOD 3 (Check href value attribute)
        cy.get('#opentab').should('have.prop', 'href', 'https://www.rahulshettyacademy.com/')


        //METHOD 4 (without redirection check content using request)
        cy.get('#opentab').then((element)=>{
            const url = element.prop('href')

            // make an http request for this resource
            // outside of the browser
            cy.request(url)
            // drill into the response body
            .its('body')
            // and assert that its contents have the <html> response
            .should('include', '<title>')
            .and('include', '</html>')
        })

    })
}) 