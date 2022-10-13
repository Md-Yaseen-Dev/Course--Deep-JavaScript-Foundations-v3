// closure is same as lexical scope but it work on lexical enivornment . The differnce between them is, innerfunction is a closure becaaues it closes over the variable of global scope from its lexical scope .

// In other words 


const global  = "globalscope";
function outerfunc(){
  let parentvar = " I am parent scope";
  console.log(global);

        function innerfunc(){
            let childvar = " i am child scope"
            console.log(parentvar);
            console.log(childvar);
            
        }
         return innerfunc;
}
//  outerfunc();
const Myinnerfunc = outerfunc();
Myinnerfunc();

// so innerfunc is a closure scope

// In simpler, the closure is a function that accesses its lexical scope even executed outside of its lexical scope.

//  In otherwords , the closure is a function that remembers the variables form the place where it is defined, regardless of where it is executed later.