<h2>Node.js Test Results</h2>
<table><tr><th>Passed</th><th>Failed</th><th>Skipped</th><th>Duration</th></tr><tr><td>1</td><td>2</td><td>0</td><td>128ms</td></tr></table>
<h3>Details</h3>
<details>
  <summary>:x: broken.test.js</summary>
  <blockquote>
    <details>
  <summary>:x: calls a nonexistent method</summary>
  <blockquote>
    nonexistentMethod is not defined

Stack:
```
    at Object.<anonymous> (file:///Users/user/nearform/node-test-github-reporter/test/resources/sample-tests/broken.test.js:5:3)
    at ItTest.runInAsyncScope (node:async_hooks:203:9)
    at ItTest.run (node:internal/test_runner/test:549:25)
    at ItTest.start (node:internal/test_runner/test:465:17)
    at run (node:internal/test_runner/harness:180:15)
    at cb (node:internal/test_runner/harness:185:5)
    at file:///Users/user/nearform/node-test-github-reporter/test/resources/sample-tests/broken.test.js:3:1
    at ModuleJob.run (node:internal/modules/esm/module_job:193:25)
```

  </blockquote>
</details>
  </blockquote>
</details>
<details>
  <summary>:x: nested.test.js</summary>
  <blockquote>
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
    at Object.<anonymous> (file:///Users/user/nearform/node-test-github-reporter/test/resources/sample-tests/nested.test.js:12:16)
    at ItTest.runInAsyncScope (node:async_hooks:203:9)
    at ItTest.run (node:internal/test_runner/test:549:25)
    at Suite.processPendingSubtests (node:internal/test_runner/test:304:27)
    at ItTest.postRun (node:internal/test_runner/test:634:19)
    at ItTest.run (node:internal/test_runner/test:577:10)
    at async Promise.all (index 0)
    at async Suite.run (node:internal/test_runner/test:805:7)
    at async Promise.all (index 0)
    at async Suite.run (node:internal/test_runner/test:805:7)
```

  </blockquote>
</details>
  </blockquote>
</details>
  </blockquote>
</details>
  </blockquote>
</details>
  </blockquote>
</details>
<details>
  <summary>:white_check_mark: skip.test.js</summary>
  <blockquote>
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
  </blockquote>
</details>
