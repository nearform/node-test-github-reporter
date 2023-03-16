# node-test-github-reporter

![CI](https://github.com/nearform/node-test-github-reporter/actions/workflows/ci.yml/badge.svg?event=push)

A GitHub test reporter for the Node.js test runner

![Summary](docs/summary.png)

![Annotation](docs/annotation.png)

## Installation

```shell
npm i -D node-test-github-reporter
```

## Usage

```shell
node --test --test-reporter node-test-github-reporter
```

You can use it in conjunction with another test report to also get the output in the logs:

```shell
node --test --test-reporter spec --test-reporter-destination stdout --test-reporter node-test-github-reporter --test-reporter-destination stdout
```
