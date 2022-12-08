/// <reference types="Cypress" />

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

// Fixtures
import { LogIn } from '../../support/pom-objects/LogIn.spec'

describe('Logout Page suite', function () {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it.only('1. Logout succesufully', function () {
        cy.loginUser(standardUser.username, standardUser.password)
        cy.logoutUser()
        cy.get(LogIn.constLogInButton).should('be.visible')
    });

});