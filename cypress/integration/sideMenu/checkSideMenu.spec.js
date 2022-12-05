/// <reference types="Cypress" />

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

// POM
import {LogIn} from '../../support/pom-objects/LogIn.spec'
import {ProductTitle} from '../../support/pom-objects/Products.spec'
import {SideMenu} from '../../support/pom-objects/SideMenu.spec'

// Fixtures
import {productTitle} from '../../fixtures/constProducts.spec'


describe('Side Menu', function() {

    beforeEach('Go to application.', function () {
        cy.visit('/')
    });

    it.only('1. Verify Side Menu Items', function() {
        cy.loginUser(standardUser.username, standardUser.password)
        cy.get(ProductTitle.constProductTitle).contains(productTitle.title)
        cy.get(SideMenu.constMenuButton).click()
        cy.sideMenuItems()
        cy.logoutUser()
    });

});