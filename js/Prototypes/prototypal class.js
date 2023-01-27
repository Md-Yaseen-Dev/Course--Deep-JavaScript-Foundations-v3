//  WE don't write class any more but i think its important for us know you to understands how this plumbning works. where all it works

function Workshop(teacher) {
    this.teacher = teacher;
}
Workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
};

var deepjs = new Workshop("kyle");
var reactjs = new Workshop("suzy");

deepjs.ask("Is 'prototype' a class?");

reactjs.ask("isn't 'protoype' ugly?")

// FOR EXAMPLE

//  when we read a property from Object, and it's missing, javascript automariclally takes it from the prototype. in programming , this is called prototypal inheritance.

// one of special name for prototype is __proto__

let animal = {
    eat: true
};
let rabbit = {
    jumps: true
};
animal.__proto__ = rabbit; // it returns rabbit object.property and value
// rabbit.__proto__ = animal;
// console.log(rabbit.__proto__);
console.log(animal.__proto__);