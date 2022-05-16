function getLongestWordOfMixedElements(arr) {
    // your code here
    var contador =0;
    var str ='';
    var strfounder=false;
    if (arr.length<1){
        return ""
    }
    for (var i=0; i<arr.length; i++){
        if (typeof arr[i] === "number"){
        }
        else{
            if (arr[i].length>contador){
                contador = arr[i].length;
                str = arr[i];
                strfounder=true;
            }
        }
    }
    //If the array contains no strings, it should return an empty string.
    if (!strfounder){
        return ""
    }
return str
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'