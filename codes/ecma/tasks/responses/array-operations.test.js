const array = require('./array-operations')

test('adding values from an array', () => {
  let array = [1, 2, 3]
  expect(array.sum(array)).toBe(6)

  array = [2, 2, 2]
  expect(array.sum(array)).toBe(6)

  array = [1, 2, 3, 4, 5, 6]
  expect(array.sum(array)).toBe(21)
})

test('adding odd values from an array', () => {
  let array = [1, 2, 3]
  expect(array.sumOdds(array)).toBe(4)

  array = [2, 2, 2]
  expect(array.sumOdds(array)).toBe(0)

  array = [1, 2, 3, 4, 5, 6]
  expect(array.sumOdds(array)).toBe(9)
})

test('multiplying values from an array', () => {
  array = [1, 2, 3]
  expect(array.product(array)).toBe(6)

  array = [2, 2, 2]
  expect(array.product(array)).toBe(8)

  array = [1, 2, 3, 4, 5, 6]
  expect(array.product(array)).toBe(720)
})

test('adding a matrix by another matrix', () => {
  let a = [[3, 8], [4, 6]]
  let b = [[4, 0], [1, -9]]
  expect(array.addingMatrix(a, b)).toEqual([[7, 8], [5, -3]])
})

test('multiplying a matrix by another matrix', () => {
  let a = [[1, 2, 3], [4, 5, 6]]
  let b = [[7, 8], [9, 10], [11, 12]]
  expect(array.multiplyingMatrix(a, b)).toEqual([[58, 64], [139, 154]])
})
