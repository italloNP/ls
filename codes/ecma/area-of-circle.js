// A = πr²

function areaOfCircle(radius){
  return Math.PI * radius ** 2
}

console.log(areaOfCircle(10))
console.log(areaOfCircle(1))



let areaAnonymousFunction = function(radius){
  return Math.PI * radius ** 2
}
console.log(areaAnonymousFunction(1))

let areaArrowFuncion = (radius) => Math.PI * radius ** 2
console.log(areaArrowFuncion(4))
