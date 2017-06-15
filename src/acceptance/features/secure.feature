Feature: Requesting a Secure Resource
    Scenario: Request the Secure Resource when not authenticated
        When I retrieve the Secure Resource
        Then I get a Unauthorized response
