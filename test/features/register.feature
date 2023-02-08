Feature: Login


    Scenario Outline: Invalid Login
        Given bingonline page is opened
        When user enters <loginName> <password>

        Examples:
            | loginName | password |
            | Test | TestP1 |

