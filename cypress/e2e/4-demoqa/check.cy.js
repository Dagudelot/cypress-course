describe('Inputs', () => {

    it('Radio buttons', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        // cy.get('#gender-radio-1').check({ force:true })
        // cy.get('label[for="gender-radio-1"]').click()
        // cy.get('[type="radio"]').check('Female', {force:true})
        cy.get('[type="radio"]').eq(2).check({force:true})
        
    });

    it.only('Checkboxes', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        // cy.get('#hobbies-checkbox-1').check({ force:true })
        // cy.get('label[for="hobbies-checkbox-1"]').click()
        // cy.get('[type="checkbox"]').check('2', {force:true})
        // cy.get('[type="checkbox"]').eq(2).check({force:true})
        cy.get('[type="checkbox"]').check({force:true})
    });

})