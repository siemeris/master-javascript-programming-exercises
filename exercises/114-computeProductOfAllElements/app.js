function computeProductOfAllElements(arr) {
    // your code here
    var prod = 1;
    if (arr.length < 1){
        return 0
    }
    for (var i=0; i<arr.length; i++){
        prod *= arr[i]
    }
    return prod
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60