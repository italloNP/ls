const hamming = require('./hamming')

test('two plus two is four', () => {
  let dna1 = 'GGACG'
  let dna2 = 'GGTCG'
  expect(hamming(dna1, dna2)).toBe(1)
})

test('two plus two is four', () => {
  let dna1 = 'GGACGGATTCTG'
  let dna2 = 'AGGACGGATTCT'
  expect(hamming(dna1, dna2)).toBe(9)
})
