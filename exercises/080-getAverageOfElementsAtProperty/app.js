// Write your function here
function getAverageOfElementsAtProperty(obj,key){
    contador = 0;
    if(obj[key].length<1 || !Array.isArray(obj[key])){return 0;}
    //If the array at the given key is empty, it should return 0.
    //If the property at the given key is not an array, it should return 0.
    for(var prop in obj[key]){
        contador = contador + obj[key][prop];
        }
    return contador/obj[key].length
}
var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2