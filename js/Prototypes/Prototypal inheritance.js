function Workshop(teacher) {
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question){
    console.log(this.teacher,question);
};

function AnotherWorkshop(teacher) {
    Workshop.call(this,teacher);

}
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(msg){
    this.ask(msg.toUpperCase());
};

var JsRecentparts = new AnotherWorkshop("kyle");

JsRecentparts.speakUp("is this actually inheritance");