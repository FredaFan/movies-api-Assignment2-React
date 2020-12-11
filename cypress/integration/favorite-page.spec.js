let movies;    // List of movies from TMDB

// Utility functions
const filterByTitle = (movieList, string) =>
    movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
    movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Home Page ", () => {
    before(() => {
        // Get movies from TMDB and store in movies variable.
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")    // Take the body of HTTP response from TMDB
            .then((response) => {
                movies = response.results
            })
    })
    beforeEach(() => {
        cy.visit("/")
    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.contains("Add to Favorites").click();
            cy.get("#favorite-movies").click()
            cy.wait(2000)
            cy.get("h2").contains("Favorite Movies");
            cy.get(".badge").contains(1);
            cy.url().should("include", `/movies/favorites`);
        });
    })


    describe("Add to write-review button test", () => {
        it("should get to the write review page", () => {
            cy.contains("Add to Favorites").click();
            cy.get("#favorite-movies").click()
            cy.wait(2000);
            cy.contains("Write a Review").click();
            cy.url().should("include", `/reviews/form`);
        });
    })

})
