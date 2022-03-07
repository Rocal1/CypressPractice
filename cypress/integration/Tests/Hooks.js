/// <reference types="Cypress"/>
import HomePage from "../../support/Pages/HomePage"


describe('One more Test Suite', function() {

    before(function() {
        //GET DATA FROM JSON FILE
        cy.fixture('example').then((data)=>{
            this.data = data;
        })
    })

    it('hook test', function() {
        cy.visit(Cypress.env('url')+"angularpractice/")

        const homePage = new HomePage();

        //USE DATA FROM JSON FILE
        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getName().should('have.attr','minlength', '2')
        homePage.getRadioButton().should('be.disabled')
        homePage.getShoppingCartTab().click()
        cy.selectProduct('Blackberry')
        cy.selectProduct('Nokia Edge')

        this.data.productNames.forEach((value) => {
            cy.selectProduct(value)
        })
    })
}) 