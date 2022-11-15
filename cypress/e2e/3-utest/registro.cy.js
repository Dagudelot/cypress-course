describe('Registro en UTest', () => {

    it('Abrir pagina de registro', () => {

        cy.visit('/')
        cy.contains('Join Today').click()
        cy.contains('Prueba').click()
        
    })

})