Feature: Ryze Test

 Background: Login 
        

        


    Scenario: Login and validate menu list then navigate to Forms.
        Given ryze page is opened
        When user enters <loginName> <password>
        Then check tech study menu list
        And navigate to forms view

        Examples:
            | loginName | password |
            | testteamtechtest | Ryz3T3st!x |

        
        

        
