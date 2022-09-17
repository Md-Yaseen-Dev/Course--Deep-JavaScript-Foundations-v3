var num = "";
console.log(Number(num));
var num = "-0";
console.log(Number(num));
var num = ".";
console.log(Number(num));
var num = false;
console.log(Number(num));
var num = true;
console.log(Number(num));
var num = undefined;
console.log(Number(num));
var num = [undefined]; // because empty string become zero first
console.log(Number(num));
var num = [1,2,3]; //because of empty string 
console.log(Number(num));
console.log(num.valueOf());



