//  function workshop(teacher){
//     this.teacher=teacher;
// }
// workshop.prototype.ask = function(question){
//     console.log(this.teacher,question);
// };
// var deepJs = new workshop("simp");
// deepJs.ask = function(question){
//     this.ask(question.toUpperCase());
// };
// deepJs.ask("oops, is this finite recursion/");


function workshop(teacher,number){
    this.teacher=teacher;
    this.number = 2 * number
    console.log(this)
}
workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
};
var deepJs1 = new workshop("simp",2);
var deepJs2 = new workshop("Anony",4);


deepJs.ask = function(question){
    this.__proto__.ask.call(this,question.toUpperCase());
};
deepJs.ask("Is this fake polymorphism?");


