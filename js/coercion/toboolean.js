//boolean falsy values
var bool ="";
console.log(Boolean(bool));
var bool = 0;
console.log(Boolean(bool));
var bool = undefined;
console.log(Boolean(bool));
var bool = NaN;
console.log(Boolean(bool));
var bool = null;
console.log(Boolean(bool));
//boolean truthy values
var bool ="foo";
console.log(Boolean(bool));
var bool =[1,2];
console.log(Boolean(bool));
var bool = function(){};
console.log(Boolean(bool));
var bool = {b:1}
console.log(Boolean(bool));
console.log(Boolean({}))
//  we can use boolean in two ways

// !!value
console.log("this is number :" + !!"39")
console.log('this is null : ' + !!(null))
console.log("this is number :" + !!"")


// note empty string is false but empty array or object always true

console.log("this is Empty Array :"+!![]);

// already we know that by using Boolean keyword we can use toBoolean.
 console.log(Boolean(NaN))
 console.log(Boolean(null))
