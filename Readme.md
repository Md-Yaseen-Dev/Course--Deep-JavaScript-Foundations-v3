# Equality (==)

The Equality operator (==) checks whether its two Operands are equal,returning a Boolean result. Unlike the Strict equality operator, it attemnpts to convert and compare operands that are of different types

Equality comparsion provides three types they are :-

1. (===) strict equality(triple equals)
1. (==) loose equality (double equals)
1. <u> Object.is()</u>

## Loose equality ==

Double equals (==) will perform a type of conversion when comparing two things and will handle NAN, -0, and +0 specially to conform to IEE 754(so NaN!=NaN, and -0 == +0 );

## Strict equality using ===

Triple equals (===) will do the same comparsion as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned

## Equality using Object.is()

Object.is() does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values).

## To know more click Github Equality below:-

[Github-Equality](https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/tree/main/js/Equality)

# Scopes

Scopes in javascript refers to the current context of code, which determines the accessibilty of variables to javascript.

Javascript has the following kinds of scopes :

## Global scope:
 Variables defined outside any function, block, or module scope have everywherein the application.
  when a module system is enabled it's harder to make global variables,but one can still do it. By defining a variable in HTML, outside any function, a global variable can be created

## Module scope:
 Before modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicity exported.
## Function scope:
 Function scope means that parameters and variables defined in a function are visible everywhere within the function, but are not visible outside of the function
## Block scope :
 Block scope is defined with curly braces. it is separated by { and }.
  Variables declared with let and const can have block scope. They can only be accessed in the block in which they are defined.

## Lexical scope
  Lexical scope is tha ability of the inner function to access the outer scope in which is defined.

## To know more click the link below :-
[Scopes](https://github.com/mohammedyaseen2211/)Course--Deep-JavaScript-Foundations-v3/tree/main/js/scope)

# Scopes Expression

## Function Expression

Function Expression allows us to create an anonymous function which doesn't have any function name which is the main difference between fucntion expression and function Declaration. A function expression can be used as an IIFE(immediately invoked Function Expression)which runs as soon as it is defined. A function expression has to be stored in a variable and can be accessed using variableName.

Syntax for function Decalartion:-

```javascript
function declaration() {
  console.log("hello declartion");
}
```

Syntax for function Expression(anonymous):-

```javascript
let variableName = function (x, y) {
  console.log("No name");
};
```

Syntax for function Expression (named):-

```javascript
let variablename = function functionName(x, y) {
  console.log("Named function");
};
```

## Naming Function Expression

If a function is specified as a function Expression. It can be given a name.

There are three reason to make a solid case they are :-

1. Reliable function self-reference (recursion.etc)
1. more Degubble stack traces
1. More self-documenting code

## Arrow function

Arrow function is a Function with Arrow mark `(=>)` and works as usual like regular function.

Arrow function is one of the features introduced in the Es6 version of javascript. It allows you to create functions in a cleaner way compared to regular functions.

for Example:-

```javascript
var arrowfunction = (a, b) => a * b;
```
## To know more click below :-
[Scope Expression](https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/tree/main/js/Scopes%20and%20Expression)