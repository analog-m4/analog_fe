describe("Analog pages on render", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard",
      {
        statusCode: 200,
        fixture: "user",
      }
    );
  });

  it("The application showcases the correct color when light / dark mode is toggled, and the ui also follows such as work areas and text", () => {
    cy.visit("http://localhost:3000/")
      .get(".app-container")
      .should("have.css", "background-color", "rgb(23, 23, 23)")
      .get(".toggle")
      .click()
      .get(".app-container")
      .should("have.class", "light:bg-cream")
      .get(".demo-btn")
      .click()
      .get(".dashboard")
      .should("have.css", "background-color", "rgba(0, 0, 0, 0)");
  });
});
