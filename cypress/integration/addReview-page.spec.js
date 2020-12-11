let movies;    // List of movies from TMDB


// Utility functions
const filterByTitle = (movieList, string) =>
    movieList.filter((m) => m.title.toLowerCase().search(string) !== -1);

const filterByGenre = (movieList, genreId) =>
    movieList.filter((m) => m.genre_ids.includes(genreId));

describe("Add Review Page ", () => {
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
        cy.wait(2000)
    });

    describe("Base test", () => {
        it("displays page header", () => {
            cy.contains("Add to Favorites").click();
            cy.get("#favorite-movies").click()

            cy.contains("Write a Review").click();
            cy.url().should("include", `/reviews/form`);
            it("should display the movie poster", () => {
                cy.get("img")
                    .should("have.attr", "src")
            });
        });
    })


    describe("Add review", () => {
        describe("Submit button", () => {
            it("should display 'Author name required No review text ' if author doesn't input anything", () => {
                cy.contains("Add to Favorites").click();
                cy.get("#favorite-movies").click()

                cy.contains("Write a Review").click();
                cy.contains("Submit").click();
                cy.get("p").should("have.text", 'Author name required No review text ');
            })
            it("should display 'Author name required'if you add review without inputting author", () => {
                cy.contains("Add to Favorites").click();
                cy.get("#favorite-movies").click()

                cy.contains("Write a Review").click();
                const reviewContent = "Very nice and I like it!";
                cy.get("textarea").clear().type(reviewContent);
                cy.contains("Submit").click();
                cy.get("p").should("have.text", 'Author name required ');
            })
            it("should display 'Review is too short'if you add review whose value is less than 10", () => {
                cy.contains("Add to Favorites").click();
                cy.get("#favorite-movies").click()

                cy.contains("Write a Review").click();
                const authorName = "Freda";
                cy.get("input").clear().type(authorName);
                const reviewContent = "Good";
                cy.get("textarea").clear().type(reviewContent);
                cy.contains("Submit").click();
                cy.get("p").should("have.text", 'Review is too short ');
            })
            it("should return favorite page if you submit the review correctly.", () => {
                cy.contains("Add to Favorites").click();
                cy.get("#favorite-movies").click()

                cy.contains("Write a Review").click();
                const authorName = "Freda";
                cy.get("input").clear().type(authorName);
                const reviewContent = "Very nice and I like it!";
                cy.get("textarea").clear().type(reviewContent);
                cy.contains("Submit").click();
                cy.url().should("include", `/movies/favorites`);
            })

        })
        describe("Reset Button", () => {
            it("should reset author name and review content if you click reset button", () => {
                cy.contains("Add to Favorites").click();
                cy.get("#favorite-movies").click()

                cy.contains("Write a Review").click();
                const authorName = "Freda";
                cy.get("input").clear().type(authorName);
                const reviewContent = "Very nice and I like it!";
                cy.get("textarea").clear().type(reviewContent);
                cy.contains("Reset").click();
                cy.get("input").should("have.text", '');
                cy.get("textarea").should("have.text", '');
            });
        })

    })
})
