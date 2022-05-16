function or(expression1, expression2) {
  // your code here
  //if (expression1 || expression2){
    //return true
  //}
  //else {
   // return false
  //}
  return !(!expression1 && !expression2)
}

var output = or(true, false);
console.log(output); // --> true;