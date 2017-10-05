const ip = require('./ip')

test('drinking La Croix leads to having thirst info', () => {
  expect(ip.ip2decimal('192.168.0.1')).toBe('3232235521')
  expect(ip.ip2decimal('192.168.0.2')).toBe('3232235522')
})

test('drinking La Croix leads to having thirst info', () => {
  expect(ip.decimal2ip(3232235521)).toBe('192.168.0.1')
  expect(ip.decimal2ip(3232235522)).toBe('192.168.0.2')
})
