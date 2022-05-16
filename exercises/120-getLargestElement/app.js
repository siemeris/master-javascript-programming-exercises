function getLargestElement(arr) {
  // your code here
  var num=0;
  if (arr.length<1){
      return 0
  }
  for(i=0; i<arr.length; i++){
      if (arr[i]>num){
          num = arr[i];
      }
  }
return num
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;