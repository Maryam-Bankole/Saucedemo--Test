describe('Login Test for Saucedemo', () => {

  let homepageElements

  before(() =>{
    cy.fixture("elementLocators.json").then(selector =>{
      homepageElements = selector.homepage
    })
  })

  it('Test for sucessful Login', () => {
    cy.visit('/')
    cy.TypeTextCommand(homepageElements.usernameField, 'standard_user')
    cy.TypeTextCommand(homepageElements.passwordField, 'secret_sauce' )
    cy.clickElement(homepageElements.loginbuttonField)
    cy.contains('Products')
  })

  it('Test for locked_out_user', () => {
    cy.visit('/')
    cy.TypeTextCommand(homepageElements.usernameField, 'locked_out_user')
    cy.TypeTextCommand(homepageElements.passwordField, 'secret_sauce' )
    cy.get(homepageElements.loginbuttonField).click()
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
  })

  it('Test for problem_user', () => {
    cy.visit('/')
    cy.TypeTextCommand(homepageElements.usernameField, 'problem_user')
    cy.TypeTextCommand(homepageElements.passwordField, 'secret_sauce' )
    cy.get(homepageElements.loginbuttonField).click()
    cy.contains('Products')
  })
  
    it('Test for performance_glitch_user', () =>{
      cy.visit('/')
      cy.TypeTextCommand(homepageElements.usernameField, 'performance_glitch_user')
      cy.TypeTextCommand(homepageElements.passwordField, 'secret_sauce' )
      cy.get(homepageElements.loginbuttonField).click()
      cy.contains('Products')
    })

    it('Test for error_user', () =>{
      cy.visit('/')
      cy.TypeTextCommand(homepageElements.usernameField, 'error_user')
      cy.TypeTextCommand(homepageElements.passwordField, 'secret_sauce' )
      cy.get(homepageElements.loginbuttonField).click()
      cy.contains('Products')
    })

    it.skip('Test for visual_user', () =>{
      cy.visit('/')
      cy.TypeTextCommand(homepageElements.usernameField, 'visual_user')
      cy.TypeTextCommand(homepageElements.passwordField, 'secret_sauce' )
      cy.get(homepageElements.loginbuttonField).click()
      cy.contains('Products')
    })
  })
