Feature: Requesting an Insecure Resource
    Scenario: Request the Insecure Resource
        When I retrieve the Insecure Resource
        Then I get an OK response
        And the Insecure Resource has details:
        | Answer | 42     |
        | Name   | Graham |
