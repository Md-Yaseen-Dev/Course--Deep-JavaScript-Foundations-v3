// implict Binding


var workshop = {
    teacher: "kyle",
    ask(question) {
        console.log(this.teacher, question);
    },
};
workshop.ask("what is implict binding")

//
function ask(question) {
    console.log(this.teacher, question)
}
var workshop1 = {
    teacher: "kyle",
    ask: ask,
};

var workshop2 = {
    teacher: "suzy",
    ask: ask,
}
workshop1.ask("how do I share a method?")
workshop2.ask("how do I share a method?")

// call and apply from internet source
function myFunction(param1, param2) {
    console.log(this)
}

const obj = {
    someKey: 1,
}

const param1 = 1, param2 = 2;
myFunction.call(obj, param1, param2)       // {someKey: 1}
myFunction.apply(obj, [param1, param2])    // {someKey: 1}

//  Explict Binding
// .apply .call . blind is used in explict binding

function ask(question) {
    console.log(this.teacher, question);

}
var workshop1= {
    teacher: "ramp",
}

var workshop4 = {
    teacher: "bunt",
}

ask.call(workshop1, "can I explicity set context?")
ask.call(workshop4, "can I explicity set context?")
