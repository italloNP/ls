const validator = require('./validator')

describe('Validator', () => {
  test('validating check digit of 123456789', () => {
    expect(validator.cpf('12345678909')).toBe(true)
  })

  test('validating check digit of 987654321', () => {
    expect(validateCpf('98765432100')).toBe(true)
  })
})
