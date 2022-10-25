> # Equality (==)

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

[Equality-js](../js/Equality/)