const fibonacci = require('./fibonacci')

describe('Fibonacci series', () => {

  test('making the first 4 numbers', () => {
    expect(fibonacci(4)).toBe('0, 1, 1, 2')
  })

  test.skip('making the first 6 numbers', () => {
    expect(fibonacci(6)).toBe('0, 1, 1, 2, 3, 5')
  })
  
})
