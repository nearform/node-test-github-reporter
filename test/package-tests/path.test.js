import assert from 'node:assert'
import { describe, it } from 'node:test'
import { getRelativeFilePath, getSafePath } from '../../index.js'

describe('File Path', () => {
  it('should prefix file:// to file path', () => {
    const expected = 'file:///path/to/file.js'
    const actual = getSafePath('/path/to/file.js')
    assert.equal(expected, actual)
  })

  it('should not modify correctly constructed path', () => {
    const expected = 'file:///path/to/file.js'
    const actual = getSafePath('file:///path/to/file.js')
    assert.equal(expected, actual)
  })

  it('should not error with file path without file:// prefix', () => {
    const expected = 'path/to/file.js'
    const actualUrl = getRelativeFilePath('/path/to/file.js')
    assert.equal(actualUrl, expected)
  })
})
