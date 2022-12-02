/// <reference types="Cypress" />

describe('Login Page suite', function() {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it.only('6. Login succesufully', function() {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').contains('Products')
    });
});