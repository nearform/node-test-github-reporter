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
node --test --test-reporter node-test-github-summary
```

You can use it in conjunction with another test report to also get the output in the logs:

```shell
node --test --test-reporter spec --test-reporter node-test-github-summary
```
