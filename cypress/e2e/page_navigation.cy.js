describe("Application Navigation", () => {
  it("Should be able to add projects and tasks", () => {
    cy.intercept(
      "GET",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard",
      {
        statusCode: 200,
        fixture: "user",
      }
    ).as("loadInitialProjects");

    cy.visit("http://localhost:3000/")
      .get(".demo-btn")
      .click()
      .get(".project")
      .eq(0)
      .click()
      .get(".task")
      .should("have.length", 3)
      .get(".project")
      .eq(1)
      .click()
      .get(".column")
      .eq(0)
      .find(".task")
      .should("have.length", 1)
      .get(".column")
      .eq(2)
      .find(".task")
      .should("have.length", 2)
      .get(".add-project-btn")
      .click()
      .get(".add-project-modal")
      .should("exist")
      .get("#add-project")
      .should("exist")
      .get("#new-project-title")
      .should("exist")
      .type("The Real Final Project")
      .get("#new-project-description")
      .should("exist")
      .type("Cypress testing is fun");

    cy.intercept(
      "GET",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/dashboard",
      {
        statusCode: 200,
        fixture: "create_project",
      }
    ).as("loadAddProjects");

    cy.intercept(
      "POST",
      "https://analog-be-18680af1ea7c.herokuapp.com/api/v1/users/1/projects/",
      {
        statusCode: 201,
        body: {
          title: "The Real Final Project",
          description: "Cypress Testing is fun",
          color: "#000000",
          deadline: "2023-12-25",
        },
      }
    ).as("loadAddProjects");

    cy.get(".add-project-modal").find("button").eq(2).click();
  });
});
