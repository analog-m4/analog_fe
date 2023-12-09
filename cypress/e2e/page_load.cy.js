describe("Analog Welcome Screen", () => {
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

  it("Upon loading the page, you should see the application header, account information, and information about the application", () => {
    cy.visit("http://localhost:3000/")
      .get(".header")
      .should("contain", "ANA")
      .get(".header-2")
      .should("contain", "LOG")
      .get(".application-announcement-large")
      .should("contain", "The ultimate")
      .get(".application-announcement-large-2")
      .should("contain", "to-do list application.")
      .get(".application-announcement-small")
      .should(
        "contain",
        "Manage tasks, write notes, and organize projects. Analog is the fastest way to get work done!"
      )
      .get(".demo-btn")
      .should("contain", "DEMO")
      .get(".join-btn")
      .should("contain", "JOIN NOW")
      .get(".username")
      .type("user1")
      .get(".username")
      .should("have.value", "user1")
      .get(".submit-button")
      .should("be.disabled")
      .get(".password")
      .type("password")
      .get(".password")
      .should("have.value", "password")
      .get(".submit-button")
      .should("be.enabled")
      .get(".built-with-images")
      .find("img")
      .should("have.length", 11)
  });
});
