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
    cy.visit("http://localhost:3000/");
  });
});
