<h2>Node.js Test Results</h2>
<table><tr><th>Passed</th><th>Failed</th><th>Skipped</th><th>Duration</th></tr><tr><td>1</td><td>2</td><td>0</td><td>161ms</td></tr></table>
<h3>Details</h3>
<details>
  <summary>:x: calls a nonexistent method</summary>
  <blockquote>
    nonexistentMethod is not defined

Stack:
```
TestContext.<anonymous> (file://test/resources/sample-tests/broken.test.js:5:3)
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
1 !== 2
    TestContext.<anonymous> (file://test/resources/sample-tests/nested.test.js:12:16)
    async Promise.all (index 0)
    async Promise.all (index 0)
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
