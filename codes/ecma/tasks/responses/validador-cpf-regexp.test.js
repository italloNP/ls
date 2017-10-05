const validator = require('./validator')

test('validating cpf', () => {
  expect(validator.cpf('12345678909')).toBe(true)
})
