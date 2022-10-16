// usually not to use arrow function because it is anonymous function.

// arrow function

var myfunc = (a, b) => a * b;
console.log(myfunc(3, 5));

// Regular function\
function reg(a, b) {
    return a * b;
}
// console.log(func(10,4))
console.log(reg(10, 4))

// Arrow function is just like regular function the main reason behind the arrow function is it is only callable function and not constructible.

// difference between regular function and arrow function

//    Regular function

let myfunc1 = {
    showArgs(){
        console.log(arguments);
    }
};
myfunc1.showArgs(1,2,3,4);

// // Arrow function

// let myfunc2 = {
//     showargs : () =>{
//         console.log(arguments);
//     }
// };
// myfunc2.showargs(4,3,2,1);


//  By using this keyword

// Unlike regular function , arrow functions do not their own this.
// The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non- arrow parent function.

let me = {
    name: "shaik",

    thisInArrow:()=>{
        console.log("my name is:"+ this.name);//here no this value
    },

    thisInRegular(){
        console.log("my name is"+this.name);
    }

}
me.thisInArrow();
me.thisInRegular();

// new keyword

// Regular functions created using function declarations or expressions are constructible and callable. since regular functions are constructible,they can be called by using the new keyword.

// However the arrow function are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.

let add = (x,y) => console.log(x + y);

add(2,3);
// new add(4,5);// type error add is not a constructor .


let add1 =  function sum(x,y){
    console.log(x+y);
}
add1(10,2);
new add1(4,5); // here constructor is working.