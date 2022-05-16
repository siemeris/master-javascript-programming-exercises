function getLongestElement(arr) {
    // your code here
    var lon = 0;
    var indx = 0;
    if (arr.length<1){
        return ''
    }
    for(var i=0; i<arr.length; i++){
        if (arr[i].length>lon){
            lon = arr[i].length;
            indx = i;
        }
    }
return arr[indx]
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'