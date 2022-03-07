/// <reference types="Cypress"/>

describe('Mocking a service response', () => {
    
    it('Mocking API',()=>{

        cy.request('http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium Automation with Java",
            "isbn": "bcdsss",
            "aisle": "22s7",
            "author": "Jhon foe"
        }).then(function(response){
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.be.equal(200)
        })

    })

})