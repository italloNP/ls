const random = require('./random')

test('even and odd numbers', () => {
  let value = random.rand(100)
  expect(value).toBeGreaterThanOrEqual(0)
  expect(value).toBeLessThanOrEqual(100)

  let value = random.rand(10, 100)
  expect(value).toBeGreaterThanOrEqual(10)
  expect(value).toBeLessThanOrEqual(100)
})

test('even and odd numbers', () => {
  let names = ['Fulano', 'Beltrano' , 'Sicrano']
  let name = random.randArray(names)
  expect(names.includes(name)).toBe(true)
})
