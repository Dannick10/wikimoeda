describe('must get data from wikipedia', () => {

    before(() => {
        cy.visit("https://wikimoeda.vercel.app/");
        cy.get('[href="/Wiki"]').click();
    })

    it('must access topic',()=> {
        cy.get(':nth-child(2) > :nth-child(1) > .bg-lime-700').click()
        cy.get('._wikires_1npw6_1 > :nth-child(1)').should('contain', 'Ação')
    })

   afterEach(() => {
        cy.visit("https://wikimoeda.vercel.app/");
        cy.get('[href="/Wiki"]').click();
        cy.get(':nth-child(2) > :nth-child(1) > .group > .fa-circle-info')
    })

})