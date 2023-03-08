import { it } from 'node:test'

it('calls a nonexistent method', () => {
  // eslint-disable-next-line no-undef
  nonexistentMethod()
})
