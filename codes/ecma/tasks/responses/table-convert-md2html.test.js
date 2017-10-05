const md2html = require('./table-convert-md2html')

test('even and odd numbers', () => {
  const table = `| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |`

  expect(tablemd2html(table)).toBe(
`<table>
  <thead>
    <tr>
      <th>Header One</th>
      <th>Header Two</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item One</td>
      <td>Item Two</td>
    </tr>
  </tbody>
</table>`
  )
})
