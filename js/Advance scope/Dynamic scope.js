// Dynamic scope
// Dynamic scope is opposite of lexical scope 
// Dynamic scope is that scope that is determined by runtime where as lexical scope determined by author time / compile time

// we think that  dynamic scope is bad and evil or weird, it justso unfimilar to us because we dont think of it that way.

var teacher = "kyle";

function ask(question) {
    console.log(teacher, question);
}
function otherclass() {
    var teacher = "simpson";

    ask("why?");
}
otherclass();

//dyanmic scoped depends on theoretical
