var primeFactors = require('./prime-factors')

describe('Prime Factors', function () {
  test('returning an empty array for 1', function () {
    expect(primeFactors.for(1)).toEqual([])
  })

  test.skip('factoring 2', function () {
    expect(primeFactors.for(2)).toEqual([2])
  })

  test.skip('factoring 3', function () {
    expect(primeFactors.for(3)).toEqual([3])
  })

  test.skip('factoring 4', function () {
    expect(primeFactors.for(4)).toEqual([2, 2])
  })

  test.skip('factoring 6', function () {
    expect(primeFactors.for(6)).toEqual([2, 3])
  })

  test.skip('factoring 8', function () {
    expect(primeFactors.for(8)).toEqual([2, 2, 2])
  })

  test.skip('factoring 9', function () {
    expect(primeFactors.for(9)).toEqual([3, 3])
  })

  test.skip('factoring 27', function () {
    expect(primeFactors.for(27)).toEqual([3, 3, 3])
  })

  test.skip('factoring 625', function () {
    expect(primeFactors.for(625)).toEqual([5, 5, 5, 5])
  })

  test.skip('factoring 901255', function () {
    expect(primeFactors.for(901255)).toEqual([5, 17, 23, 461])
  })

  test.skip('factoring 93819012551', function () {
    expect(primeFactors.for(93819012551)).toEqual([11, 9539, 894119])
  })
})
