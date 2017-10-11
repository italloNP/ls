const ipsumGenerator = require('./lorem-ipsum-generator')

describe('Lorem Ipsum', () => {
  test('generating the first 3 words', () => {
    expect(ipsumGenerator(3)).toBe('lorem ipsum dolor')
  })
})
