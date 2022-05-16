function computeSumOfAllElements(arr) {
  // your code here
  var total = 0;
  for (var i=0; i<arr.length; i++){
    total += arr[i];
  }
return total
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6