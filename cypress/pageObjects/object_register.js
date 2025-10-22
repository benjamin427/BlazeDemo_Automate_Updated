class BlazeDemo_Register{
    registration_info(name, company, emailAddress, password, confirmPassword){
        cy.xpath('//input[@name="name"]').should("be.visible").type(name)
        cy.xpath('//input[@name="company"]').should("be.visible").type(company)
        cy.xpath('//input[@name="email"]').should("be.visible").type(emailAddress)
        cy.xpath('//input[@name="password"]').should("be.visible").type(password)
        cy.xpath('//input[@name="password_confirmation"]').should("be.visible").type(confirmPassword)
    }
    register_button(){
        cy.xpath('//button[@type="submit"]').should("be.visible").click()
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

const blazedemoRegister = new BlazeDemo_Register()
module.exports = blazedemoRegister