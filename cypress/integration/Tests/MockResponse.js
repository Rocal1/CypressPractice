/// <reference types="Cypress"/>

describe('Mocking a service response', () => {
    
    it('Only 1 book available message - Mocking only one book',()=>{

        cy.visit(Cypress.env('url')+"angularAppdemo/")

        //ALWAYS intercept the request BEFORE be called (this case by clicking on '.btn-primary')
        cy.intercept({
            method: 'GET',
            url: Cypress.env('url')+"Library/GetBook.php?AuthorName=shetty"
        },{
            statusCode: 200,
            body:[{
                "book_name": "RestAssure with Java",
                "isbn": "RSU",
                "aisle": "2100"
            }]
        }).as('mockedRequest')

        cy.get('.btn-primary').click()
        cy.wait('@mockedRequest').should(({request,response})=>{
            
            //row of the table (amount of TR elements -1) = lenght of the response array
            cy.get('tr').should('have.length',response.body.length + 1)
            
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })

    it.only('Mocking more than one book available', ()=>{
        cy.visit(Cypress.env('url')+"angularAppdemo/")
        cy.intercept(Cypress.env('url')+"Library/GetBook.php?AuthorName=shetty", 
        {
            body:[{
                    "book_name": "RestAssure with Java",
                    "isbn": "RSU",
                    "aisle": "2100"
                },
                {
                    "book_name": "RestAssure",
                    "isbn": "RSA",
                    "aisle": "2133"
                },
                {
                    "book_name": "Java",
                    "isbn": "RS2",
                    "aisle": "2130"
                }]
        }).as('mockingMutipleBooks')

        cy.get('.btn-primary').click()
        cy.wait('@mockingMutipleBooks').then(({response})=>{
            cy.get('tr').should('have.length', response.body.length + 1)
            
        })
        cy.get('p').should('not.have.text', 'Oops only 1 Book available')

    })


})
