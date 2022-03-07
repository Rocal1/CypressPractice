/// <reference types="Cypress"/>

describe('Mocking a service response', () => {
    
    it('Only 1 book available message - Mocking only one book',()=>{

        cy.visit(Cypress.env('url')+"angularAppdemo/")

        //ALWAYS intercept the request BEFORE be called (this case by clicking on '.btn-primary')
        cy.intercept(Cypress.env('url')+"Library/GetBook.php?AuthorName=shetty",
            (request)=>{
                //RENAME AuthorName to 'malhotra'
                request.url=Cypress.env('url')+"Library/GetBook.php?AuthorName=malhotra"
                request.continue((resp)=>{
                    expect(resp.statusCode).equal(200)
                })
            }
        ).as('requestMethod')
        cy.get('.btn-primary').click()
        cy.wait('@requestMethod')

    })

    
    it('ANOTHER WAY: Only 1 book available message - Mocking only one book',()=>{

        cy.visit(Cypress.env('url')+"angularAppdemo/")

        //ALWAYS intercept the request BEFORE be called (this case by clicking on '.btn-primary')
        cy.intercept(Cypress.env('url')+"Library/GetBook.php?AuthorName=shetty",
            (request)=> {
                request.url=Cypress.env('url')+"Library/GetBook.php?AuthorName=malhotra"
            }
        ).as('requestMethod')
        cy.get('.btn-primary').click()
        cy.wait('@requestMethod').then(({response})=> {
            expect(response.statusCode).equal(200)
            cy.get('tr').should('have.length', response.body.length + 1)

        })

    })

})