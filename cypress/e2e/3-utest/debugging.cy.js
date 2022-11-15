describe('Registro en UTest', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.contains('Join Today').click()
    })

    it('BDD', () => {
        
        cy.url().should('include', 'signup/personal')
        cy.get('ol').children().first().should('have.class', 'current')

        // debugger
        // cy.pause()

        // cy.get('#firstName').then(console.log)

        cy.get('#firstName').debug()


        cy.get('ol').children().then((steps) => {

        //     // console.log("esta es la longitud de los steps ", steps.length)
            cy.log("esta es la longitud de los steps ", steps.length)


        })

    });

})