## Cypress class

## Element locators
cy.get()
cy.contains().should('be.visible')

## Page object model

## fixtures folder: where we keep our test data

nth-child
nth-of-type
HOOKS: before hook; before each hook; after hook; after each hook
Assert:
1. Stops execution immediately if the assertion fails.
2. Used when a failed condition makes further execution meaningless.
3. Example: If a login test fails due to incorrect credentials, there’s no need to proceed with testing the dashboard.
4. Common in unit tests and critical functional tests.
Example: cy.get('#username').should('have.value', 'testuser'); // If this fails, test execution stops.

Verify: 
1. Continues execution even if the verification fails.
2. Used when multiple checks are needed, and failure of one check shouldn't stop other verifications.
3. Common in UI automation where multiple validations are needed.

When to use Assert and Verify:
Use ASSERT for critical conditions that should not proceed if failed.
Use VERIFY when you want to log failures but still check other conditions.

You can name homepageElement to anything you like(Do not cram it but you need to know it)
