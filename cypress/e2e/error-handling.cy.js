describe("Error handling ", () => {
  it("Should handle 404 errors and be able to navigate home", () => {
    cy.intercept(
      "GET",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard",
      {
        statusCode: 200,
        fixture: "user",
      }
    ).as("successfulPageLoad");

    cy.visit("http://localhost:3000/testing")
      .get(".error-half-1")
      .should("contain", "Er")
      .get(".error-half-2")
      .should("contain", "ror")
      .get(".return-home-btn")
      .click()
      .url()
      .should("contain", "http://localhost:3000/");
  });

  it("Should handle server side errors", () => {
    cy.intercept(
      "GET",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard",
      {
        statusCode: 500,
        body: "error",
      }
    ).as("pageLoadFail");

    cy.visit("http://localhost:3000/testing")
      .wait("@pageLoadFail")
      .get(".error-half-1")
      .should("contain", "Er")
      .get(".error-half-2")
      .should("contain", "ror")
      .get(".return-home-btn")
      .should("exist");
  });
});
