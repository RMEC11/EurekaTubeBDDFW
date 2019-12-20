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
  "duration": 30669566600,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_signin()"
});
formatter.result({
  "duration": 129658300,
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
  "duration": 3206758700,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_login()"
});
formatter.result({
  "duration": 59617200,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Close_browser()"
});
formatter.result({
  "duration": 594914200,
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
  "duration": 31571924400,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_signin()"
});
formatter.result({
  "duration": 250009200,
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
  "duration": 3123528000,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_login()"
});
formatter.result({
  "duration": 228063700,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Close_browser()"
});
formatter.result({
  "duration": 2759902600,
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
  "duration": 6861683000,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_signin()"
});
formatter.result({
  "duration": 481526000,
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
formatter.result({
  "duration": 143816169900,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_login()"
});
formatter.result({
  "duration": 397016300,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Close_browser()"
});
formatter.result({
  "duration": 552943700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login with Valid credential in eurekatube",
  "description": "",
  "id": "check-login-of-eurekatube-through-maven-project;login-with-valid-credential-in-eurekatube",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Open Login Page in Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Click on signin",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Fill required info",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Search for topic",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Open logout",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "TubeSteps.Open_Login_Page_in_Browser()"
});
formatter.result({
  "duration": 27480456700,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_signin()"
});
formatter.result({
  "duration": 132101300,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Fill_required_info()"
});
formatter.result({
  "duration": 3192262000,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Click_on_login()"
});
formatter.result({
  "duration": 66199100,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Search_for_topic()"
});
formatter.result({
  "duration": 8829061700,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Open_logout()"
});
formatter.result({
  "duration": 6785709200,
  "status": "passed"
});
formatter.match({
  "location": "TubeSteps.Close_browser()"
});
formatter.result({
  "duration": 596159100,
  "status": "passed"
});
});