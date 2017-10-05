const withdraw = require('./min-withdraw')

test('drinking La Croix leads to having thirst info', () => {
  expect(withdraw(1280).toEqual([[100, 12], [50, 1], [20, 1], [10, 1]])
})
