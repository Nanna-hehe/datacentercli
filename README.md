# sample-automation-test-import

Sample CI/CD pipeline using [AgileTest CLI](https://agiletestapp.github.io/agiletest-cli/) for [AgileTest App](https://agiletest.app)

For more info on how to use the CLI & integrate into your CI/CD pipeline, refer to:

* [AgileTest CLI](https://agiletestapp.github.io/agiletest-cli/)
* [CI/CD Integration Docs](https://agiletestapp.github.io/agiletest-cli/ci-cd/)

## Sample code, test & upload result workflow

In this sample repo, we have a simple calculator function written in Python, Javascript, Java and Dotnet.

In the workflow, we do the following:

* Run the test for the function using frameworks: `behave`, `cucumber`, `junit`, `nunit`, `robot`, `testng`, `xunit`
* The test results are exported to `./reports` directory in JSON or XML format
* Upload the test results artifacts to Github Artifacts
* Upload the test results to [AgileTest App](https://agiletest.app) using [AgileTest CLI](https://agiletestapp.github.io/agiletest-cli/) with AgileTest CLI Docker image [ghcr.io/agiletestapp/agiletest-cli](https://github.com/agiletestapp/agiletest-cli/pkgs/container/agiletest-cli)

The source code of this flow: [test-and-upload-report.yml](.github/workflows/test-and-upload-report.yml).
