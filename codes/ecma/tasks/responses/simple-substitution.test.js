const substitution = require('./simple-substitution')

test('converting to basic leet', () => {
  expect(substitution('lorem ipsum', 'aegiost', '4361057')).toBe('l0r3m 1p5um')
})
