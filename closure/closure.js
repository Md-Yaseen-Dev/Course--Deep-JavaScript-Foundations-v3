




function mulFn() {
  var mul = 9;
  return function (val) {
    console.log(mul * val);
    return mul;
  }
}

const mult = mulFn();

mult(12);


// closure

function ask(question) {
  setTimeout(function WaitAsec() {
    console.log(question);

  },40);

}

ask("what is closure?")


