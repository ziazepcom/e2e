describe('ProgrammsBuzz.com', () => {
    it('', () => {
        cy.visit('https://www.programsbuzz.com/user/login')
        cy.get('#edit-name').clear().type('UserName').tab()
        cy.clear().type('Password').tab().click()
    });
});