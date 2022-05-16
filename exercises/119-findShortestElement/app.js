function findShortestElement(arr) {
    // your code here
    var len = 10000000;
    if (arr.length<1){
        return ''
    }
    for (i=0; i<arr.length; i++){
        if (arr[i].length < len){
            len = arr[i]
        }
    }
return len
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'