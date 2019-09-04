Feature: Get Balance from Non UI

Scenario: Get Balance when there is 0 in place
    Given Request is prepared with 'GET' to 'initiate/100'
    When request is performed
    Given Request is prepared with 'GET' to 'getBalance'
    When request is performed
    Then I receive response http with 200 
    Then Balance should be 100