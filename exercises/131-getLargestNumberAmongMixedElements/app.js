function getLargestNumberAmongMixedElements(arr) {
    // your code here
    var num =0;
    var numberFound = false;
    if (arr.length<1){
      return 0
    }
    for (var i=0; i<arr.length; i++){
        if (typeof arr[i] === "string"){
        }
        else{
            if (arr[i]>num){
                num = arr[i];
                numberFound = true;
            }
        }
    }
    if (!numberFound){
      return 0
    }
  return num
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5