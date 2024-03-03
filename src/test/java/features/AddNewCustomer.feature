
Feature: Adding new customer functionality validation
	@Regression
	Scenario Outline: User should be able to add new customer information 
		Given User is on the CodeFios login page
		When User enters the username as "<username>"
		When User enters the password as "<password>"
		And User clicks on the Sighin button
		Then User should land on dashboard page
		When User clicks on the Customer menu
		And User clicks on the Add Customer menu
		Then User should land on Add New Customer page
		When User enters the fullName as "<fullname>"
		When User enters the compny as "<company>"
		When User enters the email as "<email>"
		When User enters the phone as "<phone>"
		When User enters the address as "<address>"
		When User enters the city as "<city>"
		When User enters the zipCode as "<zipCode>"
		When User enters the country as "<country>"
		When User enters the group as "<group>"
		And User clicks on the save button
		Then User should see the new inserted customer info
		
		Examples:
		| username          | password | fullname 			| company | email          | phone       | address | city   | zipCode | country | group |
		| demo@codefios.com | abc123   | cucumberTestNG | Apple   | apple@aple.com | 44444444444 | Home    |Moscow  | 33333   | Romania | Lazy  |		