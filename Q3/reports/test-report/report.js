$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\HostelWorld.feature");
formatter.feature({
  "line": 2,
  "name": "HomePage hostelworld",
  "description": "",
  "id": "homepage-hostelworld",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Web"
    },
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenario({
  "line": 14,
  "name": "Validate the searches in hostelword site",
  "description": "",
  "id": "homepage-hostelworld;validate-the-searches-in-hostelword-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    },
    {
      "line": 4,
      "name": "@UseCase1"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "access to link \"http://www.hostelworld.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hostelworld.com",
      "offset": 16
    }
  ],
  "location": "HomePage.OpenBrowser(String)"
});
formatter.result({
  "duration": 12450954374,
  "status": "passed"
});
formatter.step({
  "line": 7,
  "name": "resolution is \"0\" \"0\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 15
    },
    {
      "val": "0",
      "offset": 19
    }
  ],
  "location": "HomePage.resolutionPage(Integer,Integer)"
});
formatter.result({
  "duration": 1182069766,
  "status": "passed"
});
formatter.step({
  "line": 8,
  "name": "insert word to find \"Dublin, Ireland\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 21
    }
  ],
  "location": "HomePage.InsertWord(String)"
});
formatter.result({
  "duration": 7393914757,
  "status": "passed"
});
formatter.step({
  "line": 9,
  "name": "click menu SotByName",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.ClickSort()"
});
formatter.result({
  "duration": 3197639887,
  "status": "passed"
});
formatter.step({
  "line": 10,
  "name": "validate the asort name result",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.AssertValues()"
});
formatter.result({
  "duration": 285775027,
  "status": "passed"
});
formatter.step({
  "line": 11,
  "name": "Close and Quit",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.CloseBrowser()"
});
formatter.result({
  "duration": 2165979883,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate the searches in hostelword site",
  "description": "",
  "id": "homepage-hostelworld;validate-the-searches-in-hostelword-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    },
    {
      "line": 4,
      "name": "@UseCase1"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "access to link \"http://www.hostelworld.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hostelworld.com",
      "offset": 16
    }
  ],
  "location": "HomePage.OpenBrowser(String)"
});
formatter.result({
  "duration": 10731064807,
  "status": "passed"
});
formatter.step({
  "line": 7,
  "name": "resolution is \"412\" \"732\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "412",
      "offset": 15
    },
    {
      "val": "732",
      "offset": 21
    }
  ],
  "location": "HomePage.resolutionPage(Integer,Integer)"
});
formatter.result({
  "duration": 1269551722,
  "status": "passed"
});
formatter.step({
  "line": 8,
  "name": "insert word to find \"Dublin, Ireland\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 21
    }
  ],
  "location": "HomePage.InsertWord(String)"
});
formatter.result({
  "duration": 9403127513,
  "status": "passed"
});
formatter.step({
  "line": 9,
  "name": "click menu SotByName",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.ClickSort()"
});
formatter.result({
  "duration": 1829748395,
  "status": "passed"
});
formatter.step({
  "line": 10,
  "name": "validate the asort name result",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.AssertValues()"
});
formatter.result({
  "duration": 274989792,
  "status": "passed"
});
formatter.step({
  "line": 11,
  "name": "Close and Quit",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.CloseBrowser()"
});
formatter.result({
  "duration": 1533361875,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate the searches in hostelword site",
  "description": "",
  "id": "homepage-hostelworld;validate-the-searches-in-hostelword-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    },
    {
      "line": 4,
      "name": "@UseCase1"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "access to link \"http://www.hostelworld.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hostelworld.com",
      "offset": 16
    }
  ],
  "location": "HomePage.OpenBrowser(String)"
});
formatter.result({
  "duration": 8806433168,
  "status": "passed"
});
formatter.step({
  "line": 7,
  "name": "resolution is \"768\" \"1024\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "768",
      "offset": 15
    },
    {
      "val": "1024",
      "offset": 21
    }
  ],
  "location": "HomePage.resolutionPage(Integer,Integer)"
});
formatter.result({
  "duration": 1186182407,
  "status": "passed"
});
formatter.step({
  "line": 8,
  "name": "insert word to find \"Dublin, Ireland\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 21
    }
  ],
  "location": "HomePage.InsertWord(String)"
});
formatter.result({
  "duration": 5936576626,
  "status": "passed"
});
formatter.step({
  "line": 9,
  "name": "click menu SotByName",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.ClickSort()"
});
formatter.result({
  "duration": 2050817873,
  "status": "passed"
});
formatter.step({
  "line": 10,
  "name": "validate the asort name result",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.AssertValues()"
});
formatter.result({
  "duration": 168992153,
  "status": "passed"
});
formatter.step({
  "line": 11,
  "name": "Close and Quit",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.CloseBrowser()"
});
formatter.result({
  "duration": 1197441219,
  "status": "passed"
});
});