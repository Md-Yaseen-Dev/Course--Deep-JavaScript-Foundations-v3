var teacher = "kyle";
export default function ask(question){
    console.log(teacher,question);
};

import ask from "workshop.mjs";

ask("it is a default import, right?");

import * as workshop from "workshop.js";
workshop.ask("it is a namespce import, Right/")

//  i did n't understand
