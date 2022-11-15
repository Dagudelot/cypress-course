describe('Registro en UTest', () => {

  it('Abrir pagina de registro', () => {

      cy.visit('/')
      cy.contains('Join Today').click()

  })

  it('Localizador get()', () => {

    cy.get('input')
    cy.get('input[placeholder="John"]')
    cy.get('#firstName')

  })

  it('Localizador parent()', () => {

    cy.get('#firstName').parent()
    cy.get('#firstName').parents()

  })

  it('Localizador children()', () => {

    cy.get('.row').children()

  })

  it('Localizador find()', () => {

    cy.get('.row').find('#firstName')

  })

  it('Localizador contains()', () => {

    cy.contains('First name')

  })

})