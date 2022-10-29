// closure is same as lexical scope but it work on lexical enivornment . The differnce between them is, innerfunction is a closure becaaues it closes over the variable of global scope from its lexical scope .

// In other words 
// var a = undefined ;

// console.log(a);
// a=1 ;
var a =1;
const global  = "globalscope";
function outerfunc(){
  let parentvar = " I am parent scope";
  console.log(global); // because here u will not get because variable is declared but not intilazed before excuetion.

  // here algorithm works as an example of a function
           /*  here we assign another variable so it occurs in algorithm

           By the default every variable declared first

           var global ;

           console.log(global) -- gives undefined because of not intialized
           global = gs ; -- intialized now 

           {so, now again console it}

           console.log(global) here you get answer
          

           */
         // if we assign again hoisting will occur ---
         var global = "gs"
         console.log(global) // here you get answer
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