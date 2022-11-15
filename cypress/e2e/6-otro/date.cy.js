describe('Trabajando con date pickers', () => {

    it('input date picker', () => {
        cy.visit('https://yari-demos.prod.mdn.mozit.cloud/es/docs/Web/HTML/Element/input/date/_sample_.value.html')
        cy.get('input[type="date"]').type('2022-11-05')
    });

})