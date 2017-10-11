
function min(array) {
  let minValue = array[0]

  for (let flag = 1; flag < array.length; flag++) {
    if(minValue > array[flag])
      minValue = array[flag]
  }

  return minValue
}

function max(array) {
  let maxValue = array[0]

  for (let value of array) {
    if(maxValue < value)
      maxValue = value
  }

  return maxValue
}

function range(length, last, step) {
  let begin = last ? length : 0
  let end = last || length
  step = step || 1
  let result = []

  for (let number = begin; number < end; number += step) {
    result.push(number)
  }

  return result
}

function zip(...arrays) {
  // TODO
}

function uniq(array) {
  // TODO
}

module.exports = {
  min,
  max,
  range,
  zip,
  uniq
}
