//  WE don't write class any more but i think its important for us know you to understands how this plumbning works. where all it works

function Workshop (teacher){
this. teacher = teacher;
}
Workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
};

var deepjs = new Workshop("kyle");
var reactjs = new Workshop("suzy");

deepjs.ask("Is 'prototype' a class?");

reactjs.ask("isn't 'protoype' ugly?")