import { summary, error as annotateError } from '@actions/core'
import ErrorStackParser from 'error-stack-parser'
import parseReport from 'node-test-parser'

const workspace = process.env.GITHUB_WORKSPACE
const workspacePrefixRegex = new RegExp(`^${workspace}`)

export default async function* githubSummaryReporter(source) {
  const report = await parseReport(source)
  const tests = report.tests

  const tableHeader = [
    { data: 'Passed', header: true },
    { data: 'Failed', header: true },
    { data: 'Skipped', header: true },
    { data: 'Duration', header: true }
  ]

  const tableRow = [
    `${tests.filter(s => !s.error && !s.failure && !s.skip).length}`,
    `${tests.filter(s => s.error || s.failure).length}`,
    `${tests.filter(s => s.skip).length}`,
    `${parseInt(report.duration)}ms`
  ]

  const reportDetails = tests
    .map(test =>
      formatDetails(`${statusEmoji(test)} ${test.name}`, testDetails(test))
    )
    .join('\n')

  summary
    .addHeading('Node.js Test Results', 2)
    .addTable([tableHeader, tableRow])
    .addHeading('Details', 3)
    .addRaw(reportDetails)
    .write()

  yield ''
}

function testDetails(test) {
  if (!test.tests.length) {
    return formatMessage(test)
  }

  return test.tests
    .map(test =>
      formatDetails(`${statusEmoji(test)} ${test.name}`, testDetails(test))
    )
    .join('\n')
}

function formatMessage(test) {
  if (test.skip) {
    return 'Test skipped'
  }

  const error = test.error || test.failure
  if (!error) {
    return 'Test passed'
  }

  let errorMessage = error.message

  if (test.diagnostic) {
    errorMessage += `\n\n${test.diagnostic}`
  }

  if (error.stack) {
    errorMessage += `\n\nStack:\n\`\`\`\n${error.stack}\n\`\`\`\n`

    const errorLocation = findErrorLocation(error)
    if (errorLocation) {
      annotateError(error, errorLocation)
    }
  }

  return errorMessage
}

function formatDetails(heading, content) {
  return `<details>
  <summary>${heading}</summary>
  <blockquote>
    ${content}
  </blockquote>
</details>`
}

function statusEmoji(test) {
  if (test.failure || test.error) {
    return ':x:'
  } else if (test.skip) {
    return ':leftwards_arrow_with_hook:'
  } else {
    return ':white_check_mark:'
  }
}

function findErrorLocation(error) {
  const [firstFrame] = ErrorStackParser.parse(error)
  if (!firstFrame) {
    return
  }

  return {
    file: getRelativeFilePath(firstFrame.fileName),
    startLine: firstFrame.lineNumber,
    startColumn: firstFrame.columnNumber
  }
}

function getRelativeFilePath(path) {
  return new URL(path).pathname.replace(workspacePrefixRegex, '')
}
