const {Given, Then} = require('@badeball/cypress-cucumber-preprocessor')
const blazedemoRegister = require('/Users/Benjamin/Documents/CI_CD_Matrix_2/cypress/pageObjects/object_register')

Given("Navigate to the website", () => {
    cy.register_url()
})
Then("Fill out the registration form", (datatable) => {
    datatable.hashes().forEach(element => {
        blazedemoRegister.registration_info(element.Name, element.Company, element.EMail_Address, element.Password, element.Confirm_Password)
    })
})
Then("Click the register button", () => {
    blazedemoRegister.register_button()
})