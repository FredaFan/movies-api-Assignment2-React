let movieId = null
let movie;
let reviews;
describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[1].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get(".card").eq(1).find("img").click();
  });

  it("should display movie title in the page header", () => {
    cy.get("h2").contains(movie.title);
  });
  it("should display the movie's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get("ul")
      .eq(1)
      .within(() => {
        cy.get("li").eq(0).contains("Runtime");
        cy.get("li").eq(1).contains(movie.runtime);
        cy.get("li").eq(2).contains("Release Date");
        cy.get("li").eq(3).contains(movie.release_date);
      });
  });
  it("should display the Home icon with the correct URL value", () => {
    cy.get(".fa-home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });
  it("should display the movie poster", () => {
    cy.get("img")
      .should("have.attr", "src")
  });
  it("should change browser URL when show/hide reviews is clicked", () => {
    cy.contains("Show Reviews").click();
    cy.url().should("include", `/movies/${movieId}/reviews`);
    cy.contains("Hide Reviews").click();
    cy.url().should("not.include", `/movies/${movieId}/reviews`);
  });
  
  it("should change browser URL when show/hide Similar movies is clicked", () => {
    cy.contains("Show Similar Movies").click();
    cy.url().should("include", `/movies/${movieId}/similar`);
    cy.contains("Hide Similar Movies").click();
    cy.url().should("not.include", `/movies/${movieId}/similar`);
  });

  it("should change browser URL when show/hide Recommendations movies is clicked", () => {
    cy.contains("Show Recommendations Movies").click();
    cy.url().should("include", `/movies/${movieId}/recommendations`);
    cy.contains("Hide Recommendations Movies").click();
    cy.url().should("not.include", `/movies/${movieId}/recommendations`);
  });

  it("should change browser URL when show/hide Cast is clicked", () => {
    cy.visit(`/movies/${movieId}`);
    cy.contains("Show Cast").click();
    cy.url().should("include", `/movies/${movieId}/cast`);
    cy.contains("Hide Cast").click();
    cy.url().should("not.include", `/movies/${movieId}/cast`);
  });
  it("should change browser URL when show/hide Crew is clicked", () => {
    cy.visit(`/movies/${movieId}`);
    cy.contains("Show Crew").click();
    cy.url().should("include", `/movies/${movieId}/crew`);
    cy.contains("Hide Crew").click();
    cy.url().should("not.include", `/movies/${movieId}/crew`);
  });
});