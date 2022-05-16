function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var num =Infinity;
  var numberFound = false;
  if (arr.length<1){
    return 0
  }
  for (var i=0; i<arr.length; i++){
      if (typeof arr[i] === "string"){
      }
      else{
          if (arr[i]<num){
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

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4