Feature: The following Test with check The functionality of adding balance to wallet
Scenario: Add some balance to WebWallet with 0 Balance in place
    Given Request is prepared with 'GET' to '/initiate/0'
    When request is performed
    Given user lands on home page
    Then user checks there is 'Balance: 0' in place
    Then provides 100 balance to add
    When user submit 'add Balance'
    Then user checks there is 'Balance: 100' in place
    Then Success Notification is shown


Scenario: Add some balance to WebWallet with 500 Balance in place
    Given Request is prepared with 'GET' to '/initiate/500'
    When request is performed
    Given user lands on home page
    Then user checks there is 'Balance: 500' in place
    Then provides 1000 balance to add
    When user submit 'add Balance'
    Then user checks there is 'Balance: 1500' in place
    Then Success Notification is shown

