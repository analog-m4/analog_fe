describe("Analog Dashboard", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard",
      {
        statusCode: 200,
        fixture: "user",
      }
    );
    cy.intercept(
      "POST",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/projects/",
      {
        statusCode: 200,
        body: {
          title: "New New",
          description: "New New",
          color: "FFFFFF",
          deadline: "2023-12-31",
        },
      }
    ).as("postProject")
  });

  it.skip("User should be able to log in and view their dashboard", () => {
    cy.visit("http://localhost:3000/")
      .get(".header")
      .should("contain", "ANA")
      .get(".header-2")
      .should("contain", "LOG")
      .get(".demo-btn")
      .should("contain", "DEMO")
      .get(".join-btn")
      .should("contain", "JOIN NOW")
      .get(".username")
      .type("1")
      .get(".username")
      .should("have.value", "1")
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
      .get(".submit-button")
      .click()
      .url()
      .should("include", "/projects")
      .get(".account")
      .should("contain", "Test User 1")
      .get(".dashboard")
      .should("contain", "Project 1")
      .should("contain", "Project 2")
      .should("contain", "Final Project")
      .get(".add-project-btn")
      .should("exist")
      .get(".files-container")
      .should("exist")
      .get(".project-board")
      .should("exist")
      .get("#canvas")
      .should("exist")
      .get(".dashboard")
      .get(":nth-child(1) > a > .project > .project-title")
      .click()
      .get(".project-board")
      .get(".column")
      .eq(0)
      .should("contain", "Task 1")
      .get(".column")
      .eq(1)
      .should("contain", "Task 2")
      .get(".column")
      .eq(2)
      .should("contain", "Task 3");
  });
  it("User should be able to add a project", () => {
    cy.visit("http://localhost:3000/projects")
      .get(".dashboard")
      .get(":nth-child(1) > a > .project > .project-title")
      .click()
      .get(".add-project-btn")
      .click()
      .get(".modal-body")
      .should("contain", "Title")
      .get(".modal-body")
      .should("contain", "Description")
      .get("#new-project-title")
      .type("New Project Title")
      .get("#new-project-description")
      .type("New Project Description")
      .get(".add-project-button")
      .click()
      cy.wait("@postProject")
  });
});
