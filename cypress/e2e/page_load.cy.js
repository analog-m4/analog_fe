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
      .should("have.length", 11);
  });

  it("Should be able to navigate to the projects page and be met with project data", () => {
    cy.visit("http://localhost:3000/")
      .get(".demo-btn")
      .click()
      .get(".header")
      .should("contain", "ANA")
      .get(".header-2")
      .should("contain", "LOG")
      .get(".demo-btn")
      .should("contain", "DEMO")
      .get(".join-btn")
      .should("contain", "JOIN NOW")
      .get(".projects")
      .should("contain", "Projects")
      .get(".project-buttons")
      .find(".project")
      .should("have.length", 3)
      .get(".add-project-btn")
      .get(".files-container")
      .find("label")
      .should("contain", "Files")
      .get("#formFile")
      .should("exist")
      .get(".upload-file-btn")
      .should("exist")
      .get(".no-project-selected")
      .should("contain", "No project selected")
      .get(".column-title")
      .eq(0)
      .should("contain", "Backlog")
      .get(".column")
      .eq(0)
      .find(".add-task-btn")
      .should("exist")
      .get(".column-title")
      .eq(1)
      .should("contain", "Doing")
      .get(".column-title")
      .eq(2)
      .should("contain", "Done")
      .get("#canvas")
      .should("exist")
      .get(".whiteboard-title")
      .should("contain", "Whiteboard");
  });
});
