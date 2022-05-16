function getLengthOfShortestElement(arr) {
    // your code here
    len = 10000;
    if (arr.length<1){
        return 0
    }
    for (var i=0; i<arr.length; i++){
        if(arr[i].length<len){
            len = arr[i].length;
        }
    }
return len
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3