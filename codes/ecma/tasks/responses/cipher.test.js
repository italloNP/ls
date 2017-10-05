const rot = require('./cipher')

test('rot2', () => {
  expect(rot('abc', 2)).toBe('cde')
  expect(rot('xyz', 2)).toBe('zab')
})

test('rot13', () => {
  expect(rot('abc', 13)).toBe('')
  expect(rot('xyz', 13)).toBe('')
})
