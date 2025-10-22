const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const blazedemoResetPassword = require('/Users/Benjamin/Documents/CI_CD_Matrix_2/cypress/pageObjects/object_resetPassword')

Given("Navigate to the website", () => {
    cy.resetPassword_url()
})
Then("Enter email address", (datatable) => {
    datatable.hashes().forEach(element => {
        blazedemoResetPassword.passwordReset(element.email_address)
    })
})
Then("click the button to send password reset link", () => {
    blazedemoResetPassword.button_sendPasswordResetLink()
})