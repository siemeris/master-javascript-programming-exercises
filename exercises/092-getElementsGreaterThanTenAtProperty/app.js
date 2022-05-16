// Write your function here
function getElementsGreaterThan10AtProperty(obj,key){
  newArray=[];
  for (var key in obj){
    for (i=0; i<obj[key].length;i++){
      if (obj[key][i]>10){
        newArray.push(obj[key][i]);
      }
    }
  }
  return newArray
}
var obj = {
    key: [1, 20, 30]
  };
  var output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]