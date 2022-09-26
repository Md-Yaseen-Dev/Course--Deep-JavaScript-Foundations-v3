var teacher = "kyle";

{
  let teacher = "suzy";
  console.log(teacher);
}
console.log(teacher);

// here let is working as a blocked scope they restrict outside the block. where var is function scope it works outside the block.


//  another example

function diff(x, y) {

  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }
  return y - x;
}
console.log(diff(10,2));