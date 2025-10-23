class BlazeDemo_ResetPassword {
    passwordReset(emailAddress){
        cy.xpath('//input[@type="email"]').should("be.visible").type(emailAddress)
    }
    button_sendPasswordResetLink(){
        cy.xpath('//button[@type="submit"]').click({force: true})
    }
    login_dashboard_home(){
        cy.contains("BlazeDemo").should("have.text", "BlazeDemo").click()
    }
    login_dashboard_register(){
        cy.contains("Register").should("have.text", "Register").click()
    }
    login_dashboard_login(){
        cy.contains("Login").should("have.text", "Login").click()
    }
}
const blazedemoResetPassword = new BlazeDemo_ResetPassword()
module.exports = blazedemoResetPassword