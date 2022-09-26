// Exectuting code before intilazing using var.
console.log(x);
var x = 5;
console.log(x);

// Exectuting code before intilazing using let.

// console.log(y);
let y = 10;
console.log(y);

// kyle simpson says that with let, you should only do the variable on the for loop with let.
// we should use right tool with the right way.
// if something is blocked scope then use let.
//use let for block scoope because it is exactly for blocked.


// function repeat(fn, n) {
//     var result;

//     for (let i = 0; i< n; i++){
//       result = fn( result, i);
//     }
//     return result;
// }

// repeat(11,2);

// here i dont understand in block scope var is used

function lookupRecord(searchstr){
    try{
        var id = getRecord (searchstr);

    }
    catch (err){
        var id =-1;
    }
    return id;
}
