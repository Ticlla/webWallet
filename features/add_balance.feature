Feature: The following Test with check The functionality of adding balance to wallet
Scenario: Add some balance to WebWallet
    Given user lands on home page
    Then user checks there is 'Balance: 0' in place
    Then provides 100 balance to add
    When user submit 'add Balance'
    Then user checks there is 'Balance: 100' in place