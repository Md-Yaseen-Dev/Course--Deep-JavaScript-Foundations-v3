## Equality (==)

The Equality operator (==) checks whether its two Operands are equal,returning a Boolean result. Unlike the Strict equality operator, it attempts to convert and compare operands that are of different types

Equality comparsion provides three types they are :-

1. (===) strict equality(triple equals)
1. (==) loose equality (double equals)
1. <u> Object.is()</u>

#### Loose equality ==

Double equals (==) will perform a type of conversion when comparing two things and will handle NAN, -0, and +0 specially to conform to IEE 754(so NaN!=NaN, and -0 == +0 );

#### Strict equality using ===

Triple equals (===) will do the same comparsion as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned

#### Equality using Object.is()

Object.is() does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values).

###### To know more click Github Equality below:-

[Github-Equality](https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/tree/main/js/Equality)

## Scopes

Scopes in javascript refers to the current context of code, which determines the accessibilty of variables to javascript.

Javascript has the following kinds of scopes :

- <b>Global scope:</b> Variables defined outside any function, block, or module scope have everywherein the application.
  <space>
  when a module system is enabled it's harder to make global variables,but one can still do it. By defining a variable in HTML, outside any function, a global variable can be created

- <b>Module scope:</b> Before modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicity exported.

  <b>Function scope:</b> Function scope means that parameters and variables defined in a function are visible everywhere within the function, but are not visible outside of the function

  <b>Block scope :</b> Block scope is defined with curly braces. it is separated by { and }.
  <space>
  Variables declared with let and const can have block scope. They can only be accessed in the block in which they are defined.

    <b>Lexical scope</b>
  Lexical scope is tha ability of the inner function to access the outer scope in which is defined.

###### To know more click the link below :-
Scopes :- https://github.com/mohammedyaseen2211/Course--Deep-JavaScript-Foundations-v3/tree/main/js/scope 
