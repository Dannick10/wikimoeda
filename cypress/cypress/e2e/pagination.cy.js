describe("should be able to access pages",() => {
 
    beforeEach(() => {
        cy.visit('https://wikimoeda.vercel.app/')
        cy.get('.grid > .text-center').click()
        cy.scrollTo(0, '100%')
    })

    it('Previous page should not be clicked if the current page is 1' , () => {
        cy.get('.rounded-s-md').should('be.disabled')
    })

    it('go to next page', () => {
        cy.get('.rounded-e-md').click()
        cy.scrollTo(0,'100%')
    })

    it('return to previous page', () => {
        cy.get('.rounded-e-md').click()
        cy.scrollTo(0,'100%')
        cy.get('nav > .flex > :nth-child(2)').click()
        cy.scrollTo(0,'100%')
    }) 

})