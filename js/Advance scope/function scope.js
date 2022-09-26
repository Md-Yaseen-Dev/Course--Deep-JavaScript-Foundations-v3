var teacher = "kyle";
 function otherclass(){
var teacher = "suzy";
console.log(teacher);
 }
 otherclass();
console.log(teacher);


// we think that we should use const but it is not a variable problem . here it doesn't  fix this problem and the real problem , the real root problem, is not that variable could be reassigned, but thaat we have a naming collison problem.

//we have a problem with two different entities 

// naturally we should put in different buckets
// now it is blue marble not a red marble

//There are three main problems that we solve by this defensive approach of the least exposure.
// 1. Naming collison problems.
//  2. If you hide something somebody's else can't accidentally of intentionally misuse of that thing.
//  if it:s exposed, you can gurantee that, at some PointerEvent, somebody's gonna use it.

//3. probably the important reason for this principle,it's often overlooked.

(otherclass)();
// if u put parentheses around a function and it's still gonna execute.
//The reason behind the problem is first parenthesis get the value of a variable and second parenthesiswill gonna execute