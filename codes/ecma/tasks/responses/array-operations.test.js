const array = require('./array-operations')

test('adding values from [1, 2, 3]', () => {
  let array = [1, 2, 3]
  expect(array.sum(array)).toBe(6)
})

test.skip('adding values from [2, 2, 2]', () => {
  array = [2, 2, 2]
  expect(array.sum(array)).toBe(6)
})

test.skip('adding values from [1, 2, 3, 4, 5, 6]', () => {
  array = [1, 2, 3, 4, 5, 6]
  expect(array.sum(array)).toBe(21)
})

test.skip('adding odd values from [1, 2, 3]', () => {
  let array = [1, 2, 3]
  expect(array.sumOdds(array)).toBe(4)
})

test.skip('adding odd values from [2, 2, 2]', () => {
  array = [2, 2, 2]
  expect(array.sumOdds(array)).toBe(0)
})

test.skip('adding odd values from [1, 2, 3, 4, 5, 6]', () => {
  array = [1, 2, 3, 4, 5, 6]
  expect(array.sumOdds(array)).toBe(9)
})

test.skip('multiplying values from [1, 2, 3]', () => {
  array = [1, 2, 3]
  expect(array.product(array)).toBe(6)
})

test.skip('multiplying values from [2, 2, 2]', () => {
  array = [2, 2, 2]
  expect(array.product(array)).toBe(8)
})

test.skip('multiplying values from [1, 2, 3, 4, 5, 6]', () => {
  array = [1, 2, 3, 4, 5, 6]
  expect(array.product(array)).toBe(720)
})

test.skip('adding a matrix by another matrix', () => {
  let a = [[3, 8], [4, 6]]
  let b = [[4, 0], [1, -9]]
  expect(array.addingMatrix(a, b)).toEqual([[7, 8], [5, -3]])
})

test.skip('multiplying a matrix by another matrix', () => {
  let a = [[1, 2, 3], [4, 5, 6]]
  let b = [[7, 8], [9, 10], [11, 12]]
  expect(array.multiplyingMatrix(a, b)).toEqual([[58, 64], [139, 154]])
})
