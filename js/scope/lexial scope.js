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


// Another Example

const scope = "Globalscope";

function outerscope(){
     var scope1 = "parentscope"
      console.log(scope);

    function innerscope(){
        console.log(scope + "&" + scope1)
    }
    innerscope();

}
outerscope();

//  In simpler, lexial scope is an action of Innerscope function can be accessed to the outerscope function variable.

// Note we cannot access innerscope variable in outer scope function 

//    Example

const a = "outerland";

function Parentscope(){

    var b = "Parentland"
    console.log(a);

    function Childscope(){
        var c = "childland"
       console.log(a + "    & " + b)
       console.log(c)
    }
    Childscope();

    //  console.log(c)  // here you are getting refernce error is not defined.s
 }
Parentscope();