//  dundar prorotype

function workshop(teacher) {
    this.teacher = teacher;
}
workshop.prototype.ask = function (question) {
    console.log(this.teacher, question);
};

var deepjs = new workshop("kyle");
deepjs.constructor === workshop;
deepjs.__proto__ === workshop.prototype;
Object.getPrototypeOf(deepjs) === workshop.prototype; 

deepjs.ask("what's up")

// Object.prototype has a getter function called dunder proto.