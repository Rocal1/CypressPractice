/// <reference types="Cypress"/>

describe('My second Test Suite', function() {
    it('Checkout test', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1','option3'])

        //Static Dropdown
        cy.get('select').select('option2').should('have.value','option2')

        //Dinamic Dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($element, index, $list) =>{
            if($element.text()==='India'){
                cy.wrap($element).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

        //Visible and not visible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radiobuttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
}) 