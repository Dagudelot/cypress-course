describe('Inputs', () => {

    it('Escribiendo en campos de texto', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').type("daniela{leftArrow}{del}")
    });

})