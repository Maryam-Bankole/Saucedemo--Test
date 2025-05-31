Cypress.Commands.add('TypeTextCommand', (locator, text) => {
    cy.get(locator).type(text)

})

Cypress.Commands.add('clickElement', (locator) =>{
    cy.get(locator).click()
})