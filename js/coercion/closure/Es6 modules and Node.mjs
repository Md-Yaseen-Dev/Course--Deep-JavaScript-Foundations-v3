// Modules are the piece or chunk of a JavaScript code written in a file. JavaScript modules help us to modularize the code simply by partitioning the entire code into modules that can be imported from anywhere. Modules make it easy to maintain the code, debug the code, and reuse the piece of code. Each module is a piece of code that gets executed once it is loaded.

var teacher = 'kyle';
export default function ask(question) {
    console.log(teacher, question)
}
ask("HI");

// modules are file based , and not only file based but they are singletons.
