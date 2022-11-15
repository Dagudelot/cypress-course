describe('Click', () => {

    it('Click izquierdo', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible')
    });

    it('Click derecho', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible')
    });

    it('Doble Click', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible')
    });

})