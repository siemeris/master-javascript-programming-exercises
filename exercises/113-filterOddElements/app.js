function filterOddElements(arr) {
  // your code here
  var newArr = [];
  for (var i=0; i<arr.length; i++){
    if (arr[i]%2!=0){
      newArr.push(arr[i]);
    }
  }
  return newArr
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]