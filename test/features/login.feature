Feature: Login


    Scenario Outline: Invalid Login
        Given bingonline page is opened
        When user enters <loginName> <password>
        Then pop up modal with <errorMessage> is displayed

        Examples:
            | loginName | password | errorMessage|
            | TestloginName | TestP1245 | Invalid login name/password |

