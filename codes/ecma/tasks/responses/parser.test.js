const parser = require('parser')

test('two plus two is four', () => {
  expect(str2hex('AB')).toBe('41 42')
  expect(str2hex('ABC')).toBe('41 42 43')
  expect(hex2str('41 42')).toBe('AB')
  expect(hex2str('41 42 43')).toBe('ABC')
})

test('two plus two is four', () => {
  expect(str2bin('AB')).toBe('01000001 01000010')
  expect(str2bin('ABC')).toBe('01000001 01000010 01000011')
  expect(bin2str('01000001 01000010')).toBe('AB')
  expect(bin2str('01000001 01000010 01000011')).toBe('ABC')
})

test('two plus two is four', () => {
  expect(str2dec('AB')).toBe('65 66')
  expect(str2dec('ABC')).toBe('65 66 67')
  expect(dec2str('65 66')).toBe('AB')
  expect(dec2str('65 66 67')).toBe('ABC')
})
