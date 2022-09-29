




function mulFn() {
  var mul = 9;
  return function (val) {
    mul = mul * val;
    return mul;
  }
}

var mul = mulFn();

console.log(mul(13));


// closure

function ask(question) {
  setTimeout(function WaitAsec() {
    console.log(question);

  },400);

}

ask("what is closure?")