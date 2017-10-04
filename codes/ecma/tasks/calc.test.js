// CJS:
const calc = require('./calc')
// ESM:
// import { calc } from './calc'

test('adds 1 + 1 to equal 2', () => {
  expect(calc(1, 1, '+')).toBe(2)
})

test('multiply 1 * 1 to equal 1', () => {
  expect(calc(1, 1, '*')).toBe(1)
})
