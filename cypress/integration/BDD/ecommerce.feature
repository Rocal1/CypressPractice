Feature: End to End Ecommerce Validation


@Regression
Scenario: Ecommerce products delivery
Given I open Ecommerce page
When I add items to Cart
And Validate the total prices
Then select the country submit and verify Thank you!

@Smoke
Scenario: Filling the form to shop
Given I open Ecommerce page
When I fill the form details
    |Name    |Gender    |
    |Rodrigo |Male      |
    |Sara    |Female    |
Then Validate the form behaviour
And Select the shop page
