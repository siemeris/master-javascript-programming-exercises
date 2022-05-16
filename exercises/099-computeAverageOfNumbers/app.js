// Write your function here
function computeAverageOfNumbers(arr){
    var counter=0;
    for (var i=0; i<arr.length; i++){
        counter += arr[i];
    }
    if (arr.length == 0){
        return 0
    }
return counter/arr.length
}
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3