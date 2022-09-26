// Lexical scoping to resolve the variable names when a function is created inside another function. It determines the functions parent scope by looking at where the function was created instead of where it was invoked.


var teacher = "kyle";

function otherclass() {
    var teacher = "suzy";


    function ask(question) {
        console.log(teacher, question);
    }
    ask("why?");
}


// here teacher and otherclass belongs to global scopes , where teacher  and ask belongs to function scope of otherclass

function foo(a) {
    var b = a * 2;

    function bar(c) {
        console.log(a, b, c)

    }
    bar(b * 3);
}
foo(2); // 2,4,12

// here Bubble-1 encompasses the global scope, and has just one identifer in it:foo.

// bubble:2
// encompasses the scope of foo . which includes the three identifers a,bar,c

// bubble:3
// encompasses the scope of bar, and it incluedes just one identifier:c
