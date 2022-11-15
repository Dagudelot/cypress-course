describe('Inputs', () => {

    it('Validando en campos de texto', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type("daniela{leftArrow}{del}")
        // cy.get('@nombre').should('have.value', 'daniel')

        cy.get('@nombre').debug().then((nombreInput)=>{

            expect( nombreInput.val() ).to.equal('daniel')

        })
    });

})