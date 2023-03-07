import parseReport from 'node-test-parser'
import { summary } from '@actions/core'

export default async function* githubSummaryReporter(source) {
  const reportData = await parseReport(source)

  const tableHeader = [
    { data: 'Passed', header: true },
    { data: 'Failed', header: true },
    { data: 'Skipped', header: true },
    { data: 'Duration', header: true }
  ]

  const tableRow = [`test`, `test`, `test`, `${reportData.duration}`]

  yield summary
    .addHeading('Node.js Test Results', 2)
    .addTable([tableHeader, tableRow])
    .stringify()
}
