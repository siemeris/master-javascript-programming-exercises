function getAverageOfElementsAtProperty(obj, key) {
  // your code
  var counter =0;
  if (typeof obj[key] === "undefined"){
    return 0
  }
  for (var i=0; i<obj[key].length; i++){
    counter += obj[key][i];
  }
return counter/obj[key].length
}
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2 


