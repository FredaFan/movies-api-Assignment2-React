let people;    // List of movies from TMDB

// Utility functions
const filterByTitle = (personList, string) =>
    personList.filter((m) => m.name.toLowerCase().search(string) !== -1);



describe("Popular Page ", () => {
    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
            `https://api.themoviedb.org/3/person/popular?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                people = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/")
        cy.get("#popular-people").click()
    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.get("h2").contains("Popular People");
            cy.get(".badge").contains(20);
        });
    })
    describe("Filtering", () => {
        describe("By person name", () => {
            it("should display people with 'p ' in the name", () => {
                const searchString = 'p'
                const matchingPeople = filterByTitle(people, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".cards").should("have.length", matchingPeople.length);
                cy.get(".cards").each(($cards, index) => {
                    cy.wrap($cards)
                        .find(".cards-name")
                        .should("have.text", matchingPeople[index].name);
                });
            })
            it("should display people with 'o' in the name", () => {
                const searchString = "o";
                const matchingPeople = filterByTitle(people, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".cards").should("have.length", matchingPeople.length);
                cy.get(".cards").each(($cards, index) => {
                    cy.wrap($cards)
                        .find(".cards-name")
                        .should("have.text", matchingPeople[index].name);
                });
            })
            it("should display movies with 'xyz' in the title", () => {
                const searchString = "xyz";
                const matchingPeople = filterByTitle(people, searchString);
                cy.get("input").clear().type(searchString);
                cy.get(".card").should("have.length", matchingPeople.length);

            })
        })

    })

})