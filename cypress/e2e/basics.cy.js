/// <reference types="Cypress"/>
describe("tasks page", () => {
  it("should render the main image", () => {
    cy.visit("http://localhost:5173/");
    // *** get after get() should NOT to be used ***
    // cy.get(".main-header").get("img");
    cy.get(".main-header img"); // Nested CSS Selector
    cy.get(".main-header").find("img"); // Using find()
  });
  it("should display the page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("My Cypress Course Tasks");
  });
});
