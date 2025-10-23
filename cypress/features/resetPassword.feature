Feature: Reset password page

    Scenario: User should enter email address to send a password reset link
    Given Navigate to the website
    Then Enter email address
    | email_address                  |
    | random@random.com              |
    Then click the button to send password reset link