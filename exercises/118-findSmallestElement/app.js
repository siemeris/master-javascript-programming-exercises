function findSmallestElement(arr) {
    // your code here
    var num=100000;
    if (arr.length<1){
        return 0
    }
    for(i=0; i<arr.length; i++){
        if (arr[i]<num){
            num = arr[i];
        }
    }
return num
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1