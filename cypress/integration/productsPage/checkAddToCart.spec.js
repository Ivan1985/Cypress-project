/// <reference types="Cypress" />

const standardUser = Cypress.env('standardUser')
const lockedOutUser = Cypress.env('lockedOutUser')

import {LogIn} from '../../support/pom-objects/LogIn.spec'
import {ProductItems} from '../../support/pom-objects/Products.spec'
import {SideMenu, ShopingCartBadge} from '../../support/pom-objects/Header.spec'

describe('Side Menu', function() {

    beforeEach('Go to application.', function () {
        cy.visit('/')
        cy.loginUser(standardUser.username, standardUser.password)
    });

    it.only('1. Verify Adding Item to Cart', function() {
        cy.get(ProductItems.constAddToCartBackpack).click().then(() => {
            cy.get(ShopingCartBadge.constShoppingCartBadge)
                .should('be.visible')
        })
    });

    it.only('2. Adding All Items to Cart', function() {
        cy.addToCart(ProductItems.constAddToCartBackpack, 1)
        cy.addToCart(ProductItems.constAddToCartTShirt, 2)
        cy.addToCart(ProductItems.constAddToCartOnesie, 3)
        cy.addToCart(ProductItems.constAddToCartBikeLight, 4)
        cy.addToCart(ProductItems.constAddToCartFleeceJacket, 5)
        cy.addToCart(ProductItems.constAddToCartTShirtRed, 6)
    });

    it('3. Remove Item from Cart', function() {

    });

    it('4. Check Dropdown menu', function(){

    });

});