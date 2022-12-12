Feature: Heroku app Login Scenario
    
    Scenario: Add Item to cart
        Given I am on the front page
        When I try to login with username "hendri.antomy" and password "1234"
        Then I am successfully logged in with username "hendri.antomy"
        When I add item "Samsung galaxy s6" to cart
        Then I log out
