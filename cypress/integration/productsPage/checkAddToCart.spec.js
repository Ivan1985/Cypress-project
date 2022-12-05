/// <reference types="Cypress" />

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

import {LogIn} from '../../support/pom-objects/LogIn.spec'
import {ProductItems} from '../../support/pom-objects/Products.spec'

describe('Side Menu', function() {

    beforeEach('Go to application.', function () {
        cy.visit('/')
        cy.loginUser(standardUser.username, standardUser.password)
    });

    it('1. Verify Adding Item to Cart', function() {
        cy.get(ProductItems.constAddToCartBackpack).click().then(() => {
            cy.get('.shopping_cart_badge')
                .should('be.visible')
        })
    });

    it('2. Adding All Items to Cart', function() {

    });

    it('3. Remove Item from Cart', function() {

    });

});