describe('Check "Add New" Page', () => {

    it('Test Login', () => {
        cy.visit("http://localhost:5173/login");
        cy.get("input#email").type("userek.milusinski@gmail.com");
        cy.get("input#password").type("haselko55555");
        cy.get("button").contains("Login with email").click();
        cy.get("nav a").eq(2).should("contain.text", "Logout");
    });

    it('Add new book', () => {
        cy.visit("http://localhost:5173/new");
        cy.url().should("include", "/new");
        
        cy.get("input[placeholder='Title']").type("nowość 2025. sprawdź!!!");
        cy.get("input[type='radio']").eq(1).check();
        cy.get("input[placeholder='Number of pages']").clear().type("2345");
        cy.get("input[placeholder='Author']").type("Adam Mickiewicz");
        cy.get("input[placeholder='Description']").type("Description książkowy");
        cy.get("button#addButton").click();
        
        cy.url().should("eq", "http://localhost:5173/");
    })

     it('Check if added book is displayed on main page', () => {
        cy.visit("http://localhost:5173");
        cy.get("section#list article").should((divs) => {
            const found = [...divs].find( (it) => /nowość 2025/i.test(it.innerText));
            expect(!!found).to.be.true;
        });
    })
})