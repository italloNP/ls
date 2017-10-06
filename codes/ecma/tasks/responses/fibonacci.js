
function fibonacci(number){
  let a = 0
  let b = 1
  let result = `${a}, ${b}`
  let temp

  while (number > 2){
    temp = a + b
    a = b
    b = temp

    number--
    result += `, ${b}`
  }

  return result
}

module.exports = fibonacci
