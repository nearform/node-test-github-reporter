<h2>Node.js Test Results</h2>
<table><tr><th>Passed</th><th>Failed</th><th>Skipped</th><th>Duration</th></tr><tr><td>1</td><td>2</td><td>0</td><td>155ms</td></tr></table>
<h3>Details</h3>
<details>
  <summary>:x: calls a nonexistent method</summary>
  <blockquote>
    nonexistentMethod is not defined

Stack:
```
    at TestContext.<anonymous> (file:///Users/user/nearform/node-test-github-summary/test/resources/sample-tests/broken.test.js:5:3)
    at Test.runInAsyncScope (node:async_hooks:203:9)
    at Test.run (node:internal/test_runner/test:547:25)
    at Test.start (node:internal/test_runner/test:463:17)
    at startSubtest (node:internal/test_runner/harness:192:17)
```

  </blockquote>
</details>
<details>
  <summary>:x: module</summary>
  <blockquote>
    <details>
  <summary>:x: function</summary>
  <blockquote>
    <details>
  <summary>:x: behavior</summary>
  <blockquote>
    <details>
  <summary>:white_check_mark: asserts 1 === 1</summary>
  <blockquote>
    Test passed
  </blockquote>
</details>
<details>
  <summary>:x: fails</summary>
  <blockquote>
    Expected values to be strictly equal:

1 !== 2


Stack:
```
    at TestContext.<anonymous> (file:///Users/user/nearform/node-test-github-summary/test/resources/sample-tests/nested.test.js:12:16)
    at Test.runInAsyncScope (node:async_hooks:203:9)
    at Test.run (node:internal/test_runner/test:547:25)
    at Suite.processPendingSubtests (node:internal/test_runner/test:300:27)
    at Test.postRun (node:internal/test_runner/test:637:19)
    at Test.run (node:internal/test_runner/test:575:10)
    at async Promise.all (index 0)
    at async Suite.run (node:internal/test_runner/test:801:7)
    at async Promise.all (index 0)
    at async Suite.run (node:internal/test_runner/test:801:7)
```

  </blockquote>
</details>
  </blockquote>
</details>
  </blockquote>
</details>
  </blockquote>
</details>
<details>
  <summary>:white_check_mark: behavior</summary>
  <blockquote>
    <details>
  <summary>:leftwards_arrow_with_hook: skipped test</summary>
  <blockquote>
    Test skipped
  </blockquote>
</details>
  </blockquote>
</details>
