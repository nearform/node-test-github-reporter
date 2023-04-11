#!/bin/bash
set -e

# Function to replace test duration with 0
remove_variables() {
  echo "$1" | sed -E 's/[0-9]+ms/0ms/g'
}

# Create temporary file to hold test summary
export GITHUB_STEP_SUMMARY=$(mktemp)

# Run sample tests and generate the report, ignoring errors
node --test --test-reporter ./index.js ./test/resources/sample-tests || true

# Compare with expected results
report=$(cat $GITHUB_STEP_SUMMARY)
expected=$(cat ./test/resources/expected.md)
diff <(remove_variables "$report") <(remove_variables "$expected")
