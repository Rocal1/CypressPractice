class HomePage{

    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender(){
        return cy.get('Select')
    }

    getRadioButton(){ 
        return cy.get('#inlineRadio3')
    }

    getTwoWayDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getShoppingCartTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }


}

export default HomePage