
function filterEvenElements(arr) {
    // your code here
    var newArr = [];
    for (var i=0; i<arr.length; i++){
      if (arr[i]%2==0){
        newArr.push(arr[i]);
      }
    }
    return newArr
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
