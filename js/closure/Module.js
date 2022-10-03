function EmployeeDetails() {
    var name = "Mayank";
    var age = 30;
    var designation = "Developer"
    var salary = "50000"

    return {
        name: name,
        age: age,
        designation: designation

    }
}

var newEmployee = EmployeeDetails()

var userName = newEmployee.name;
var userAge = newEmployee.age;
var userDesignation = newEmployee.designation;
var usersalary = newEmployee.salary;

console.log(userName);
console.log(userAge);
console.log(userDesignation);
console.log(newEmployee);
console.log(usersalary);


// modules

var workshop = {
    teacher: "kyle",
    ask(question) {
        console.log(this.teacher, question);
    }
};

workshop.ask('Is this a module?');

// A module, the idea of a module, is that there are things that are public,that's
// your API, and there are things that are private, that's thing that nobody on the outside can touch.
// There's and idea of visibility,even if the only visibilty notion is either public or private, that is still an incantation of the idea of encapsulation.

// here we  can see properties and functions that exist are public, therefore it's not a module.

//Modules encapuslate date and behaviour methods together. The state of a module is held by its methods via closure.

var workshop = (function Module(teacher){
    var publicAPI ={ask,};
    return publicAPI;

    function ask(question){
        console.log(teacher, question);
    }
})('kyle');

workshop.ask("it's a module, right")