import assert from 'node:assert'
import { describe, it } from 'node:test'

describe('module', () => {
  describe('function', () => {
    describe('behavior', () => {
      it('asserts 1 === 1', () => {
        assert.strictEqual(1, 1)
      })

      it('fails', () => {
        assert.strictEqual(1, 2)
      })
    })
  })
})
