// the first abstract operation have is called TOPrimitive
// toprimitive property is used as a function value , an object can be converted to a primitive value\ 
const object1 = {
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 42;
        }
        if (hint === 'string') {
            return "it is string";
        }
        return null;
    }
};
console.log(+object1);
console.log("object1");
console.log(object1.toString());
console.log(object1.valueOf());

// ToPrimitive
// If we have non primitive type like function, object array and we need a primitive equivalent


// Every Non-= primitive can have two methods available toString and valueOf. 

// If 'number' hint is sent, valueof() method is invoked first. and if we get a primitive type from the reuslt then we are done. But if the result is again a non primitive, toString gets invoked.

// hint : "Number"

// valueof();
// toString();

// if "string " hint is sent, toString() method is invoked first and if we get a primitive type form the result then we are done. But if the result is agian a  non primitive, valueOf() gets invoked.

// toString();
// valueOf();


//  Example
var ToPrimitive = [""];
console.log(ToPrimitive);
console.log([""].valueOf());// here still it is non primitive
var x  = ToPrimitive.toString();
console.log(x); // here showing error why ??
// non primitve string



// still confusing from non-primitive to primitive

//  here i Read that to do the converison, javascript tries to find and call three objects methods

// 1. call obj[symbol.toPrimitive](hint)- the method with the symbolic key symbol.toprimitive (system symbol)if such methods exists.

// 2. otherwise if hint string 
    //   * try calling obj.toString() or obj.valueof?(), whatever exists.

// 3. Otherwise if hint is number or default
    //  * try calling obj.valueOf|() or obj.toString(), whatever exists.


    // <- if the  method symbol.toPrimitive exists it is used for all hints, and no more methods are needed.->

//     // <-for instance, heree user object implements it:->

//     let user = {
//         name : "musk",
//         money: 2003,
//         [Symbol.toPrimitive](hint){
//             alert(hint)
//             return hint == "string" ? `{ name : ${this.name}}`: this.money
//         }
//     }
// //    var a = alert(user);
// //    console.log(alert(user));
//    console.log(alert(+user));
//    console.log(alert(user));
//    console.log(alert(user + 100));
//    console.log(alert(user + "smith"));//doubt confusing --  i know that + concatenation makes to add but it changes form number (what)??

//  here u  learn that symbol.toPrimitve converts object into string and number  
// if u write alert(user) // it access string
// if u write alert(+user)// it access number .. by using + operator

// note that u have to write string word in the comparison it will access otherwise gives number

//  And also note that by default after the user + operator works as default and gets adds.


// toString/valueOf

//    < methods toString and valueOf come from ancient times. they are not symbols (symbols did not exist that long ago)> but rather regular string named methods. they provide an alternative old style way to implement the conversion.

   /* The toString method returns a string "[object Object]" */

   /* The valueof method returns the object itself.*/


//    let user1 = {
//     name : "rabada",
// };
// console.log(alert(user1));
// console.log(alert(user1.valueOf()))

//  examples of toString and valueOf

let user2 = {
    name : "john",
    money :10000,

    toString(){
        return  `{name : ${this.name}}`
    },
    valueOf(){
        return this.money
        // return `{money : ${this.money}}`
    }
};

alert(+user2)
alert(user2)

