Feature: Check Login of Eurekatube through Maven Project

Scenario Outline:Test Login Eureka tube
//Scenario: Login with Valid credential in eurekatube
Given Open Login Page"<browser>"
Then Click on signin
When Fill required user"<username>" and "<password>" info
Then Click on login
And Close browser

Examples:
|browser|username|password|
|chrome|abhishek.designmate@gmail.com|password|
|firefox|qa.lead@designmate.com|dm@1234|
|ie|beroze@designmate.com|dm@1234|

Scenario: Login with Valid credential in eurekatube
Given Open Login Page in Browser
Then Click on signin
When Fill required info
Then Click on login
Then Search for topic 
Then Open logout 
And Close browser