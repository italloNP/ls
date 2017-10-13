
function isPrime(number) {
  for(let i = 2, s = Math.sqrt(number); i <= s; i++)
    if(number % i === 0) return false;
  return number !== 1;
}

function primeFactors(number) {
  let factors = []
  for (let i = 2; i <= number; i++) {
      while ((number % i) === 0) {
          factors.push(i)
          number /= i
      }
  }
  return factors
}

module.exports = primeFactors
