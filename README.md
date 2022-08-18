# Vansah Github Action
This plugin will help the automation framework to upload the test results generated by the framework and based on the results in .xml file it will make the test cases PASS/FAIL.

## Supports
  TestNG, Junit, Nunit 

## Example usage

uses: testpointcorp/vansah-action@v1
with:
  vansahToken: ${{ secrets.VANSAHTOKEN }} 
  testFormat: "testng"
  testPaths: "**/output/*.xml"
  Issue_TestFolders: "JIRA_ISSUEKEY"
  comment: "Build #223"
 