const String = require('./text-util')

test('Converting a string into camel case', () => {
  let message = 'lorem ipsum\ndolor'
  expect(message.toCamelCase()).toBe('Lorem Ipsum\nDolor')
})

test('Applying bold', () => {
  let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  expect(text.applyBold('ipsum'))
    .toBe('Lorem <b>ipsum</b> dolor sit amet, consectetur adipisicing elit')
})
