
// Import POM method
import { LogIn } from '../support/pom-objects/LogIn.spec'
import { LogOut } from '../support/pom-objects/LogOut.spec'
import { SideMenuButton, ShopingCartBadge } from '../support/pom-objects/Header.spec'

Cypress.Commands.add("loginUser", (username, password) => {
  cy.get(LogIn.constUserName).type(username)
  cy.get(LogIn.constPassword).type(password)
  cy.get(LogIn.constLogInButton).click()
});

Cypress.Commands.add("logoutUser", () => {
  cy.get(SideMenuButton.constMenuButton).click()
  cy.get(LogOut.constLogOutButton).click()
});

Cypress.Commands.add("sideMenuItems", () => {
  cy.get('.bm-item-list')
    .find('a')
    .then((items) => {
      expect(items[0]).to.contain.text('All Items')
      expect(items[1]).to.contain.text('About')
      expect(items[2]).to.contain.text('Logout')
      expect(items[3]).to.contain.text('Reset App State')
    })
});

// Cypress.Commands.add("addToCart", (productName, productNumber) => {
//   cy.get(`${productName}`).click().then(() => {
//     cy.get('.shopping_cart_badge')
//       .should('have.text', Number(productNumber))
//   })
// });

Cypress.Commands.add("addToCart", (productName) => {
  cy.get(`${productName}`).click().then(() => {
    cy.get('button:contains("Remove")').then((removeButton) => {
      let numberOfItems
      cy.get(ShopingCartBadge.constShoppingCartBadge).then((value) => {
        numberOfItems = value[0].innerText
        expect(removeButton.length).to.be.eq(Number(numberOfItems));
      })
    })
  })
});
