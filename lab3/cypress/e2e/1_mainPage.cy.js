describe('Check Main Page', () => {

    beforeEach(() => {
        cy.visit("http://localhost:5173/");
    });
    
    it('Test navigation', () => {
        cy.get("nav a").should("have.length", 2);
    });

    it('Test hard cover filter', () => {
        cy.get("select#cover").select("hard");
        cy.get("section#list article").should("have.length", 4);
    });

    it('Test "Search by description" filter', () => {
        cy.get("input#wordInDescription").type("Opis");
        cy.get("section#list article").should("have.length", 2);
    });

    it('Test "Search by description" filter different letter case', () => {
        cy.get("input#wordInDescription").type("opis");
        cy.get("section#list article").should("have.length", 0);
    });

})