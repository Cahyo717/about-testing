Feature: Heroku app Login Scenario

    # Scenario: Successfully login using correct username password
    #     Given I am on the front page
    #     When I try to login with correct credential
    #     Then I am successfully logged in

    # Scenario: Login with parameterized data
    #     Given I am on the front page
    #     When I try to login with username "hendri.antomy" and password "1234"
    #     Then I am successfully logged in with username "hendri.antomy"


    # Scenario Outline: Login with parameterized data
    #     Given I am on the front page
    #     When I try to login with username "<username>" and password "<password>"
    #     Then I am successfully logged in with username "<username>"
    #     Examples:
    #         | Username        | Password |
    #         | hendri.antomy   | 1234     |
    #         | wibowo.bullseye | bullseye |

    
    Scenario: Add Item to cart
        Given I am on the front page
        When I try to login with username "hendri.antomy" and password "1234"
        Then I am successfully logged in with username "hendri.antomy"
        When I add item "Samsung galaxy s6" to cart
        Then I log out
