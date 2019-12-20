$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tubelogin.feature");
formatter.feature({
  "line": 1,
  "name": "Check Login of Eurekatube through Maven Project",
  "description": "",
  "id": "check-login-of-eurekatube-through-maven-project",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Login Eureka tube",
  "description": "//Scenario: Login with Valid credential in eurekatube",
  "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Login Page\"\u003cbrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Fill required user\"\u003cusername\u003e\" and \"\u003cpassword\u003e\" info",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;",
  "rows": [
    {
      "cells": [
        "browser",
        "username",
        "password"
      ],
      "line": 12,
      "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;;1"
    },
    {
      "cells": [
        "chrome",
        "abhishek.designmate@gmail.com",
        "password"
      ],
      "line": 13,
      "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;;2"
    },
    {
      "cells": [
        "firefox",
        "qa.lead@designmate.com",
        "dm@1234"
      ],
      "line": 14,
      "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;;3"
    },
    {
      "cells": [
        "ie",
        "beroze@designmate.com",
        "dm@1234"
      ],
      "line": 15,
      "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Test Login Eureka tube",
  "description": "//Scenario: Login with Valid credential in eurekatube",
  "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Login Page\"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Fill required user\"abhishek.designmate@gmail.com\" and \"password\" info",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 16
    }
  ],
  "location": "TubeSteps.Open_Login_Page(String)"
});
formatter.result({
  "duration": 28571749200,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_signin()"
});
formatter.result({
  "duration": 144112100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhishek.designmate@gmail.com",
      "offset": 19
    },
    {
      "val": "password",
      "offset": 55
    }
  ],
  "location": "TubeSteps.Fill_required_user_and_info(String,String)"
});
formatter.result({
  "duration": 3230686600,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_login()"
});
formatter.result({
  "duration": 71380000,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Close_browser()"
});
formatter.result({
  "duration": 618370200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test Login Eureka tube",
  "description": "//Scenario: Login with Valid credential in eurekatube",
  "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Login Page\"firefox\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Fill required user\"qa.lead@designmate.com\" and \"dm@1234\" info",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 16
    }
  ],
  "location": "TubeSteps.Open_Login_Page(String)"
});
formatter.result({
  "duration": 30498459600,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_signin()"
});
formatter.result({
  "duration": 250018300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa.lead@designmate.com",
      "offset": 19
    },
    {
      "val": "dm@1234",
      "offset": 48
    }
  ],
  "location": "TubeSteps.Fill_required_user_and_info(String,String)"
});
formatter.result({
  "duration": 3099146700,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_login()"
});
formatter.result({
  "duration": 226464300,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Close_browser()"
});
formatter.result({
  "duration": 4134483800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test Login Eureka tube",
  "description": "//Scenario: Login with Valid credential in eurekatube",
  "id": "check-login-of-eurekatube-through-maven-project;test-login-eureka-tube;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open Login Page\"ie\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Fill required user\"beroze@designmate.com\" and \"dm@1234\" info",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 16
    }
  ],
  "location": "TubeSteps.Open_Login_Page(String)"
});
formatter.result({
  "duration": 4197434500,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_signin()"
});
formatter.result({
  "duration": 497081800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "beroze@designmate.com",
      "offset": 19
    },
    {
      "val": "dm@1234",
      "offset": 47
    }
  ],
  "location": "TubeSteps.Fill_required_user_and_info(String,String)"
});
