/// <reference types="Cypress"/>

describe('My second Test Suite', function() {
    it('Checkout test', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Alert popup
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //HANDLE ALERTS

        //Window:alert
        cy.on('window:alert',(str) => {
            //MOCHA ASSERTIONS
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //Window:confirm 
        cy.on('window:confirm',(str) => {
            //MOCHA ASSERTIONS
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })
}) 