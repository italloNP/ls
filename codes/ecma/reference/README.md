# EcmaScript

* [Variable](#variable)
  * Declarations: [var](#var), [let](#let), [const](#const)
  * [Multiple Declaration](#multiple-declaration)
  * [Dynamic Type](#dynamic-type)
  * [Case Sensitive](#case-sensitive)
  * [Identifier Pattern](#identifier-pattern)
  * [Hoisting](#hoisting)
* [Expression & Operator](expressionAndOperator.js)
* [Statements and Declarations](statement.js)
* [Function](#function)
  * [Defining Functions / Function Statement](#defining-functions--function-statement)
  * [Recursion](#recursion)
  * [Scope](#scope)
  * [Hoisting](#hoisting)
  * [Case Sensitive](#case-sensitive)
  * [Overload](#overload)
  * [Default Parameters](#default-parameters)
  * [Destructuring Assignment](#destructuring-assignment)
  * [Named Parameters / Keyword Parameters](#named-parameters--keyword-parameters)
  * [Arguments Object / es5](#arguments-object--es5)
  * [Rest parameters (spread operator) ES6](#rest-parameters-spread-operator-es6)
  * [Function Expression / Anonymous Function](#function-expression--anonymous-function)
  * [Immediately Invokable Function Expressions (IIFE)](#immediately-invokable-function-expressions-iife)
  * [Method / Callback](#method--callback)
  * [Closure](#closure)
  * [Nested functions and closures](#nested-functions-and-closures)
  * [ES6 Arrow Function (=>)](#es6-arrow-function-)
  * [Higher-Order Function](#higher-order-function)
* Types:
  * Primitive
    * [Boolean](type/Boolean.js)
    * [Null](type/Null.js)
    * [Undefined](type/Undefined.js)
    * [Number](type/Number.js)
    * [String](#string)
      * [String Literal](#string-literal)
      * [String Multiline](#string-multiline)
      * [Special Cases](#special-cases)
      * [Special Characters / Escape Sequences](#special-characters--escape-sequences)
      * [Template String (Ecma6)](#template-string-ecma6)
      * [Array of characters](#array-of-characters)
      * [Unicode and JavaScript](#unicode-and-javascript)
      * [Surrogate Pair <h,l>](#surrogate-pair-hl)
      * [Unicode problem](#unicode-problem)
    * [Symbol](type/Symbol.js)
  * Object
    * Fundamental objects
      * [Boolean Object](type/BooleanObject.js)
      * [String Object](#string-object)
        * [String Syntax](#string-syntax)
        * [String Method](#string-methods)
          * [String.fromCharCode()](#string.fromCharCode)
          * [String.fromCharPoint()](#string.fromCharPoint)
        * [String Instance](#string-instances)
          * [String.prototype.includes()](#stringprototypeincludes)
          * [String.prototype.repeat()](#stringprototyperepeat)
          * [String.prototype.starstWith()](#stringprototypestarstwith)
          * [String.prototype.endsWith()](#stringprototypeendswith)
          * [String.prototype.substr()](#stringprototypesubstr)
          * [String.prototype.substring()](#stringprototypesubstring)
          * [String.prototype.slice()](#stringprototypeslice)
          * [String.prototype.split()](#stringprototypesplit)
          * [String.prototype.toLowerCase()](#stringprototypetolowercase)
          * [String.prototype.toUpperCase()](#stringprototypetouppercase)
          * [String.prototype.match()](#stringprototypematch)
          * [String.prototype.replace()](#stringprototypereplace)
          * [String.prototype.search()](#stringprototypesearch)
          * [String.prototype.trim()](#stringprototypetrim)
      * [Array](#array)
        * [Create an Array [ ]](#create-an-array--)
        * [Changing Array](#changing-array)
        * [Defining Empty Array](#defining-empty-array)
        * [Accessing Array Elements](#accessing-array-elements)
        * [Multiple Types](#multiple-types)
        * [String Index](#string-index)
        * [Nth Dimentions](#nth-dimentions)
        * [Spread Operator](#spread-operator)
        * [Interaction: for, for..of, for..in, for([key, value] of [].entries())](#interaction-for-forof-forin-forkey-value-of-entries)
        * [Array Object](#array-object)
          * [Array Methods](#array-methods)
            * [Array.from()](#arrayfrom)
          * [Array Instances](#array-instances)
            * [Array.prototype.length](#arrayprototypelength)
            * [Mutator: pop, push, reverse, shift, unshift, sort, splice](#mutator-pop-push-reverse-shift-unshift-sort-splice)
              * [Array.prototype.push()](#arrayprototypepush)
              * [Array.prototype.unshift()](#arrayprototypeunshift)
              * [Array.prototype.pop()](#arrayprototypepop)
              * [Array.prototype.shift()](#arrayprototypeshift)
              * [Array.prototype.reverse()](#arrayprototypereverse)
              * [Array.prototype.sort()](#arrayprototypesort)
              * [Array.prototype.splice()](#arrayprototypesplice)
            * [Accessor: includes, join, concat, slice](#accessor-includes-join-concat-slice)
              * [Array.prototype.includes()](#arrayprototypeincludes)
              * [Array.prototype.join()](#arrayprototypejoin)
              * [Array.prototype.slice()](#arrayprototypeslice)
              * [Array.prototype.concat()](#arrayprototypeconcat)
            * [Iteration: forEach, reduce, filter, map, every, some, find, reduceRight, entries, keys, values](#iteration-foreach-reduce-filter-map-every-some-find-reduceright-entries-keys-values)
              * [Array.prototype.entries()](#arrayprototypeentries)
              * [Array.prototype.forEach()](#arrayprototypeforeach)
              * [Array.prototype.map()](#arrayprototypemap)
              * [Array.prototype.reduce()](#arrayprototypereduce)
              * [Array.prototype.reduceRight()](#arrayprototypereduceright)
              * [Array.prototype.filter()](#arrayprototypefilter)
              * [Array.prototype.find()](#arrayprototypefind)
              * [Array.prototype.every()](#arrayprototypeevery)
              * [Array.prototype.some()](#arrayprototypesome)
          * [Typed Array](#typed-array)
      * Object: [Data](type/Object.js), [Class](type/ObjectClass.js), [Value vs Reference](type/ObjectValueReference.js)
    * Numbers and dates
      * [Number Object](type/NumberObject.js)
      * [Math](type/Math.js)
      * [Date](type/Date.js)
    * Text processing
      * [String](type/StringObject.js)
      * RegExp: [OO](type/RegExp-OO.js), [Patterns](type/RegExp-patterns.js) e [Syntax](type/RegExp-syntax.js)
    * Indexed collections
      * [Typed Array](type/Array-Typed.js)
    * Keyed collections
      * [Keyed](type/keyedCollections.js)
    * Structured data
      * JSON: [Object](type/JSON.js), [data](data/)
    * Internationalization
      * [Intl](type/Internationalization.js)
* [Modules](modules/modules.js)
* [Async & Await](asyncAwait.js)
* Promise & Generator
  * [Promise](promise.js)
  * [Generator](generator.js)
* [Errors](handlingError.js)

## Variable

* * *

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations)

### var
```js
var number;
var number      // Automatic semicolon insertion (ASI)
var number = 10 // int number = 10; (C language)
```

### let
```js
let number = 10
console.log(number) //=> 10
```

### const
```js
const NUMBER = 10
NUMBER = 100        // TypeError
console.log(NUMBER) //=> 10
```

### Multiple Declaration
```js
var x, y, z
console.log(x) //=> undefined
console.log(y) //=> undefined
console.log(z) //=> undefined
```

```js
var a = 1, b = 2, c = 3
console.log(a); //=> 1
console.log(b); //=> 2
console.log(c); //=> 3
```

### Dynamic Type
```js
let number = 10
console.log(number)        //=> 10
console.log(typeof number) //=> number

number = 'fulano'
console.log(typeof number) //=> string
console.log(number)        //=> 'fulano'
```

### Case Sensitive
```js
let number = 8
let NUmber = 80
```

### Identifier Pattern

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables)

```js
let 0number  //SyntaxError (^\W)
let %number  //SyntaxError (^\W)
let var      //SyntaxError (keyword)
let function //SyntaxError (keyword)
let number
let _number
let $number
```

### Hoisting

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variable_hoisting)

```js
nome = 'fulano'
console.log(nome)      //=> 'fulano'
```

```js
console.log(outroNome) // ReferenceError
outroNome = 10
```

```js
console.log(outroNome) // undefined
let outroNome = 10
```

## Function

* * *

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions), [Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### Defining Functions / Function Statement
```js
function addition(param1, param2){
  return param1 + param2
}

// Calling functions
console.log(addition(1))       //=> NaN
console.log(addition(1, 1))    //=> 2
console.log(addition(1, 1, 3)) //=> 2
```

### Recursion
```js
function factorial(n) {
  return n == 0 ? 1 : n * factorial(n - 1)
}

console.log(factorial(4)) //=> 24
```

### Scope
```js
var x = 'outside'
function f1(){
  var x = 'inside'
}
console.log(x) //=> 'outside'
f1()
console.log(x) //=> 'outside'
```

```js
var x = 'outside'
function f1(){
  let x = 'inside'
}
console.log(x) //=> 'outside'
f1()
console.log(x) //=> 'outside'
```

```js
var x = 'outside'
function f2(){
  x = 'inside'
}
console.log(x) //=> 'outside'
f2()
console.log(x) //=> 'inside'
```

### Hoisting
```js
console.log(addition(1, 1)) //=> 2

function addition(param1, param2){
  return param1 + param2
}
```

### Case Sensitive
```js
function addition(param1, param2){
  return param1 + param2
}

function Addition(param){
  return param + 1
}

console.log(Addition(1))    //=> 2
console.log(Addition(1, 2)) //=> 2
```

### Overload
```js
function addition(param1, param2){
  return param1 + param2
}

function addition(param){
  return param + 1
}

console.log(addition(1))    //=> 2
console.log(addition(1, 2)) //=> 2
```

### Default Parameters
```js
function addition(param1, param2=0){
  return param1 + param2
}

console.log(addition(1, 1)) //=> 2
console.log(addition(1))    //=> 1
```

### Destructuring Assignment
```js
function addition(param1, param2, param3, param4){
  return param1 + param2 + param3 + param4
}

console.log(addition(...[1, 2, 1, 2]))         //=> 6
console.log(addition(...[1, 2], ...[1, 2]))    //=> 6
console.log(addition(...[1, 2], 1, ...[2]))    //=> 6
console.log(addition(...[1, 2], 1, ...[1, 2])) //=> 5
```

### Named Parameters / Keyword Parameters
```js
function addition({a = 0, b = 0}){
  return a + b
}

console.log(addition({a: 1, b: 1})) //=> 2
console.log(addition({b: 1, a: 1})) //=> 2
console.log(addition({b: 1}))       //=> 1
console.log(addition({}))           //=> 0
```

### Arguments Object / es5
```js
function addition(){
  let summation = 0
  for(let value of arguments){
    summation += value
  }
  return summation
}

console.log(addition(1))          //=> 1
console.log(addition(1, 1))       //=> 2
console.log(addition(1, 1, 1, 1)) //=> 4
```

### Rest parameters (spread operator) ES6
```js
function addition(...params){
  let summation = 0
  for(let value of params){
    summation += value
  }
  return summation
}

console.log(addition(1))          //=> 1 ([1])
console.log(addition(1, 1))       //=> 2 ([1, 1])
console.log(addition(1, 1, 1, 1)) //=> 4 ([1, 1, 1, 1])
```

```js
// operator: '+', '*'
function calc(operator, ...params){
  let result = operator == '+' ? 0 : 1
  for(let arg of params){
    result = operator == '+' ? result + arg : result * arg
  }
  return result
}

console.log(calc('+', 1))       //=> 1 ('+', [1])
console.log(calc('+', 1, 1))    //=> 2 ('+', [1, 1])
console.log(calc('*', 1, 1, 1)) //=> 1 ('*', [1, 1, 1])
```

### Function Expression / Anonymous Function
```js
function(param1, param2){
  return param1 + param2
}
```

```js
const addition = function(param1, param2){
  return param1 + param2
}

console.log(addition)       // SyntaxError
console.log(addition(1, 2)) //=> 3
```

```js
const addition = function sum(param1, param2){
  return param1 + param2
}
console.log(addition)       //=> [Function: sum]
console.log(addition(1, 2)) //=> 3
console.log(sum(1, 2))      //  ReferenceError: sum is not defined
```

### Immediately Invokable Function Expressions (IIFE)
```js
(function(param1, param2){
  console.log(param1 + param2)
})(1, 2) //=> 3
```js

### Method / Callback
```js
let ip = {
  address: '192.168.0.1',
  mask: '255.255.255.0',
  toString: function(){
    return `${this.address}/${this.mask}`
  }
}

console.log(ip.address)    //=> '192.168.0.1'
console.log(ip.toString()) //=> '192.168.0.1/255.255.255.0'
```

### Closure
```js
function multiplier(factor){
  return function(number){
    return number * factor
  }
}

let twice = multiplier(2)
console.log(twice(5)) //=> 10
```

### Nested functions and closures
```js
function addSquares(a,b) {
  function square(x) {
    return x * x
  }
  return square(a) + square(b)
}

console.log(squares(2,3))    // ReferenceError
console.log(addSquares(2,3)) //=> 13
console.log(addSquares(3,4)) //=> 25
console.log(addSquares(4,5)) //=> 41
```

### ES6 Arrow Function (=>)
```js
const sum = function(param1, param2){
  return param1 + param2
}
```

```js
const sum = (param1, param2) => {
  return param1 + param2
}

const sum = (param1, param2) => { return param1 + param2 }
const minus = (param1, param2) => param1 - param2
const double = number => number * number

console.log(sum(2, 2))    //=> 4
console.log(minus(2, 2))  //=> 0
console.log(double(2, 2)) //=> 4
```

```js
console.log([1,1,1].reduce(function(sum,value){return sum+value}, 0)) //=> 3
console.log([1,1,1].reduce((sum,value) => sum+value)) //=> 3
```

### Higher-Order Function

```js
//  http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK
//  Functions that operate on other functions, either by taking them as arguments
//  or by returning them, are called higher-order functions
const animals = [
  { name: 'Waffles',  type: 'dog', age: 12 },
  { name: 'Fluffy',   type: 'cat', age: 14 },
  { name: 'Spelunky', type: 'dog', age: 4  },
  { name: 'Hank',     type: 'dog', age: 11 },
]

let oldDogNames = animals
  .filter(x => x.age > 10 && x.type === 'dog')
  .map(x => x.name)

console.log(oldDogNames) //=> [ 'Waffles', 'Hank' ]

let totalDogYears = animals
  .filter(x =>  x.type === 'dog')
  .map(x => x.age)
  .reduce((prev, cur) => prev + cur, 0)
console.log(totalDogYears) //=> 27
```

## String

* * *

Reference: [String Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [String Literal 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals), [String Literal 2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals)

### String Literal
```js
console.log('h')           //=> 'h'
console.log('hello world') //=> 'hello world'
console.log("hello world") //=> 'hello world'
```

### String Multiline
```js
let name = "hello \
world"
console.log(name) //=> 'hello world'

let name = "hello " +
              "world"
console.log(name) //=> 'hello world'

// Long literal strings
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable."

let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."

let longString = `This is a very long string which needs
to wrap across multiple lines because
otherwise my code is unreadable.`
```

### Special Cases
```js
console.log('<img src="url">')                 //=> '<img src="url">'
console.log('<span class="ativa">10</span>')   //=> '<span class="ativa">10</span>'
console.log("<span class=\"ativa\">10</span>") //=> '<span class="ativa">10</span>'
console.log("hello' world")                    //=> 'hello\' world'
console.log('hello<br>world')                  //=> 'hello<br>world'
```

### Special Characters / Escape Sequences

```js
console.log('hello\' world')        //=> 'hello\' world'
console.log('hello\nworld')         //=> 'hello\nworld'
console.log('I \u2661 JavaScript!') //=> 'I ♡ JavaScript!'
```

### Template String (Ecma6)

```js
let name = 'Fulano'
console.log('Hello ' + name) //=> 'Hello Fulano'
```

```js
let name = 'Fulano'
let email = 'fulano@gmail.com'
let id = '1'

let row = '<tr><td>'+id+'</td><td>'+name+'</td><td>'+email+'</td></tr>'

console.log(row)
//=> <tr><td>1</td><td>Fulano</td><td>fulano@gmail.com</td></tr>
```

```js
let name = 'Fulano'
let email = 'fulano@gmail.com'
let id = '1'

let row = `<tr><td>${id}</td><td>${name}</td><td>${email}</td></tr>`

console.log(row)
//=> <tr><td>1</td><td>Fulano</td><td>fulano@gmail.com</td></tr>
```

### Array of characters

```js
let text = "lorem ipsum"
console.log(text[0])
//=>
// l
```

```js
let text = "lorem ipsum"
for(let char = 0; char < text.length; char++){
  console.log(text[char])
}
//=>
// l
// o
// r
// e
// m
//
// i
// p
// s
// u
// m
```

```js
let text = "lorem ipsum"
for(letter of text){
  console.log(letter)
}
//=>
// l
// o
// r
// e
// m
//
// i
// p
// s
// u
// m
```

### Unicode and JavaScript

[Reference](http://speakingjs.com/es5/ch24.html)

```js
console.log('Z')

// Unicode sequence: three octal digits XXX between 0 and 377
console.log('\132')      //=> 'Z'

// Unicode sequence: two hexadecimal digits XX between 00 and FF
console.log('\x5A')      //=> 'Z'

// Unicode sequence: four hexadecimal digits XXXX - BMP
console.log('\u005A')    //=> 'Z'

// Unicode code point escape sequences
console.log('\u{005A}')  //=> 'Z'

// Unicode code point escapes \u{XXXXX} ES6
console.log('\u{0005A}') //=> 'Z'
```

### Surrogate Pair <h,l>

[Reference](https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs)

```js
// U+0005A: \u{0005A} = \u{u00000}\u{u0005A}
console.log('\u0000\u005A') //=> 'Z'

// U+1F4A9: \u{1F4A9} = \u{u0D83D}\u{u0DCA9}
console.log('\u{1F4A9}')    //=> 💩
console.log('\uD83D\uDCA9') //=> 💩
```

### Unicode problem

[Reference](https://mathiasbynens.be/notes/javascript-unicode)

```js
// U+0041 LATIN CAPITAL LETTER A
console.log('A'.length)            //=> 1
console.log('A' == '\u0041')       //=> true

// U+1D400 MATHEMATICAL BOLD CAPITAL A
console.log('𝐀'.length)            //=> 2
console.log('𝐀' == '\uD835\uDC00') //=> true
```

### String Object

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

#### String Syntax
```js
// Primitive
let string = 'lorem ipsum'
console.log(string)        //=> 'lorem ipsum'
console.log(typeof string) //=> string
```

```js
// String
let string = String('lorem ipsum')
console.log(string)        //=> 'lorem ipsum'
console.log(typeof string) //=> string
```

```js
// String OO
let string = new String('lorem ipsum')
console.log(string)        //=> [String: 'lorem ipsum']
console.log(typeof string) //=> object
```

### String Methods

#### String.fromCharCode()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

> Syntax:<br>
> str.fromCharCode(num1, num2, ...)

```js
console.log(String.fromCharCode(65))        //=> A
```

#### String.fromCharPoint()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharPoint)

> Syntax:<br>
> str.fromCodePoint(num1, num2, ...)

```js
console.log(String.fromCodePoint(48))        //=> 0
console.log(String.fromCodePoint(65))        //=> A
console.log(String.fromCodePoint(97))        //=> a
```

### String Instances

#### String.prototype.length

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

```js
console.log("lorem ipsum".length)             //=> 11
console.log(String("lorem ipsum").length)     //=> 11
console.log(new String("lorem ipsum").length) //=> 11
```

#### String.prototype.includes()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

> Syntax:<br>
> str.includes(searchString)<br>
> str.includes(searchString, position)

```js
console.log("lorem ipsum".includes('lorem'))   //=> true
```

#### String.prototype.repeat()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

> Syntax:<br>
> str.repeat(count)

```js
console.log("hello".repeat(3)) //=> 'hellohellohello'
```

#### String.prototype.starstWith()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/starstWith)

> Syntax:<br>
> str.startsWith(searchString)<br>
> str.startsWith(searchString, position)

```js
console.log("lorem ipsum".startsWith('lorem')) //=> true
```

#### String.prototype.endsWith()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

> Syntax:<br>
> str.endsWith(searchString)<br>
> str.endsWith(searchString, length)

```js
console.log("lorem ipsum".endsWith('ipsum')) //=> true
```

#### String.prototype.substr()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

> Syntax:<br>
> str.substr(start)<br>
> str.substr(start, length)

```js
console.log("lorem ipsum".substr(1,2))    //=> or
console.log("lorem ipsum".substr(1))      //=> orem ipsum
```

#### String.prototype.substring()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

> Syntax:<br>
> str.substring(indexStart)<br>
> str.substring(indexStart, indexEnd)

```js
console.log("lorem ipsum".substring(1, 2)) //=> o
console.log("lorem ipsum".substring(1))    //=> orem ipsum
```

#### String.prototype.slice()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

> Syntax:<br>
> str.slice(beginIndex)<br>
> str.slice(beginIndex, endIndex)

```js
console.log("lorem ipsum".slice(-1))       //=> m
console.log("lorem ipsum".slice(1,-1))     //=> orem ipsu
```

#### String.prototype.split()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

> Syntax:<br>
> str.split()<br>
> str.split(separator)<br>
> str.split(separator, limit)

```js
console.log("lorem ipsum".split(''))              //=> [ 'l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm' ]
console.log("lorem ipsum".split(' '))             //=> [ 'lorem', 'ipsum' ]
console.log("lorem ipsum dolor".split(' ', 1))    //=> [ 'lorem' ]
console.log("lorem\nipsum-dolor".split(/[-\n]/g)) //=> [ 'lorem', 'ipsum', 'dolor' ]
```

#### String.prototype.toLowerCase()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

> Syntax:<br>
> str.toLowerCase()

```js
console.log('LOREM IPSUM'.toLowerCase()) //=> 'lorem ipsum'
```

#### String.prototype.toUpperCase()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

> Syntax:<br>
> str.toUpperCase()

```js
console.log("lorem ipsum".toUpperCase()) //=> 'LOREM IPSUM'
```

#### String.prototype.match()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

> Syntax:<br>
> str.match(regexp)

```js
console.log("lorem ipsum".match(/\w+/g)) //=> [ 'lorem', 'ipsum' ]
```

#### String.prototype.replace()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

> Syntax:<br>
> str.replace(regexp|substr, newSubstr|function)

```js
console.log("lorem ipsum".replace('lorem', 'LOREM')) //=> 'LOREM ipsum'
```

#### String.prototype.search()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

> Syntax:<br>
> str.includes(searchString[, position])

```js
console.log("lorem ipsum".search('lorem')) //=> 0
```

#### String.prototype.trim()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

> Syntax:<br>
> str.trim()

```js
console.log("  lorem  ipsum  ".trim()) //=> 'lorem  ipsum'
```

## Array

* * *

Reference: [Array Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) e [Array Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals)

### Create an Array [ ]
```js
let numbers = [1, 2, 4, 7]

console.log(numbers[0]) //=> 1
console.log(numbers[3]) //=> 7
console.log(numbers[4]) //=> undefined
console.log(numbers)    //=> [ 1, 2, 4, 7 ]
```

### Changing Array
```js
let numbers = [1, 2, 4, 7]

// changing value
numbers[2] = 5

// loading element
numbers[4] = 10
console.log(numbers) //=> [ 1, 2, 5, 7, 10 ]

delete numbers[4]
console.log(numbers) //=> [ 1, 2, 5, 7,  ]
```

### Defining Empty Array
```js
let numbers = []

numbers[0] = 10
numbers[1] = 20
numbers[10] = 100

console.log(numbers) //=> [ 10, 20, , , , , , , , , 100 ]
```

### Accessing Array Elements
```js
console.log(numbers[0])  //=> 10
console.log(numbers[1])  //=> 20
console.log(numbers[2])  //=> undefined
console.log(numbers[10]) //=> 100
console.log(numbers)     //=> [ 10, 20, , , , , , , , , 100 ]
```

### Multiple Types
```js
let values = [1, 'fulano', true, null, [1, 2]]

console.log(values[1])    //=> 'fulano'
console.log(values[4])    //=> [1, 2]
console.log(values[4][1]) //=> 2
```

### String Index
```js
let values = []

values[0] = 1
values['number'] = 10
values[1] = 20

console.log(values) //=> [ 1, 20, number: 10 ]
```

### Nth Dimentions
```js
let students = []

students[0] = [1, 'fulano', 'fulano@gmail.com']
students[1] = [2, 'sicrano', 'sicrano@gmail.com']

console.log(students[0][2]) //=> 'fulano@gmail.com'

console.log(students)       //=> [ [ 1, 'fulano', 'fulano@gmail.com' ], [ 2, 'sicrano', 'sicrano@gmail.com' ] ]
```

```js
let students = []

students[0] = []
students[0]['id'] = 1
students[0]['name'] = 'Fulano'
students[0]['email'] = 'fulano@gmail.com'

console.log(students[0]['email']) //=> 'fulano@gmail.com'
console.log(students[0].email)    //=> 'fulano@gmail.com'

console.log(students)             //=> [ [ id: 1, name: 'Fulano', email: 'fulano@gmail.com' ] ]
```

### Spread Operator
```js
let numbers = [1, 2, 3]

console.log([...numbers, 4, 5])   //=> [ 1, 2, 3, 4, 5 ]
```

### Interaction: for, for..of, for..in, for([key, value] of [].entries())
```js
// for
let numbers = [1, 2, 4, 7]
let result = ''

for(let flag = 0; flag < numbers.length; flag++) {
  result += numbers[flag]+' '
}

console.log(result)  //=> '1 2 4 7 '
```

```js
// for..in
let values = []

values[0] = 1
values['number'] = 10
values[1] = 20

for(let index in values){
  console.log(`${index} => ${values[index]}`)
}
//=>
// '0 => 1'
// '1 => 20'
// 'number => 10'
```

```js
// for..of
for(let value of values){
  console.log(value)
}
//=>
// '1'
// '20'
// '10'
```

### Array Object

```js
// Array Literal
let numbers = [1, 2, 4, 7]
console.log(numbers)    //=> [ 1, 2, 4, 7 ]
```

```js
// Array
let numbers = Array(1, 2, 4, 7)
console.log(numbers)    //=> [ 1, 2, 4, 7 ]
```

```js
// Array OO
let numbers = new Array(1, 2, 4, 7)
console.log(numbers)    //=> [ 1, 2, 4, 7 ]

let numbers = new Array(3)
console.log(numbers)    //=> [ , ,  ]

numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
console.log(numbers)    //=> [ 1, 2, 3 ]
```

### Array Methods

#### Array.from()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

> Syntax:<br>
> arr.from(arrayLike)<br>
> arr.from(arrayLike, mapFn)<br>
> arr.from(arrayLike, mapFn, thisArg)

```js

Array.from([1, 2, 3]) //=> [1, 2, 3]
```

### Array Instances

#### Array.prototype.length

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/leng)

```js
console.log([1, 2, 3].length)   //=> 3
```

### Mutator: pop, push, reverse, shift, unshift, sort, splice

#### Array.prototype.push()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

> Syntax:<br>
> arr.push(element1, element2,...)

```js
let numbers = [1, 2, 3]

console.log(numbers.push(4))    //=> 4
console.log(numbers)            //=> [ 1, 2, 3, 4 ]
```

#### Array.prototype.unshift()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

> Syntax:<br>
> arr.unshift(element1, element2,...)

```js
let numbers = [1, 2, 3]

console.log(numbers.unshift(0)) //=> 4
console.log(numbers)            //=> [ 0, 1, 2, 3 ]
```

#### Array.prototype.pop()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

> Syntax:<br>
> arr.pop()

```js
let numbers = [1, 2, 3]

console.log(numbers.pop())      //=> 3
console.log(numbers)            //=> [ 1, 2 ]
```

#### Array.prototype.shift()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

> Syntax:<br>
> arr.shift()

```js
let numbers = [1, 2, 3]

console.log(numbers.shift())    //=> 1
console.log(numbers)            //=> [ 2, 3 ]
```

#### Array.prototype.reverse()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

> Syntax:<br>
> arr.reverse()

```js
let numbers = [1, 2, 3]
console.log(numbers.reverse())  //=> [ 3, 2, 1 ]
console.log(numbers)            //=> [ 3, 2, 1 ]
```

#### Array.prototype.sort()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

> Syntax:<br>
> arr.sort()<br>
> arr.sort(compareFunction)

```js
let numbers = [3, 1, 2]

console.log(numbers.sort())     //=> [ 1, 2, 3 ]
console.log(numbers)            //=> [ 1, 2, 3 ]
```

#### Array.prototype.splice()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

> Syntax:<br>
> arr.splice(start)<br>
> arr.splice(start, deleteCount)<br>
> arr.splice(start, deleteCount, item1, item2, ...)

```js
let numbers = [1, 2, 3]

console.log(numbers.splice(1, 2)) //=> [ 2, 3 ]
console.log(numbers)              //=> [1]
```

### Accessor: includes, join, concat, slice

#### Array.prototype.includes()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

> Syntax:<br>
> arr.includes(searchElement)<br>
> arr.includes(searchElement, fromIndex)

```js
console.log([1, 2, 3].includes(1)) //=> true
```

#### Array.prototype.join()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

> Syntax:<br>
> arr.join()<br>
> arr.join(separator)

```js

console.log([1, 2, 3].join(' '))   //=> '1 2 3'
```

#### Array.prototype.slice()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

> Syntax:<br>
> arr.slice()<br>
> arr.slice(begin)<br>
> arr.slice(begin, end)

```js
console.log([1, 2, 3].slice(1,2))  //=> 2
```

#### Array.prototype.concat()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

> Syntax:<br>
> var new_array = old_array.concat(value1, value2, ...)

```js
console.log([ 1, 2].concat([ "hello", true, 7 ])) //=> [ 1, 2, 'hello', true, 7 ]
```

### Iteration: forEach, reduce, filter, map, every, some, find, reduceRight, entries, keys, values

[Funny map, reduce, filter](type/ArrayFunny.js)

#### Array.prototype.entries()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

> Syntax:<br>
> entries()

```js
for([key, value] of [1,2,3].entries()){console.log(`${key} => ${value}`)}
//=>
// '0 => 1'
// '1 => 2'
// '2 => 3'
```

#### Array.prototype.forEach()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

> Syntax:<br>
> arr.forEach(function callback(currentValue, index, array) {<br>
>     //your iterator<br>
> }[, thisArg]);

```js
[1, 2, 3].forEach(function(value){console.log(value)})
[1, 2, 3].forEach((value) => console.log(value))
[1, 2, 3].forEach(value => console.log(value))
//=>
// '1'
// '2'
// '3'
```

```js
[1, 2, 3].forEach(function(value, index){console.log(value+' '+index)})
[1, 2, 3].forEach((value, index) => console.log(value+' '+index))
//=>
// '0 => 1'
// '1 => 2'
// '2 => 3'
```

#### Array.prototype.map()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

> Syntax:<br>
> var new_array = arr.map(function callback(currentValue, index, array) {<br>
>     // Return element for new_array<br>
> }[, thisArg])

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.map(function(value){ value * 2}))
```

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.map((value) => value * 2))
      //=> [ 2, 4, 6, 8, 10, 12 ]
```

#### Array.prototype.reduce()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

> Syntax:<br>
> arr.reduce(callback)<br>
> arr.reduce(callback, initialValue)

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.reduce((addition, value) => addition + value)) //=> 21
```

#### Array.prototype.reduceRight()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

> Syntax:<br>
> arr.reduceRight(callback)<br>
> arr.reduceRight(callback, initialValue)

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.reduceRight((addition, value) => addition + value)) //=> 21
```

#### Array.prototype.filter()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

> Syntax:<br>
> let new_arr = old_arr.filter(callback)<br>
> let new_arr = old_arr.filter(callback, thisArg)

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.filter((value) => value % 2 == 0)) //=> [ 2, 4, 6 ]
```

#### Array.prototype.find()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

> Syntax:<br>
> arr.find(callback)<br>
> arr.find(callback, thisArg)

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.find((value) => value % 2 == 0)) //=> 2
```

#### Array.prototype.every()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

> Syntax:<br>
> arr.every(callback)<br>
> arr.every(callback, thisArg)

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.every((value) => value % 2 ==0)) //=> false
```

```js
let array = [2, 4, 6]
console.log(array.every((value) => value % 2 ==0)) //=> true
```

#### Array.prototype.some()

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

> Syntax:<br>
> arr.some(callback)<br>
> arr.some(callback, thisArg)

```js
let array = [1, 2, 3, 4, 5, 6]
console.log(array.some((value) => value % 2 == 0)) //=> true
```

#### Typed Array

Reference: [Typed Array Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [Array Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals)

```js
// From a length
let int8 = new Int8Array(2)
int8[0] = 42

console.log(int8[0])                // 42
console.log(int8.length)            // 2
console.log(int8.BYTES_PER_ELEMENT) // 1

// From an array
let arr = new Int8Array([21,31])

console.log(arr[1])                 // 31
```
