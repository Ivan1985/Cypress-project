
// Import POM method
import {LogIn} from '../support/pom-objects/LogIn.spec'

Cypress.Commands.add("loginUser", (username, password) => {
    cy.get(LogIn.constUserName).type(username)
    cy.get(LogIn.constPassword).type(password)
    cy.get(LogIn.constLogInButton).click()
  });