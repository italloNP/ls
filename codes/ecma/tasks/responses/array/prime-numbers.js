
function isPrime(number) {
  // for(let i = 2; i < number; i++)
  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
    if(number % i === 0) return false;
  return number !== 1;
}

/**
 * begin: 1..n
 * end: 1..n, end > begin
 */
function primes(begin, end) {
  let result = []
  if(end) {
      if(end < begin) {
        return result
      } else {
        for (let number = begin; number <= end; number++) {
          if(isPrime(number)) {
            result.push(number)
          }
        }
      }
  } else {
    result.push(2)
    for (let number = 3, count = 1; count < begin; number++) {
      if(isPrime(number)) {
        result.push(number)
        count++
      }
    }
  }
  return result
}

module.exports = primes
