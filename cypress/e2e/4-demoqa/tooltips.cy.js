describe('Tooltips', () => {

    it('Validando que se muestre tooltip', () => {
        cy.visit('https://demoqa.com/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('be.visible')
        cy.get('#toolTipButton').trigger('mouseout')
        cy.contains('You hovered over the Button').should('not.exist')
    });

})