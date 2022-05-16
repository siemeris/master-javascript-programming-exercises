function squareElements(arr) {
  // your code here
  var newArr = [];
  for (var i=0; i<arr.length; i++){
    newArr.push(arr[i]**2)
  }
  return newArr
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]