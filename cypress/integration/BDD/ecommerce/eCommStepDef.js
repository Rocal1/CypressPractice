import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../support/Pages/HomePage"
import ProductPage from "../../../support/Pages/ProductPage"

const homePage = new HomePage();
const productPage=new ProductPage()

//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome

Given('I open Ecommerce page', ()=>{
    cy.visit(Cypress.env('url')+"angularpractice/")
})

When('I add items to Cart', function(){

    homePage.getShoppingCartTab().click()

        this.data.productNames.forEach((value) => {
            cy.selectProduct(value)
        })  
    productPage.checkOutButton().click()
})

And('Validate the total prices',()=>{
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

    const amount=$el.text()
    var res= amount.split(" ")
    res= res[1].trim()
    sum= Number(sum)+Number(res)
    
    }).then(function(){
        cy.log(sum)
    })
    cy.get('h3 strong').then(function(element){
        const amount=element.text()
        var res= amount.split(" ")
        var total= res[1].trim()
        expect(Number(total)).to.equal(sum)
    
    }) 
})

    //Then select the country submit and verify Thankyou

Then('select the country submit and verify Thankyou',()=>{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})

When('I fill the form details', function(dataTable){
    homePage.getName().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour', function(){
    homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    homePage.getName().should('have.attr','minlength', '2')
    homePage.getRadioButton().should('be.disabled')
})

And('Select the shop page', function(){
    homePage.getShoppingCartTab().click()
})