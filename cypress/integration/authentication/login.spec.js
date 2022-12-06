/// <reference types="Cypress" />

// Fixtures
import {loginPageErrors} from '../../fixtures/constLogIn.spec'

describe('Login Page suite', function() {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it('1. Login with empty username and password', function() {
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', loginPageErrors.epmtyFieldsError)
    });

    it('2. Login succesufully', function() {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').contains('Products')
    });
});