// ------lexial scope-------
// simpler, the lexical scoping means that inside the inner scope you can access variables of outer spaces 

const myName = "yaseen";
function func() {
    const myAge = "twenty";
    console.log(myName + myAge);

    // console.log(myAge);

    function Inner_func() {
        console.log(myAge);
    }
    Inner_func();
}
func();
// console.log(myAge)----> // get reference error 
console.log(myName)

// the lexical scope of inner_func() and global scope . within func()and you can access myNAme and myAge.
