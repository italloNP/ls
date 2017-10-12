const ipsumGenerator = require('./lorem-ipsum-generator')

describe('Lorem Ipsum', () => {
  test('generating the first 3 words', () => {
    expect(ipsumGenerator(3))
      .toBe('lorem ipsum dolor')
  })

  test.skip('generating the first 10 words', () => {
    expect(ipsumGenerator(10))
      .toBe('lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do')
  })
})
