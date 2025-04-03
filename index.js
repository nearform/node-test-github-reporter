import { summary, error as annotateError } from '@actions/core'
import ErrorStackParser from 'error-stack-parser'
import parseReport from 'node-test-parser'
import url from 'url'
import StackUtils from 'stack-utils'

const workspace = process.env.GITHUB_WORKSPACE
const workspacePrefixRegex = new RegExp(`^${workspace}`)

const stackUtils = new StackUtils({
  cwd: process.cwd(),
  internals: StackUtils.nodeInternals()
})

export default async function* githubSummaryReporter(source) {
  const report = await parseReport(source)
  const tests = report.tests

  const statistics = {
    passed: 0,
    failed: 0,
    skipped: 0
  }

  const tableHeader = [
    { data: 'Passed', header: true },
    { data: 'Failed', header: true },
    { data: 'Skipped', header: true },
    { data: 'Duration', header: true }
  ]

  const reportDetails = testDetails(statistics, {tests: tests})

  const tableRow = [
    `${statistics.passed}`,
    `${statistics.failed}`,
    `${statistics.skipped}`,
    `${parseInt(report.duration)}ms`
  ]

  summary
    .addHeading('Node.js Test Results', 2)
    .addTable([tableHeader, tableRow])
    .addHeading('Details', 3)
    .addRaw(reportDetails)
    .write()

  yield ''
}

function testDetails(statistics, test) {
  if (!test.tests.length) {
    return formatMessage(statistics, test)
  }

  return test.tests
    .map(test =>
      formatDetails(
        `${statusEmoji(test)} ${test.name}`,
        testDetails(statistics, test)
      )
    )
    .join('\n')
}

function formatMessage(statistics, test) {
  if (test.skip) {
    statistics.skipped++
    return 'Test skipped'
  }

  const error = test.error || test.failure
  if (!error) {
    statistics.passed++
    return 'Test passed'
  }
  statistics.failed++

  let errorMessage = '\n\n```\n' + error.message + '\n```'

  if (test.diagnostic) {
    errorMessage += `\n\n${test.diagnostic}`
  }

  if (error.cause && error.cause.stack) {
    const cleanStack = stackUtils.clean(error.cause.stack)
    errorMessage += `\n\nStack:\n\`\`\`\n${cleanStack}\`\`\`\n`

    const errorLocation = findErrorLocation(error.cause)
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

export function getSafePath(path) {
  if (path.startsWith('file')) {
    return path
  }
  return url.pathToFileURL(path).href
}

export function getRelativeFilePath(path) {
  const filePath = getSafePath(path)
  return new URL(filePath).pathname.replace(workspacePrefixRegex, '')
}
