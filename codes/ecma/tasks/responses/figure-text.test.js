const figure = require('./figure-text')

test('checking if triangle is equilateral', () => {
  expect(figure.triangleText(1)).toBe('#')
  expect(figure.triangleText(2)).toBe('# \n##')
  expect(figure.triangleText(3)).toBe('#  \n## \n###')
})

test('checking if triangle is equilateral', () => {
  expect(figure.halfDiamondText(1)).toBe('#')
  expect(figure.halfDiamondText(2)).toBe('# \n##\n# ')
  expect(figure.halfDiamondText(3)).toBe('#  \n## \n###\n## \n#  ')
})

test('checking if triangle is equilateral', () => {
  expect(figure.diamondText(1)).toBe('#')
  expect(figure.diamondText(2)).toBe(' # \n###\n # ')
  expect(figure.diamondText(3)).toBe('  #  \n ### \n#####\n ### \n  #  ')
})

test('checking if triangle is equilateral', () => {
  expect(figure.boardText(1)).toBe('#')
  expect(figure.boardText(2)).toBe('# \n #')
  expect(figure.boardText(3)).toBe('# #\n # \n# #')
  expect(figure.boardText(4)).toBe('# # \n # #\n# # \n # #')
})
