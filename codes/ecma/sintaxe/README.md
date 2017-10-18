# EcmaScript

* [Variable](#variable)
  * [Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations): [var](#var), [let](#let), [const](#const)
  * [Multiple Declaration](#multiple-declaration)
  * [Dynamic Type](#dynamic-type)
  * [Case Sensitive](#case-sensitive)
  * [Identifier Pattern](#identifier-pattern)
  * [Hoisting](#hoisting)
* Types:
  * Primitive
    * [Boolean](type/Boolean.js)
    * [Null](type/Null.js)
    * [Undefined](type/Undefined.js)
    * [Number](type/Number.js)
    * [String](type/String.js)
    * [Symbol](type/Symbol.js)
  * Object
    * Fundamental objects
      * [Boolean Object](type/BooleanObject.js)
      * [String](#string)
        * [Literal '', ""](#literal--)
        * [Multiline](#multiline)
        * [Special Characters / Escape Sequences](#special-characters--escape-sequences)
        * [Template String (ecma6) \`\`](#template-string-ecma6-)
        * [Array of characters](#array-of-characters)
        * [Unicode and JavaScript](#unicode-and-javaScript)
        * [Surrogate Pair <h,l>](#surrogate-pair-hl)
        * [Unicode problem](#unicode-problem)
        * [Object](#Object)
          * [Primitive](#primitive)
          * [String](#string)
          * [String OO](#string-oo)
        * [STRING METHODS](#string-methods)
          * [String.fromCharCode()](#string.fromCharCode)
          * [String.fromCharPoint()](#string.fromCharPoint)
        * [STRING INSTANCES](#string-instances)
          * [String.prototype.includes()](#string.prototype.includes)
          * [String.prototype.repeat()](#string.prototype.repeat)
          * [String.prototype.starstWith()](#string.prototype.starstWith)
          * [String.prototype.endsWith()](#string.prototype.endsWith)
          * [String.prototype.substr()](#string.prototype.substr)
          * [String.prototype.substring()](#string.prototype.substring)
          * [String.prototype.slice()](#string.prototype.slice)
          * [String.prototype.split()](#string.prototype.split)
          * [String.prototype.toLowerCase()](#string.prototype.toLowerCase)
          * [String.prototype.toUpperCase()](#string.prototype.toUpperCase)
          * [String.prototype.match()](#string.prototype.match)
          * [String.prototype.replace()](#string.prototype.replace)
          * [String.prototype.search()](#string.prototype.search)
          * [String.prototype.trim()](#string.prototype.trim)
      * Object: [Data](type/Object.js), [Class](type/ObjectClass.js), [Value vs Reference](type/ObjectValueReference.js)
      * Array: [Data](type/Array.js), [Functional](type/ArrayFunny.js), [Object](type/ArrayObject.js)
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
* [Expression & Operator](expressionAndOperator.js)
* [Statements and Declarations](statement.js)
* [Function](function.js)
* [Modules](modules/modules.js)
* [Async & Await](asyncAwait.js)
* Promise & Generator
  * [Promise](promise.js)
  * [Generator](generator.js)
* [Errors](handlingError.js)

## Variable

* * *

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
let 0number //SyntaxError (^\W)
let %number //SyntaxError (^\W)
let var //SyntaxError (keyword)
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

## String

* * *

Reference ([1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals), [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#String_literals))

### Literal '', ""
```js
console.log('h')           //=> 'h'
console.log('hello world') //=> 'hello world'
console.log("hello world") //=> 'hello world'
```

### Multiline
```js
let name = "hello \
world"
console.log(name) //=> 'hello world'

let name = "hello " +
              "world"
console.log(name) //=> 'hello world'

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

### Template String (ecma6) \`\`

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

### Object

#### Primitive
```js
let string = 'lorem ipsum'
console.log(string)        //=> 'lorem ipsum'
console.log(typeof string) //=> string
```

#### String
```js
let string = String('lorem ipsum')
console.log(string)        //=> 'lorem ipsum'
console.log(typeof string) //=> string
```

#### String OO
```js
let string = new String('lorem ipsum')
console.log(string)        //=> [String: 'lorem ipsum']
console.log(typeof string) //=> object
```

### STRING METHODS

#### String.fromCharCode()
```js
console.log(String.fromCharCode(65)) //=> A
```

#### String.fromCharPoint()
```js
console.log(String.fromCodePoint(48)) //=> 0
console.log(String.fromCodePoint(65)) //=> A
console.log(String.fromCodePoint(97)) //=> a
```

### STRING INSTANCES

#### String.prototype.length (Property)
```js
console.log("lorem ipsum".length)             //=> 11
console.log(String("lorem ipsum").length)     //=> 11
console.log(new String("lorem ipsum").length) //=> 11
```

#### String.prototype.includes()
```js
console.log("lorem ipsum".includes('lorem')) //=> true
```

#### String.prototype.repeat()
```js
console.log("hello".repeat(3)) //=> 'hellohellohello'
```

#### String.prototype.starstWith()
```js
console.log("lorem ipsum".startsWith('lorem')) //=> true
```

#### String.prototype.endsWith()
```js
console.log("lorem ipsum".endsWith('ipsum')) //=> true
```

#### String.prototype.substr()
```js
console.log("lorem ipsum".substr(1,2)) //=> 'or'
```

#### String.prototype.substring()
```js
console.log("lorem ipsum".substring(1,2)) //=> 'o'
```

#### String.prototype.slice()
```js
console.log("lorem ipsum".slice(-1)) //=> 'm'
console.log("lorem ipsum".slice(1,-1)) //=> 'orem ipsu'
```

#### String.prototype.split()
```js
console.log("lorem ipsum".split(''))           //=> [ 'l', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm' ]
console.log("lorem ipsum".split(' '))          //=> [ 'lorem', 'ipsum' ]
console.log("lorem ipsum dolor".split(' ', 1)) //=> [ 'lorem' ]
```

#### String.prototype.toLowerCase()
```js
console.log('LOREM IPSUM'.toLowerCase()) //=> 'lorem ipsum'
```

#### String.prototype.toUpperCase()
```js
console.log("lorem ipsum".toUpperCase()) //=> 'LOREM IPSUM'
```

#### String.prototype.match()
```js
console.log("lorem ipsum".match(/\w+/g)) //=> [ 'lorem', 'ipsum' ]
```

#### String.prototype.replace()
```js
console.log("lorem ipsum".replace('lorem', 'LOREM')) //=> 'LOREM ipsum'
```

#### String.prototype.search()
```js
console.log("lorem ipsum".search('lorem')) //=> 0
```

#### String.prototype.trim()
```js
console.log("  lorem  ipsum  ".trim()) //=> 'lorem  ipsum'
```
