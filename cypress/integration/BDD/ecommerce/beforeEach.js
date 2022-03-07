beforeEach(function() {
    //GET DATA FROM JSON FILE
    cy.fixture('example').then((data)=>{
        this.data = data;
    })
})