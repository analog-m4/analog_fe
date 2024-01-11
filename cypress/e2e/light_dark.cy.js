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
      .should("have.css", "background-color", "rgb(29, 35, 42)")
      .get(".toggle")
      .click()
      .get(".app-container")
      .should("have.css", "background-color", "rgb(255, 246, 246)")
      .get(".demo-btn")
      .click()
      .get(".dashboard")
      .should("have.css", "background-color", "rgb(255, 255, 255)")
      .get(".projects")
      .should("have.css", "color", "rgb(17, 24, 39)")
      .get(".toggle")
      .click()
      .get(".projects")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .get(".dashboard")
      .should("have.css", "background-color", "rgb(29, 35, 42)");
  });
});
