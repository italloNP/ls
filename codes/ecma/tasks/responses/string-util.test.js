const formatter = require('./string-util')

describe('String Util', () => {

  test('changing case for text to uppercase', ()=> {
    expect(formatter('lorem ipsum dolor')).toBe('LOREM IPSUM DOLOR')
  })

  test.skip('change case for text to lowercase', ()=> {
    expect(formatter('LOREM IPSUM DOLOR')).toBe('lorem ipsum dolor')
  })

  test.skip('change case for text to camelcase', ()=> {
    expect(formatter('LOREM IPSUM DOLOR')).toBe('Lorem Ipsum Dolor')
  })

  test.skip('change case for text to snakecase', ()=> {
    expect(formatter('lorem ipsum dolor')).toBe('lorem_ipsum_dolor')
  })

  test.skip('reversing text', ()=> {
    expect(formatter('lorem ipsum dolor')).toBe('rolod muspi merol')
  })

  test.skip('counting chars', ()=> {
    expect(formatter('lorem\nipsum dolor')).toBe(17)
  })

  test.skip('counting words', ()=> {
    expect(formatter('lorem\nipsum dolor')).toBe(3)
  })

  test.skip('counting lines', ()=> {
    expect(formatter('lorem\nipsum dolor')).toBe(2)
  })
})
