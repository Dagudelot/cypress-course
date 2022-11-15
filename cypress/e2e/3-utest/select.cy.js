describe('Registro en UTest', () => {

    it('Abrir pagina de registro', () => {

        cy.visit('/')
        cy.contains('Join Today').click()
        
        cy.get('#birthMonth').select("July")
        cy.get('#birthDay').select("7")
        cy.get('#birthYear').select("1999")

        cy.get('#languages').find('div > input').as('inputLanguages')
        cy.get('@inputLanguages').type(' ')
        cy.contains('Spanish').click()
        
    })

})