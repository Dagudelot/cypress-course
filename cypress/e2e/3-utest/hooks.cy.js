describe('Registro en UTest', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('Join Today').click()
    })

    afterEach(() => {
        cy.visit('/')
    })

    it('BDD', () => {
        
        cy.url().should('include', 'signup/personal')
        cy.get('ol').children().first().should('have.class', 'current')
        cy.get('#firstName').should('be.visible').should('be.empty')

    });

    it('BDD', () => {
        
        cy.get('#lastName').then((lastNameInput) => {
            expect(lastNameInput).to.be.visible
        })

    });

    it('TDD', () => {
        cy.get('#email').then((emailInput) => {

            assert.equal( emailInput.attr('placeholder'), 'jsmith@example.com' )

        })
    });

})