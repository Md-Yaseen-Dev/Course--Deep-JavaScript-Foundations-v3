 > # Coercion

Coericion is a conversion of one data type to another data type.

_Coercion is divded into two types:-_

## Implict Coercion:-

 Implict coercion is a coversion of one data type to another data type automatically.

 _For Example:-_
  
```javascript
var string  = "20";

console.log(50 + string); //first line
console.log(50 - string);// second line


```
Output:-
```
5020
30
```
In first line Number is converted to string.

In second line string is coverted to number.

## Explict Coercion
Explicit Coercion is conversion of one data type to another data type manually  and it provides inbuilt methods .

_For Example:-_
 converting to number  we use built in function **Number()**.

 ```javascript
var a = "10";
var b = Number(a);
console.log(b);

 ```
 Here a is  a string but b changes into a number by  using builtin function i.e called explict coercion.
 And also we can use Boolean, String, Symbol,Bigint functions

## For more Information click below:-
[Coericion in js](../js/coercion/)

## for philosophy coericon click below:-
[philosophy coericion](../js/philosophy%20coercion/)

