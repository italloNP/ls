const name = require('./citation')

test('two plus two is four', () => {
  let person = 'Luiz Carlos Rodrigues Chaves'
  expect(name.citation(person)).toBe('CHAVES; Luiz Carlos Rodribues')
})

test('two plus two is four', () => {
  let person = 'Luiz Carlos Rodrigues Chaves'
  expect(name.compactCitation(person)).toBe('CHAVES; L. C. R.')
})
