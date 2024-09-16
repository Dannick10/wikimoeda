describe("must access the news link", () => {
  it("must click on the link", () => {
    cy.visit("https://wikimoeda.vercel.app/");
    cy.get(".grid > .text-center").click();
    cy.get("a").contains("Ir para pagina da noticia").click();
  });
});
