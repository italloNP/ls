const scan = require('./scan-patterns')

test('scanning dates', () => {
  let message = `Lorem ipsum 01/01/2017 dolor sit amet, 2017-01-02 consectetur.`
  expect(scan.date(message))
    .toEqual({count: 2, values: ['01/01/2017', '02/01/2017']})
})

test('scanning CEPs', () => {
  let message = `Lorem ipsum 12345-123 dolor sit amet, 12345123 consectetur.`
  expect(scan.cep(message))
    .toEqual({count: 2, values: ['12345-123', '12345123']})
})
