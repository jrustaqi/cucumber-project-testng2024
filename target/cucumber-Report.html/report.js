$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AddNewCustomer.feature");
formatter.feature({
  "line": 2,
  "name": "Adding new customer functionality validation",
  "description": "",
  "id": "adding-new-customer-functionality-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to add new customer information",
  "description": "",
  "id": "adding-new-customer-functionality-validation;user-should-be-able-to-add-new-customer-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the CodeFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the Sighin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the Customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the Add Customer menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Add New Customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters the fullName as \"\u003cfullname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the compny as \"\u003ccompany\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters the email as \"\u003cemail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the phone as \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters the address as \"\u003caddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters the city as \"\u003ccity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters the zipCode as \"\u003czipCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters the country as \"\u003ccountry\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters the group as \"\u003cgroup\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on the save button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see the new inserted customer info",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "adding-new-customer-functionality-validation;user-should-be-able-to-add-new-customer-information;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "fullname",
        "company",
        "email",
        "phone",
        "address",
        "city",
        "zipCode",
        "country",
        "group"
      ],
      "line": 26,
      "id": "adding-new-customer-functionality-validation;user-should-be-able-to-add-new-customer-information;;1"
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "cucumberTestNG",
        "Apple",
        "apple@aple.com",
        "44444444444",
        "Home",
        "Moscow",
        "33333",
        "Romania",
        "Lazy"
      ],
      "line": 27,
      "id": "adding-new-customer-functionality-validation;user-should-be-able-to-add-new-customer-information;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3022877000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should be able to add new customer information",
  "description": "",
  "id": "adding-new-customer-functionality-validation;user-should-be-able-to-add-new-customer-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the CodeFios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as \"demo@codefios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on the Sighin button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the Customer menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on the Add Customer menu",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on Add New Customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters the fullName as \"cucumberTestNG\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters the compny as \"Apple\"",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User enters the email as \"apple@aple.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters the phone as \"44444444444\"",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters the address as \"Home\"",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters the city as \"Moscow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User enters the zipCode as \"33333\"",
  "matchedColumns": [
    8
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enters the country as \"Romania\"",
  "matchedColumns": [
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters the group as \"Lazy\"",
  "matchedColumns": [
    10
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User clicks on the save button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should see the new inserted customer info",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerStepDefination.user_is_on_the_CodeFios_login_page()"
});
formatter.result({
  "duration": 2808975600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@codefios.com",
      "offset": 29
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3110955000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3100103100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_the_Sighin_button()"
});
formatter.result({
  "duration": 11845584300,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_should_land_on_dashboard_page()"
});
formatter.result({
  "duration": 230479401,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_the_Customer_menu()"
});
formatter.result({
  "duration": 3065386199,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_the_Add_Customer_menu()"
});
formatter.result({
  "duration": 5271234101,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_should_land_on_Add_New_Customer_page()"
});
formatter.result({
  "duration": 155684700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumberTestNG",
      "offset": 29
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_fullName_as(String)"
});
formatter.result({
  "duration": 99865700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 27
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_compny_as(String)"
});
formatter.result({
  "duration": 135539099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple@aple.com",
      "offset": 26
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_email_as(String)"
});
formatter.result({
  "duration": 77232300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "44444444444",
      "offset": 26
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_phone_as(String)"
});
formatter.result({
  "duration": 81237600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 28
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_address_as(String)"
});
formatter.result({
  "duration": 66392899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Moscow",
      "offset": 25
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_city_as(String)"
});
formatter.result({
  "duration": 68480100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33333",
      "offset": 28
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_zipCode_as(String)"
});
formatter.result({
  "duration": 67927600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Romania",
      "offset": 28
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_country_as(String)"
});
formatter.result({
  "duration": 110806800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lazy",
      "offset": 26
    }
  ],
  "location": "AddCustomerStepDefination.user_enters_the_group_as(String)"
});
formatter.result({
  "duration": 2133087099,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_clicks_on_the_save_button()"
});
formatter.result({
  "duration": 75801391100,
  "status": "passed"
});
formatter.match({
  "location": "AddCustomerStepDefination.user_should_see_the_new_inserted_customer_info()"
});
formatter.result({
  "duration": 499583400,
  "status": "passed"
});
formatter.after({
  "duration": 1899370200,
  "status": "passed"
});
});