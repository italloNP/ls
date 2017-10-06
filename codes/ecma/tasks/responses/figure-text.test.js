const figure = require('./figure-text')

describe('Figure Text Tool', () => {

  test('making triangle text with size 1', () => {
    expect(figure.triangleText(1)).toBe(
      '#'
    )
  })

  test.skip('making triangle text with size 2', () => {
    expect(figure.triangleText(2)).toBe(
      '# \n'+
      '##'
    )
  })

  test.skip('making triangle text with size 3', () => {
    expect(figure.triangleText(3)).toBe(
      '#  \n'+
      '## \n'+
      '###'
    )
  })

  test.skip('making half diamond text with size 1', () => {
    expect(figure.halfDiamondText(1)).toBe(
      '#'
    )
  })

  test.skip('making half diamond text with size 2', () => {
    expect(figure.halfDiamondText(2)).toBe(
      '# \n'+
      '##\n'+
      '# '
    )
  })

  test.skip('making half diamond text with size 3', () => {
    expect(figure.halfDiamondText(3)).toBe(
      '#  \n'+
      '## \n'+
      '###\n'+
      '## \n'+
      '#  '
    )
  })

  test.skip('making diamond text with size 1', () => {
    expect(figure.diamondText(1)).toBe(
      '#'
    )
  })

  test.skip('making diamond text with size 2', () => {
    expect(figure.diamondText(2)).toBe(
      ' # \n'+
      '###\n'+
      ' # '
    )
  })

  test.skip('making diamond text with size 3', () => {
    expect(figure.diamondText(3)).toBe(
      '  #  \n'+
      ' ### \n'+
      '#####\n'+
      ' ### \n'+
      '  #  '
    )
  })

  test.skip('making board text with size 1', () => {
    expect(figure.boardText(1)).toBe(
      '#'
    )
  })

  test.skip('making board text with size 2', () => {
    expect(figure.boardText(2)).toBe(
      '# \n'+
      ' #'
    )
  })

  test.skip('making board text with size 3', () => {
    expect(figure.boardText(3)).toBe(
      '# #\n'+
      ' # \n'+
      '# #'
    )
  })

  test.skip('making board text with size 4', () => {
    expect(figure.boardText(4)).toBe(
      '# # \n'+
      ' # #\n'+
      '# # \n'+
      ' # #'
    )
  })

})
