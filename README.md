# node-test-github-summary

![CI](https://github.com/nearform/node-test-github-summary/actions/workflows/ci.yml/badge.svg?event=push)

A Github Summary test reporter for the Node.js test runner

![Summary](docs/summary.png)

## Installation

```shell
npm i -D node-test-github-summary
```

## Usage

```shell
node --test --test-reporter node-test-github-summary --test-reporter-destination $GITHUB_STEP_SUMMARY
```

`$GITHUB_STEP_SUMMARY` is a variable that is available in GitHub Actions and points to the file that renders the summary.

You can also have a different test reporter output to *stdout* while still saving the JUnit report to a file:

```shell
node --test --test-reporter spec --test-reporter-destination stdout --test-reporter node-test-github-summary --test-reporter-destination $GITHUB_STEP_SUMMARY
```

If you already have something in the summary and only needs to append to it instead of replacing the existing file, you can save the output to a different file and then concatenate the results:

```shell
node --test --test-reporter node-test-github-summary --test-reporter-destination report.md
cat report.md >> $GITHUB_STEP_SUMMARY
```
