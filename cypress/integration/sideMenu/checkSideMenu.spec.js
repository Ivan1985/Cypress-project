/// <reference types="Cypress" />

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

import {LogIn} from '../../support/pom-objects/LogIn.spec'


describe('Side Menu', function() {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it.only('1. Verify opening pages from Side Menu', function() {
        cy.get(LogIn.constUserName).type(standardUser.username)
        cy.get(LogIn.constPassword).type(standardUser.password)
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').contains('Products')
        cy.get('#react-burger-menu-btn').click()
    });
});