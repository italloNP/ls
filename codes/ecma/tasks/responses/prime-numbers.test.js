const prime = require('./prime-numbers')

test('two plus two is four', () => {
  expect(prime(4)).toBe('2, 3, 5, 7')
  expect(prime(6)).toBe('2, 3, 5, 7, 11, 13')
})

test('two plus two is four', () => {
  expect(prime(2, 10)).toBe('2, 3, 5, 7')
  expect(prime(2, 20)).toBe('2, 3, 5, 7, 11, 13, 17, 19')
})

test('two plus two is four', () => {
  expect(prime(10, 2)).toBe('')
})
