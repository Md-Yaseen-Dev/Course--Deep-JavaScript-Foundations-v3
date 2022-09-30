var workshop ={
    teacher: "kyle",
    ask(question){
        console.log(this.teacher,question);
    },
};
workshop.ask("what is implict binding")

//
function ask(question){
    console.log(this.teacher,question)
}
var workshop1 = {
    teacher :"kyle",
    ask :ask,
};

var workshop2 ={
    teacher :"suzy",
    ask:ask,
}
workshop1.ask("how do I share a method?")
workshop2.ask("how do I share a method?")