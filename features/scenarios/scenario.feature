@testCase
Feature: Demoqa

    
    @click
    Scenario Outline: Button Page
        Given I am on the front page
        When I choose element
        When I click buttons
        When I click "Double Click"
        When I click "Right Click"
        When I click "click me"

    @drop
    Scenario Outline: Drag and Drop Page
        Given I am on the front page
        When I choose interactions
        When I choose droppable
        When I interacting drag and drop
        Then Confirm droped on drop area
