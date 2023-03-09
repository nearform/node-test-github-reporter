import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('behavior', () => {
  it.skip('skipped test', () => {
    assert.strictEqual(1, 2)
  })
})
