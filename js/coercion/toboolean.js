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




