
function total(products) {
  const sum = (total, product) => total + product[1]
  return products.reduce(sum, 0)
}

module.exports = total
