describe('Tablas', () => {

    beforeEach(() => {
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
    })

    it('Validar tamaño', () => {

        cy.get('#customers')
        .find('tr')
        .should('have.length', 7)

        cy.get('#customers')
        .find('th')
        .should('have.length', 3)

    })

    it('Validar columnas', () => {
        cy.get('#customers')
        .find('th')
        .first()
        .then((primerColumna) => {
            expect( primerColumna.text() ).to.equal('Company')
        })

        cy.get('#customers')
        .find('th')
        .first()
        .invoke('text')
        .should('equals', 'Company')

        cy.get('#customers')
        .find('th')
        .eq(1)
        .invoke('text')
        .should('equals', 'Contact')

        cy.get('#customers')
        .find('th')
        .eq(2)
        .invoke('text')
        .should('equals', 'Country')
    });

    it.only('Validar celda', () => {
        cy.get('#customers')
        .find('tr')
        .eq(4)
        .find('td')
        .eq(1)
        .invoke('text')
        .should('equals', 'Helen Bennett')
    });

})