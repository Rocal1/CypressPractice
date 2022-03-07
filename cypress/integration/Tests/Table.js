/// <reference types="Cypress"/>

describe('My second Test Suite', function() {
    it('Checkout test', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Element in a table
        cy.get('tr td:nth-child(2)').each(($element,index,$list) => {
            const text= $element.text()
            if (text.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const actualPrice = price.text()
                    expect(actualPrice).equal('25')
                })
            }
        })

        //MOUSE OVER
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        //To click on hidden elements anyways use .click({force:true})
        cy.url().should('include','top')
    })
}) 