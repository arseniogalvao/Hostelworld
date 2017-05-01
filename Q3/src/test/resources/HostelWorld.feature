@Web @Search @HomePage
Feature: HomePage hostelworld

  @UseCase1
  Scenario Outline: Validate the searches in hostelword site
    Given access to link "http://www.hostelworld.com"
    When resolution is "<sizeWidth>" "<sizeHeight>"
    And insert word to find "<textFind>"
    And click menu SotByName
    And validate the asort name result
    Then Close and Quit
    Examples:
      | testcase | sizeWidth | sizeHeight | textFind        |
      | 1        | 0         | 0          | Dublin, Ireland |
      | 2        | 412       | 732        | Dublin, Ireland |
      | 3        | 768       | 1024       | Dublin, Ireland |