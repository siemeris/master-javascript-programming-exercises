function joinArrayOfArrays(arr) {
  // your code here
  var arr2 = [];
  for (var i=0; i<arr.length; i++){
    arr2 = arr2.concat(arr[i]);
  }
return arr2
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']