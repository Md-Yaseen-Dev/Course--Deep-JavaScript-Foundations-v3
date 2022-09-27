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

[Scopes](https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/tree/main/js/scope)

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

# Advance scope

## lexical scope

Lexical scoping to resolve the variable names when a function is created inside another function. It determines the functions parent scope by looking at where the function was created instead of where it was invoked.

```javascript
var a = 10;
var func = function () {
  var b = 20;
  console.log("a  and b is accessible(outer):", a, b);
  var innerFunc = function () {
    var c = 30;
    console.log("a and b and c is accessible(inner)", a, b, c);
  };
  innerFunc();
  return;
};
func();
console.log("only a is a accessible (global):", a);
```

## To know more example click below :-

[Lexical scope](https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/blob/main/js/Advance%20scope/Lexical%20socpe.js)

## Dynamic scopes

In dynamic scoping, you search in the local function first, then you search in the function that called the local function, then you search in the function that called that function, and so on, up the call-stack.

What is call-stack?

Call-stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc. Stack data structure is LIFO that means, last in first out.

In simple words:-
Dynamic scope is opposite of lexical scope. it is determined by runtime.

```javascript
function greeting() {
  sayhi();
}

function sayhi() {
  return "Hi!";
}
// Invoke the greeting function greeting();
```

Let’s understand dynamic scope by an example from Kyle Simpson’s book — You don’t know JS, Scope&Closure:

Assume that, if Javascript had dynamic scope, when foo() is executed, theoretically the code below would result 3 as the output, but how?

```javascript
function foo() {
  console.log(a); // 3  (not 2!)
}

function bar() {
  var a = 3;
  foo();
}

var a = 2;

bar();
```

When foo() cannot resolve the variable reference for a, instead of stepping up the nested (lexical scope — we will mention soon) scope chain, it walks up the call-stack, to find where foo() was called from. Since foo() was called from bar() it checks the variables in scope for bar(), and finds an a there with value 3.

To be clear, Javascript does not have dynamic scope. It has lexical scope. But note that this mechanism is kind of like dynamic scope.

**Dyanmic scope is theoretical**

## To know more examples click the link below:-

[Dynamic scope](https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/blob/main/js/Advance%20scope/Dynamic%20scope.js)

## Function scoping

A function scoped variable means that the variable defined within a function will not accessible from outside the function.

_for Example:-_

```javascript
var teacher = "kyle";
function otherclass() {
  var teacher = "suzy";
  console.log(teacher);
}
otherclass();
console.log(teacher);
```

we think that we should use const but it is not a variable problem . here it doesn't fix this problem and the real problem , the real root problem, is not that variable could be reassigned, but thaat we have a naming collison problem.

we have a problem with two different entities, naturally we should put in different buckets
Now it is blue marble not a red marble

There are three main problems that we solve by this defensive approach of the least exposure.

1. Naming collison problems.
2. If you hide something somebody's else can't accidentally of intentionally misuse of that thing. If it's exposed, you can gurantee that, at some PointerEvent, somebody's gonna use it.
3. probably the important reason for this principle,it's often overlooked.

otherclass(); If you put parentheses around a function and it's still gonna execute.
The reason behind the problem is first parenthesis get the value of a variable and second parenthesiswill gonna execute it.

## IIFE (Immediate Invoked Function Expression )

An IIFE is a javascript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman

```javascript
(function () {
  console.log("hello yaseen ");
})();
```

**IIFE is anonymous**

```javascript
(function (teacher) {
  console.log(teacher);
})("robart");
```

IIFEs are whether anonymous are not but that are functions, which means we can pass in values.

## To know more about click the link below :-

[IIFE Pattern](https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/blob/main/js/Advance%20scope/IIFE%20.js)

## Blocking Scoping

Block Level Scope: This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped. In order to access the variables of that specific block, we need to create an object for it. Variables declared with the var keyword, do not have block scope.

_for example:-_

```javascript
`            Scopes Restrict the variables outside`;
{
  let p = 110;
  const q = 100;
}
console.log(p); // refernce Error p is not defined
console.log(q); // refernce Error q is not defined

`scope doesn't restrict  var variable outside the block`;

{
  var a = 100;
  var b = 200;
}
console.log(a); // a =100
console.log(b); // b =100
```

So, here let and const are blocked scope because . they got reference error when we use outside of the block.
if you see var it is not a blocked scope because,it is working outside of the block.

## Choosing let or var

var and let are both used for variable declartion in javascript but the difference between them is that var is function scoped and let is blocked scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted.

```javascript
console.log(x); //undefined
var x = 5;
console.log(x); // 5
```

```javascript
console.log(y);
let y = 5;
console.log(y);
// ReferenceError: Cannot access 'y' before initialization
```

\*\* javascript let Vs var

| let                                        | var                                |
| ------------------------------------------ | ---------------------------------- |
| let is block-scoped.                       | var is function scoped.            |
| let does not allow to redeclare variables. | var allows to redeclare variables. |
| Hoisting does not occur in let.            | Hoisting occurs in var.            |

## Const Keyword

The const keyword, which is used to define a new variable in JavaScript. Generally, the var keyword is used to declare a JavaScript variable. Const is another keyword to declare a variable when you do not want to change the value of that variable for the whole program.

**According to kyle simpson**
kyle simpson says you should not even use let and you should only use const wherever possible.
so the problem with the const is essentially the const keyword doesn't carry its own weight within the language.

Every time the const keyword has ever been added to any programming language, programmers got confused.
the reason they get confused, is because when we think of const, and we think of the word Constant, doesn't change.but that's not what a programmer means by const.
A programming language designer means a variable that can't be reassigned.

```javascript
var teacher = "suzy";
teacher = "kyle";

const myTeacher = teacher;
myTeacher = "suzm"; // getting typeerror for assign

const teachers = ["kyle", "suzi"];
teachers[1] = "braine"; // but here assigning its working

console.log(teacher);
console.log(teachers);
console.log(myTeacher);
```

This is baggage of const . we should follow of mutual values and mutual assignments.

## Hoisting

Javascript Hoisting refers to the process whereby the interpreter appears to move the decalaration of functions, variables or classes to the top of their scope, prior to execution of the code. Hoisting allows functions to be safely used in code before they are declared.

```javascript
// hoisting in javascript is a behavior in which a function or a variable can be used before declaration> For example

var a;
a = 5;
console.log(a);
```

**Note :-**

 However in Javascript, intializations are not hoisted. For example,
```javascript

console.log(a);
var a = 5;//undefined
```