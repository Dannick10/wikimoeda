describe("converting currency", () => {

  it('Testing currency and dollar conversion', () => {
    cy.visit("https://wikimoeda.vercel.app");
    cy.get('[href="/conversor"] > p').click();
      cy.get('.rounded-s-md > #countries').select(1)
      cy.get(':nth-child(2) > #countries').select(3)
      cy.get('.bg-gray-600').type('4')
  })

});
