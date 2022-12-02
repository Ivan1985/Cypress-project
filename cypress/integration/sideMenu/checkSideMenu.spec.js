/// <reference types="Cypress" />

describe('Side Menu', function() {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it.only('1. Verify opening pages from Side Menu', function() {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click();
        cy.get('.title').contains('Products')
    });
});